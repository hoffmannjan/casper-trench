import { account } from '$stores/account';
import { CLPublicKey } from 'casper-js-sdk';

export const connectCasperSigner = async (network: 'casper' | 'casper-test') => {
	if (await window.casperlabsHelper.isConnected()) {
		console.log('Connected');
		window.casperlabsHelper
			.getActivePublicKey()
			.then((publicKey) => {
				console.log(`Public Key: ${publicKey}`);
				const accountHash = CLPublicKey.fromHex(publicKey)
					.toAccountHashStr()
					.substring('account-hash-'.length);
				localStorage.setItem(
					'account',
					JSON.stringify({
						publicKey,
						accountHash,
						network
					})
				);
				account.set({ publicKey, accountHash, network });
			})
			.catch((err) => {
				console.log(`Public Key Error: ${err}`);
			});
	} else {
		console.log('Not Connected');
		window.casperlabsHelper.requestConnection();
	}
};
