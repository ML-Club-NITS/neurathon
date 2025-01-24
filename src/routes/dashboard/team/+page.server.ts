import { fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from '../../$types';

export const load: PageServerLoad = async ({ depends, locals: { supabase, user } }) => {
	depends('supabase:db:teams'); // Invalidate cache when teams data changes

	try {
		// Fetch the team ID for the current user
		const { data: teamId, error: teamIdError } = await supabase.rpc('get_team', {
			member_id: user?.id
		});

		if (teamIdError) {
			console.error('Error fetching team ID:', teamIdError);
			return { TeamID: null, team: null };
		}

		if (!teamId) {
			console.log('User is not part of any team.');
			return { TeamID: null, team: null };
		}

		// Fetch the team details using the team ID
		const { data: team, error: teamError } = await supabase
			.from('teams')
			.select('*')
			.eq('TeamID', teamId)
			.single();

		if (teamError) {
			console.error('Error fetching team details:', teamError);
			return { TeamID: null, team: null };
		}

		return { TeamID: teamId, team };
	} catch (error) {
		console.error('Unexpected error in load function:', error);
		return { TeamID: null, team: null };
	}
};

export const actions: Actions = {
	register: async ({ request, locals: { supabase, user } }) => {
		try {
			const formData = await request.formData();
			const teamName = formData.get('teamname') as string;

			if (!teamName) {
				return fail(400, { message: 'Team name is required.' });
			}

			// Create a new team
			const { error } = await supabase.from('teams').insert({
				TeamName: teamName,
				CreatedBy: user?.id,
				Members: [user?.user_metadata] // Add the creator as the first member
			});

			if (error) {
				console.error('Error creating team:', error);
				return fail(500, { message: 'Failed to create team.' });
			}

			return { success: true, message: 'Team created successfully!' };
		} catch (error) {
			console.error('Error in register action:', error);
			return fail(500, { message: 'An unexpected error occurred.' });
		}
	},

	join: async ({ request, locals: { supabase, user } }) => {
		try {
			const formData = await request.formData();
			const teamId = formData.get('teamid') as string;

			if (!teamId) {
				return fail(400, { message: 'Team ID is required.' });
			}

			// Fetch the team to check if it exists and has space
			const { data: team, error: teamError } = await supabase
				.from('teams')
				.select('*')
				.eq('TeamID', teamId)
				.single();

			if (teamError) {
				console.error('Error fetching team:', teamError);
				return fail(500, { message: 'Failed to fetch team details.' });
			}

			if (!team) {
				return fail(404, { message: 'Team not found.' });
			}

			if (team.Members.length >= 4) {
				return fail(400, { message: 'Team is full.' });
			}

			// Add the user to the team
			const { error: appendError } = await supabase.rpc('append_member_to_team', {
				member_data: user?.user_metadata,
				team_id: parseInt(teamId, 10)
			});

			if (appendError) {
				console.error('Error joining team:', appendError);
				return fail(500, { message: 'Failed to join team.' });
			}

			return { success: true, message: 'Joined team successfully!' };
		} catch (error) {
			console.error('Error in join action:', error);
			return fail(500, { message: 'An unexpected error occurred.' });
		}
	},

	leave: async ({ locals: { supabase, user } }) => {
		try {
			// Remove the user from their current team
			//   { data, error }
			const { error } = await supabase.rpc('remove_member_from_teams', {
				member_id: user?.id
			});

			if (error) {
				console.error('Error leaving team:', error);
				return fail(500, { message: 'Failed to leave team.' });
			}

			return { success: true, message: 'Left team successfully!' };
		} catch (error) {
			console.error('Error in leave action:', error);
			return fail(500, { message: 'An unexpected error occurred.' });
		}
	},

	delete: async ({ locals: { supabase, user } }) => {
		try {
			// Delete the team if the user is the creator
			// { data , error }
			const { error } = await supabase.rpc('delete_team_by_creator', {
				member_id: user?.id
			});

			if (error) {
				console.error('Error deleting team:', error);
				return fail(500, { message: 'Failed to delete team.' });
			}

			return { success: true, message: 'Team deleted successfully!' };
		} catch (error) {
			console.error('Error in delete action:', error);
			return fail(500, { message: 'An unexpected error occurred.' });
		}
	}
};
