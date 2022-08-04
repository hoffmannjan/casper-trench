import { account } from '$stores/account';
import { CasperClient, CLPublicKey } from 'casper-js-sdk';
import { get } from 'svelte/store';
import { ethers } from 'ethers';

export const getAccountBalance = async (): Promise<string> => {
	const casperClient = new CasperClient(
		get(account)?.network === 'casper'
			? `${import.meta.env.VITE_MAINNET_RPC_URL}`
			: `${import.meta.env.VITE_TESTNET_RPC_URL}`
	);
	const csprBalance = await casperClient.balanceOfByPublicKey(
		CLPublicKey.fromHex(get(account)?.publicKey)
	);
	const balance = ethers.utils.formatUnits(csprBalance, 9);
	return balance;
};
