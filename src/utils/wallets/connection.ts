import { account } from '$stores/account';
import { notifyError } from '$utils/toast';
export const connectCasperSigner = async (network: 'casper' | 'casper-test' = 'casper-test') => {
	const { CLPublicKey } = window.CasperSDK;
	if (await window.casperlabsHelper.isConnected()) {
		window.casperlabsHelper
			.getActivePublicKey()
			.then((publicKey) => {
				const accountHash = CLPublicKey.fromHex(publicKey)
					.toAccountHashStr()
					.substring('account-hash-'.length);
				account.set({ publicKey, accountHash, network });
			})
			.catch((err) => {
				notifyError('Failed to get public key.');
			});
	} else {
		window.casperlabsHelper.requestConnection();
	}
};

export const disconnectWallet = async () => {
	window.casperlabsHelper.disconnectFromSite();
	account.set(null);
};
