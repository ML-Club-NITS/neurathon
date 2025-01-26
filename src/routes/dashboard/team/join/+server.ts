import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url, locals: { supabase, user } }) => {
  if (!user) {
    throw redirect(303, '/auth');
  }

  const TeamID = url.searchParams.get('id') as string;

  if (!TeamID) {
    throw redirect(303, '/dashboard?message=Team ID is required');
  }

  try {
    const { data: team, error: teamError } = await supabase
      .from('teams')
      .select('*')
      .eq('TeamID', TeamID)
      .single();

    if (teamError || !team) {
      throw redirect(303, '/dashboard?message=Team+not+found');
    }

    if (team.Members?.length >= 4) {
      throw redirect(303, '/dashboard?message=Team+is+full');
    }

    const { error: joinError } = await supabase.rpc('append_member_to_team', {
      member_data: user.user_metadata,
      team_id: TeamID,
    });

    if (joinError) {
      console.error(joinError);
      throw redirect(303, '/dashboard?message=Failed+to+join+team');
    }

    throw redirect(303, '/dashboard/team?message=Successfully+joined+team');
  } catch (error) {
    console.error(error);
    throw redirect(303, '/dashboard?message=Internal+server+error');
  }
};