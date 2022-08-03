import { account } from '$stores/account';
import { CLPublicKey } from 'casper-js-sdk';

export const connectCasperSigner = async () => {
	if (await window.casperlabsHelper.isConnected()) {
		window.casperlabsHelper
			.getActivePublicKey()
			.then((publicKey) => {
				const accountHash = CLPublicKey.fromHex(publicKey)
					.toAccountHashStr()
					.substring('account-hash-'.length);
				localStorage.setItem(
					'account',
					JSON.stringify({
						publicKey,
						accountHash
					})
				);
				account.set({ publicKey, accountHash });
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
	localStorage.removeItem('account');
	account.set(null);
};
