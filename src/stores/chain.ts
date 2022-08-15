import { get, writable } from 'svelte/store';

export const network = writable<'casper' | 'casper-test'>('casper-test');
export const rpcUrl = writable<string>(
	get(network) === 'casper'
		? 'https://casper-node.tor.us'
		: 'https://node-clarity-testnet.make.services/rpc'
);
