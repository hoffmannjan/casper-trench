import { account } from '$stores/account';
import { notifyError, notifySuccess } from '$utils/toast';
import { CasperClient, CLPublicKey, DeployUtil } from 'casper-js-sdk';
import { ethers } from 'ethers';
import { get } from 'svelte/store';
export const transferCasper = async (
	toPublicKey: string,
	amount: string,
	networkName: 'casper' | 'casper-test' = 'casper-test',
	id: number,
	fee: string
) => {
	const fromPublicKey = CLPublicKey.fromHex(get(account)?.publicKey);
	const params = new DeployUtil.DeployParams(fromPublicKey, networkName, 1, 1800000);
	const session = DeployUtil.ExecutableDeployItem.newTransfer(
		ethers.utils.parseUnits(amount, 9),
		CLPublicKey.fromHex(toPublicKey),
		null,
		id
	);
	const deploy = DeployUtil.makeDeploy(
		params,
		session,
		DeployUtil.standardPayment(ethers.utils.parseUnits(fee))
	);
	const json = DeployUtil.deployToJson(deploy);
	await window.casperlabsHelper
		.sign(json, get(account).publicKey, toPublicKey)
		.then(async (signature) => {
			const casperClient = new CasperClient(
				networkName === 'casper'
					? `${import.meta.env.VITE_MAINNET_RPC_URL}`
					: `${import.meta.env.VITE_TESTNET_RPC_URL}`
			);
			const deployObject = DeployUtil.deployFromJson(signature);
			if (deployObject.val instanceof DeployUtil.Deploy) {
				(await casperClient.putDeploy(deployObject.val))
					? notifySuccess('Transfer successfull')
					: notifyError(`Failed to make your transfer`);
			}
		})
		.catch((err) => {
			notifyError('Could not sign your request');
		});
};
