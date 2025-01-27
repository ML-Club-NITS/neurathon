import type { Actions } from './$types';

export const actions: Actions = {
	submmision: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const github = formData.get('github-repo') as string;
		const deployment = formData.get('deployment-link') as string;
		const uml = formData.get('uml-design') as string;
		const teamID = formData.get('teamID') as string;

		const round1Data = {
			github,
			deployment,
			uml
		};

		const { error } = await supabase
			.from('teams')
			.update({ Round1: round1Data })
			.eq('TeamID', teamID);

		if (error) {
			return { error: error?.message };
		}

		return { submission: true };
	},
	addGithub: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const githubLink = formData.get('githubLink') as string;
		const teamID = formData.get('teamID') as string;

		// Update the `github` column in the `teams` table
		const { error } = await supabase
			.from('teams')
			.update({ github: githubLink })
			.eq('id', teamID);

		if (error) {
			return {
				error: error.message
			};
		}

		return {
			success: true,
			message: 'GitHub repository URL updated successfully!'
		};
	}
};
