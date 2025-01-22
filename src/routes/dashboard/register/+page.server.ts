import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from '../../$types';

export const load: PageServerLoad = async ({ depends, locals: { supabase, user } }) => {
	depends('supabase:db:teams');

	const { data, error } = await supabase.rpc('get_team', { member_id: user?.id });

	if (error) {
		console.error(error);
	}
	if (data) {
		const { data: team, error } = await supabase.from('teams').select().eq('TeamID', data);

		if (error) {
			console.error(error);
		}

		return { TeamID: data, team: team ? (team[0] ?? []) : [] };
	} else {
		console.log('UUID does not exist in any team.');
	}

	return { TeamID: null, team: [], metadata: [] };
};

export const actions: Actions = {
	register: async ({ request, locals: { supabase, user } }) => {
		const formData = await request.formData();
		const TeamName = formData.get('teamname') as string;

		const { error } = await supabase.from('teams').insert({
			TeamName,
			CreatedBy: user?.id,
			Members: [user?.user_metadata]
		});

		if (error) {
			console.error(error);
		}
		redirect(303, '/participate');
	},
	join: async ({ request, locals: { supabase, user } }) => {
		const formData = await request.formData();
		const TeamID = formData.get('teamid') as string;

		const { data, error } = await supabase.from('teams').select().eq('TeamID', TeamID);

		if (error) {
			console.error(error);
		} else if (data && data.length > 0) {
			if (data[0].Members.length < 4) {
				const { error } = await supabase.rpc('append_member_to_team', {
					member_data: user?.user_metadata,
					team_id: parseInt(TeamID, 10) ?? 0
				});

				if (error) {
					console.error(error);
				}
			} else {
				console.log('Team is full');
			}
		} else {
			console.error('Team not found');
		}

		redirect(303, '/participate');
	},
	leave: async ({ locals: { supabase, user } }) => {
		const { data, error } = await supabase.rpc('remove_member_from_teams', { member_id: user?.id });

		if (data) {
			redirect(303, '/participate');
		} else {
			console.error(error);
		}
	},
	delete: async ({ locals: { supabase, user } }) => {
		const { data, error } = await supabase.rpc('delete_team_by_creator', { member_id: user?.id });

		if (data) {
			redirect(303, '/participate');
		} else {
			console.error(error);
		}
	}
};
