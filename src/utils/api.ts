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
