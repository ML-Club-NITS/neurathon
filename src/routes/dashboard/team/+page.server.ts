import { redirect } from '@sveltejs/kit';
import type { Actions } from '../../$types';

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
			return { error: error.message };
		}
		redirect(303, '/dashboard/team');
	},
	join: async ({ request, locals: { supabase, user } }) => {
		const formData = await request.formData();
		const TeamID = formData.get('teamid') as string;

		const { data, error } = await supabase.from('teams').select().eq('TeamID', TeamID);

		if (error) {
			return { error: error.message };
		} else if (data && data.length > 0) {
			if (data[0].Members.length < 4) {
				const { error } = await supabase.rpc('append_member_to_team', {
					member_data: user?.user_metadata,
					team_id: parseInt(TeamID, 10) ?? 0
				});

				if (error) {
					return { error: error.message };
				}
			} else {
				return { error: 'Team is full' };
			}
		} else {
			return { error: 'Team not found' };
		}

		redirect(303, '/dashboard/team');
	},
	leave: async ({ locals: { supabase, user } }) => {
		const { data, error } = await supabase.rpc('remove_member_from_teams', { member_id: user?.id });

		if (data) {
			redirect(303, '/dashboard/team');
		} else {
			return { error: error?.message };
		}
	},
	delete: async ({ locals: { supabase, user } }) => {
		const { data, error } = await supabase.rpc('delete_team_by_creator', { member_id: user?.id });

		if (data) {
			redirect(303, '/dashboard/team');
		} else {
			return { error: error?.message };
		}
	}
};
