import axios from 'axios';
import { notifyError } from './toast';
const casperStatsBaseURL = `${import.meta.env.VITE_CASPERSTATS_URL}`;

export const getTopValidators = async () => {
	return await axios
		.get(`${casperStatsBaseURL}/state/get-validators/10`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.error({ err });
			notifyError('Could not fetch top validators');
		});
};

export const getLatestBlocks = async () => {
	return await axios
		.get(`${casperStatsBaseURL}/chain/get-latest-blocks/10`)
		.then((res) => {
			console.log(res.data);
			return res.data;
		})
		.catch((err) => {
			console.error({ err });
			notifyError('Could not fetch latest blocks');
		});
};
