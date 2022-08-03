import { writable } from 'svelte/store';

interface Account {
	publicKey: string;
	accountHash: string;
}
export const account = writable<Account>(null);
