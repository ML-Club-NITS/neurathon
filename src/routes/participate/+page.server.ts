import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends, locals: { supabase } }) => {
	depends('supabase:db:teams');

	const { data } = await supabase.from('teams').select('count');

	return { data };
};
