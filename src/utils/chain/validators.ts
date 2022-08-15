import { rpcUrl } from '$stores/chain';
import { parseStringValue } from '$utils/converters';
import type { Bid, EraValidator } from '$utils/types/validator';
import { CasperServiceByJsonRPC, ValidatorsInfoResult } from 'casper-js-sdk';
import { get } from 'svelte/store';
export const queryValidators = async (): Promise<{
	_bidValidators: Bid[];
	_currentEraValidators: EraValidator[];
	_nextEraValidators: EraValidator[];
	_eraIDs: number[];
}> => {
	// @ts-ignore
	const { CasperServiceByJsonRPC } = window.CasperSDK;
	const casperService = new CasperServiceByJsonRPC(get(rpcUrl));
	return await casperService
		.getValidatorsInfo()
		.then((validatorsInfoResult: ValidatorsInfoResult) => {
			const { bids } = validatorsInfoResult.auction_state;
			const eraValidatorsInfo = validatorsInfoResult.auction_state.era_validators;
			let totalStakes: number[] = [0, 0];
			eraValidatorsInfo.forEach((eraValidatorInfo, i) => {
				eraValidatorInfo.validator_weights.forEach((validatorWeight) => {
					totalStakes[i] += parseStringValue(validatorWeight.weight);
					// console.log(i,parseStringValue(validatorWeight.weight), totalStakes[i])
				});
			});

			let bidValidators: Bid[] = [];
			let currentEraValidators: EraValidator[] = [];
			let nextEraValidators: EraValidator[] = [];
			let eraIDs: number[] = [];
			bids &&
				bids.forEach((bid) => {
					const selfStake = parseStringValue(bid.bid.staked_amount);
					let totalDelegated = 0;
					bid?.bid?.delegators?.forEach((delegator) => {
						totalDelegated += parseStringValue(delegator.staked_amount);
					});
					let totalBid = selfStake + totalDelegated;
					const selfStakePercentage = (selfStake / totalBid) * 100;
					bidValidators.push({
						public_key: bid.public_key,
						numOfDelegators: bid?.bid?.delegators?.length,
						delegationRate: bid.bid?.delegation_rate,
						totalBid,
						totalDelegated,
						selfStake,
						selfStakePercentage,
						networkPercentage: 0,
						inactive: true
					});
				});

			bidValidators &&
				bidValidators.forEach((bidValidator) => {
					eraValidatorsInfo.forEach((eraValidatorInfo, i) => {
						eraIDs.push(eraValidatorInfo.era_id);
						eraValidatorInfo.validator_weights.forEach((validatorWeight) => {
							if (bidValidator.public_key === validatorWeight.public_key) {
								const selfStake = parseStringValue(validatorWeight.weight);
								let networkPercentage = (selfStake / totalStakes[i]) * 100;

								if (i === 0) {
									currentEraValidators.push({
										publicKey: validatorWeight.public_key,
										selfStake,
										delegationRate: bidValidator.delegationRate,
										numOfDelegators: bidValidator.numOfDelegators,
										totalStake: totalStakes[i],
										selfStakePercentage: bidValidator.selfStakePercentage,
										networkPercentage
									});
									bidValidator.networkPercentage = networkPercentage;
								} else {
									nextEraValidators.push({
										publicKey: validatorWeight.public_key,
										selfStake,
										delegationRate: bidValidator.delegationRate,
										numOfDelegators: bidValidator.numOfDelegators,
										totalStake: totalStakes[i],
										selfStakePercentage: bidValidator.selfStakePercentage,
										networkPercentage
									});
								}
							}
						});
					});
				});

			// console.table(currentEraValidators)
			// console.table(nextEraValidators)
			// console.table(bidValidators)
			return {
				_bidValidators: bidValidators,
				_currentEraValidators: currentEraValidators,
				_nextEraValidators: nextEraValidators,
				_eraIDs: eraIDs
			};
		})
		.catch((err) => {
			console.log('Validators Err', err);
		});
};

export const queryValidator = async (publicKey: string) => {
	const casperService = new CasperServiceByJsonRPC(get(rpcUrl));
	// return await casperService.
};
