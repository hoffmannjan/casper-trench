export type Block = {
	body: {
		deploy_hashes: string[];
		proposer: string;
		transfer_hashes: string[];
	};
	hash: string;
	header: {
		accumulated_seed: string;
		body_hash: string;
		era_end: any;
		era_id: number;
		height: number;
		parent_hash: string;
		protocol_version: string;
		random_bit: boolean;
		state_root_hash: string;
		timestamp: string;
	};
};
