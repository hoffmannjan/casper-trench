export type AccountTransaction = {
	deploy_hash: string;
	hash: string;
	timestamp: string;
	public_key: string;
	gas_price: number;
	cost: string;
	status: string;
	account_balance: string;
	type: string;
	amount: string;
};
export type Transaction = {
	deploy_hash: string;
	timestamp: string;
	from_address: string;
	to_address: string;
	value: string;
	fee: string;
	from_balance: string;
	to_balance: string;
};
