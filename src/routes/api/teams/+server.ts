import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ locals: { supabase } }) => {
	const { data } = await supabase.from('teams').select('count');
	return new Response(JSON.stringify({ data }), {
		headers: { 'Content-Type': 'application/json' }
	});
};
