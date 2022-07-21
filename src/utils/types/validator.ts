export type Validator = {
	APY: number;
	block_height: number;
	circulating_supply: string;
	era_validators: {
		era_id: number;
		validators: [
			{
				public_key: string;
				bid: {
					delegation_rate: number;
					delegators: number;
					staked_amount: string;
					total_stake: string;
				};
				information: {
					details: string;
					email: string;
					icon: string;
					links: [
						{
							tag: string;
							link: string;
						}
					];
					name: string;
					website: string;
				};
			}
		];
	};
	total_active_validators: number;
	total_bid_validators: number;
	total_stake: string;
	total_supply: string;
};

export type EraValidator = {
	api_version: string;
	auction_state: {
		state_root_hash: string;
		block_height: number;
		era_validators: {
			era_id: number;
			validator_weights: {
				public_key: string;
				weight: string;
				delegators: number;
				name: string;
				icon: string;
			}[];
			total_stake: string;
		}[];
	};
};

export type ValidatorAuction = {
	api_version: string;
	auction_state: {
		state_root_hash: string;
		block_height: number;
		bids: {
			public_key: string;
			bid: {
				bonding_purse: string;
				staked_amount: string;
				delegation_rate: number;
				inactive: boolean;
				number_of_delegators: number;
			};
			total_bid: string;
			total_delegated: string;
			name: string;
			icon: string;
		}[];
	};
};

export type ValidatorDetails = {
	public_key: string;
	bid: {
		bonding_purse: string;
		staked_amount: string;
		delegation_rate: number;
		delegators: {
			public_key: string;
			staked_amount: number;
			bonding_purse: string;
			delegatee: string;
		}[];
		inactive: boolean;
		total_stake: string;
	};
	information: {
		name: string;
		email: string;
		icon: string;
		website: string;
		links: {
			tag: string;
			link: string;
		}[];
		details: string;
	};
};
