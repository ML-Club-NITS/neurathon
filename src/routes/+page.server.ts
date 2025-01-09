import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const currentTime = new Date().toISOString();

	return {
		currentTime
	};
};
