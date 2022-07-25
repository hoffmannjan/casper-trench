import axios from 'axios';
import { notifyError } from './toast';
const casperStatsBaseURL = `${import.meta.env.VITE_CASPERSTATS_URL}`;

export const getEconomics = async () => {
	return await axios
		.get(`${casperStatsBaseURL}/info/economics`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			notifyError('Could not fetch economics');
		});
};

export const getStats = async () => {
	return await axios
		.get(`${casperStatsBaseURL}/info/get-stats`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			notifyError('Could not fetch stats');
		});
};
export const getTopValidators = async () => {
	return await axios
		.get(`${casperStatsBaseURL}/state/get-validators/10`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			notifyError('Could not fetch top validators');
		});
};

export const getLatestBlocks = async () => {
	return await axios
		.get(`${casperStatsBaseURL}/chain/get-latest-blocks/10`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			notifyError('Could not fetch latest blocks');
		});
};

export const getEraValidators = async () => {
	return await axios
		.get(`${casperStatsBaseURL}/state/get-era-validators`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			notifyError('Could not fetch era validators');
		});
};

export const getAuctionBids = async () => {
	return await axios
		.get(`${casperStatsBaseURL}/state/get-bids`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			notifyError('Could not fetch auction bids');
		});
};

export const getValidator = async (address: string) => {
	return await axios
		.get(`${casperStatsBaseURL}/state/get-validator/${address}`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			notifyError('Could not fetch validator details');
		});
};

export const getAccount = async (address: string) => {
	return await axios
		.get(`${casperStatsBaseURL}/account/get-account/${address}`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			notifyError('Could not fetch account details');
		});
};
export const getType = async (address: string) => {
	return await axios
		.get(`${casperStatsBaseURL}/info/get-type/${address}`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			notifyError('Could not fetch type');
		});
};

export const getProposerBlocks = async (address: string, count: number, start: number) => {
	return await axios
		.get(`${casperStatsBaseURL}/chain/get-proposer-blocks`, {
			params: {
				validator: address,
				count,
				start
			}
		})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			notifyError('Could not fetch verified blocks');
		});
};

export const getTopAccounts = async (count: number, start: number) => {
	return await axios
		.get(`${casperStatsBaseURL}/account/get-rich-accounts`, {
			params: {
				count,
				start
			}
		})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			notifyError('Could not fetch top accounts');
		});
};
