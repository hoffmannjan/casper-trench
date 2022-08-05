import { account } from '$stores/account';
import { CasperClient, CLPublicKey } from 'casper-js-sdk';
export const connectCasperSigner = async (network: 'casper' | 'casper-test' = 'casper-test') => {
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
				console.log(`Public Key Error: ${err}`);
			});
	} else {
		window.casperlabsHelper.requestConnection();
	}
};

export const disconnectWallet = async () => {
	window.casperlabsHelper.disconnectFromSite();
	account.set(null);
};
