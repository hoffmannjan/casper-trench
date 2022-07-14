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
