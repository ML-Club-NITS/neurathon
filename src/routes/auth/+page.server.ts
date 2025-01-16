import type { Actions } from './$types';

export const actions: Actions = {
	signup: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const name = formData.get('name') as string;
		const phone = formData.get('phone') as string;
		const password = formData.get('password') as string;

		const { error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				data: {
					name,
					phone
				}
			}
		});

		if (error) {
			return { error: error?.message };
		}

		return { signup: true };
	},
	login: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		const { error } = await supabase.auth.signInWithPassword({ email, password });

		if (error) {
			return { error: error?.message };
		}
		
		return { login: true };
	},
	resetPassword: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		
		const { error } = await supabase.auth.resetPasswordForEmail(email, {
			redirectTo: 'http://localhost:5173/auth/update-password'
		});
		
		if (error) {
			return { error: error?.message };
		}

		return { resetPassword: true };
	}
};

// console.log(error);