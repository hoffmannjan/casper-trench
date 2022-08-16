import { rpcUrl } from '$stores/chain';
import type { Block } from '$utils/types/block';
import { CasperServiceByJsonRPC } from 'casper-js-sdk';
import { get } from 'svelte/store';

export const getLatestBlocks = async (numberOfBlocks?: number): Promise<Block[]> => {
	// @ts-ignore
	// const { CasperServiceByJsonRPC } = browser&& window.CasperSDK;
	const casperService = new CasperServiceByJsonRPC(get(rpcUrl));
	let blocks: Block[] = [];
	await casperService
		.getLatestBlockInfo()
		.then(async (getBlockResult) => {
			const { height } = getBlockResult.block.header;
			const num = numberOfBlocks ?? height;
			for (let i = height; i > height - num; i--) {
				await casperService
					.getBlockInfoByHeight(i)
					.then((getBlockResult) => {
						const { block } = getBlockResult;
						blocks.push({
							height: block.header.height,
							eraID: block.header.era_id,
							transactions: block.body.deploy_hashes.length ?? 0,
							timestamp: Date.parse(block.header.timestamp.toString()),
							hash: block.hash,
							validatorPublicKey: block.body.proposer
						});
					})
					.catch((err) => {
						console.log('Block By Height Error: ', err);
					});
			}
		})
		.catch((err) => {
			console.log('Latest Block Error: ', err);
		});
	return blocks;
};

// export const getLatestBlocks= async(numberOfBlocks:number)=>{
//     const blockQuery =await queryBlocks(numberOfBlocks)

// }

export const getBlocks = async (startHeight: number, endHeight: number): Promise<Block[]> => {
	// @ts-ignore
	// const { CasperServiceByJsonRPC } =browser&& window.CasperSDK;
	const casperService = new CasperServiceByJsonRPC(get(rpcUrl));
	let blocks: Block[] = [];
	console.log(startHeight, endHeight);
	for (let i = endHeight; i >= startHeight; i--) {
		await casperService
			.getBlockInfoByHeight(i)
			.then((getBlockResult) => {
				const { block } = getBlockResult;
				blocks.push({
					height: block.header.height,
					eraID: block.header.era_id,
					transactions: block.body.deploy_hashes.length ?? 0,
					timestamp: Date.parse(block.header.timestamp.toString()),
					hash: block.hash,
					validatorPublicKey: block.body.proposer
				});
			})
			.catch((err) => {
				console.log('Block By Height Error: ', err);
			});
	}
	return blocks;
};
