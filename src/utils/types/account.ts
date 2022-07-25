export type TopAccount = {
	account_hash: string;
	public_key_hex: string;
	balance: string;
	active_date: string;
	transferrable: string;
	staked_amount: string;
};

export type Account = {
	account_hash: string;
	public_key_hex: string;
	balance: string;
	active_date: string;
	name: string;
	transferrable: string;
	total_staked: string;
	total_reward: string;
	unbonding: string;
};
