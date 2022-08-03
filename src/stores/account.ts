import { writable } from 'svelte/store';

interface Account {
	publicKey: string;
	accountHash: string;
	network: string;
}
export const account = writable<Account>(null);
