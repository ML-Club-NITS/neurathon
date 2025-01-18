import type { Actions } from './$types';

export const actions: Actions = {
	updatePassword: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const new_password = formData.get('new_password') as string;

		const { error } = await supabase.auth.updateUser({
			password: new_password
		});

		if (error) {
			return { error: error?.message };
		}

		return { success: true };
	}
};
