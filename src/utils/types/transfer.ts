export type Transfer = {
	deploy_hash: string;
	timestamp: string;
	from_address: string;
	to_address: string;
	value: string;
	fee: string;
	from_balance: string;
	to_balance: string;
	type: string;
};

export type BlockTransfer = {
	deploy_hash: string;
	from: string;
	to: string;
	source: string;
	target: string;
	amount: string;
	gas: string;
	id: any;
};
