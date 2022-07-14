import axios from 'axios';
const casperStatsBaseURL = `${import.meta.env.VITE_CASPERSTATS_URL}`;

export const getTopValidators = async () => {
	return await axios
		.get(`${casperStatsBaseURL}/state/get-validators/10`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.error({ err });
		});
};
