import type { Actions } from './$types';

export const actions: Actions = {
	submmision: async ({ request, locals: { supabase, user } }) => {
		const formData = await request.formData();
		const github = formData.get('github-repo') as string;
		const deployment = formData.get('deployment-link') as string;
		const uml = formData.get('uml-design') as string;

		const round1Data = {
			github,
			deployment,
			uml
		};

		const { data: teamID, error: teamError } = await supabase.rpc('get_team', {
			member_id: user?.id
		});

		if (teamError) {
			return { error: teamError?.message };
		}

		const { error } = await supabase
			.from('teams')
			.update({ Round1: round1Data })
			.eq('TeamID', teamID);

		if (error) {
			return { error: error?.message };
		}

		return { submission: true };
	}
};
