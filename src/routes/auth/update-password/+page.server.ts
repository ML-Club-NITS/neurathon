import { redirect } from '@sveltejs/kit';

import type { Actions } from './$types';

export const actions: Actions = {
	updatePassword: async ({ request, locals: { supabase, user } }) => {
		const formData = await request.formData();
		const new_password = formData.get('new_password') as string;

		const { data, error } = await supabase.auth.updateUser({
			password: new_password
		});

		if (error) {
			console.error(error);
			redirect(303, '/auth/error');
		} else {
			redirect(303, '/auth');
		}
	}
};
