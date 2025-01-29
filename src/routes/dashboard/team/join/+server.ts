import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url, locals: { supabase, user } }) => {
	// Ensure the user is authenticated
	if (!user) {
		throw redirect(303, '/auth');
	}

	// Extract TeamID from URL parameters
	const TeamID = url.searchParams.get('id');

	// Validate TeamID
	if (!TeamID) {
		throw redirect(303, '/dashboard/team?message=Team+ID+is+required');
	}

	// Fetch the team by TeamID
	const { data: team, error: teamError } = await supabase
		.from('teams')
		.select('*')
		.eq('TeamID', TeamID)
		.single();

	// Handle team not found
	if (teamError || !team) {
		throw redirect(303, '/dashboard/team?message=Team+not+found');
	}

	// Check if the team is full
	if (team.Members?.length >= 4) {
		throw redirect(303, '/dashboard/team?message=Team+is+full');
	}

	// Add the user to the team
	const { error: joinError } = await supabase.rpc('append_member_to_team', {
		member_data: user.user_metadata,
		team_id: TeamID
	});

	// Handle join error
	if (joinError) {
		console.error(joinError);
		throw redirect(303, '/dashboard/team?message=Failed+to+join+team');
	}

	// Success: Redirect with success message
	throw redirect(303, '/dashboard/team?message=Successfully+joined+the+team');
};
