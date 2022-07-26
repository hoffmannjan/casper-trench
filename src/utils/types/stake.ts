export type Delegation = {
	delegator: string;
	validator: string;
	amount: string;
	status: boolean;
};

export type Undelegation = {
	delegator: string;
	validator: string;
	amount: string;
	timestamp: string;
	release_timestamp: number;
	status: boolean;
};
