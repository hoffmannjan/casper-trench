import { rpcUrl } from '$stores/chain';
import axios from 'axios';
import { get } from 'svelte/store';

export const QueryRPC = async (method: string, params: any) => {
	const body = JSON.stringify({
		jsonrpc: '2.0',
		id: new Date().getTime(),
		method,
		params
	});

	await fetch(get(rpcUrl), {
		method: 'post',
		body,
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log('RPC Err:  ', err);
		});
};
