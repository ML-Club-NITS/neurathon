import result1 from '$lib/data/round1Results.json';
import result2 from '$lib/data/round2Results.json';
import timeline from '$lib/data/timeline.json';
import finalStatements from '$lib/data/finalStatements.json';
import problemStatements from '$lib/data/problemstatements.json';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ depends, locals: { supabase, user } }) => {
	depends('supabase:db:teams');
	depends('supabase:db:profiles');

	const now = Date.now();

	const current = timeline.timeline.find(
		(phase) =>
			new Date(phase.startTime).getTime() <= now && now <= new Date(phase.endTime).getTime()
	) || { phase: 4 }; // phase 4 is final

	// Supabase queries
	const { data: profile, error: err } = await supabase.from('profiles').select().eq('id', user?.id);

	const profileCompleted = profile && profile.length > 0;

	if (!profileCompleted) {
		if (current.phase === 1) {
			return { banner: { message: 'Complete your profile details', route: '/dashboard/profile' } };
		} else {
			return { banner: { message: 'Hackathon is already started.', route: null } };
		}
	} else {
		const { data: teamID, error: teamError } = await supabase.rpc('get_team', {
			member_id: user?.id
		});

		if (teamError || !teamID) {
			console.error(teamError);
			if (current.phase === 1) {
				return {
					banner: {
						message: 'Create or Join Team before Hackathon Starts.',
						route: '/dashboard/team'
					}
				};
			} else {
				return {
					toast: { message: 'Hackathon is already started.', route: null }
				};
			}
		}

		const { data: team, error: teamDataError } = await supabase
			.from('teams')
			.select()
			.eq('TeamID', teamID);

		if (teamDataError) {
			console.error(teamDataError);
			return { toast: { message: 'Error fetching team data.', route: '/dashboard/team' } };
		}

		if (current.phase === 1) {
			return {
				banner: {
					message: 'Registeration completed successfully.',
					route: '/dashboard'
				}
			};
		} else if (current.phase === 2) {
			if (!team[0]?.Round1) {
				return {
					problemStatements,
					banner: {
						message: 'Submit before the deadline.',
						route: '/dashboard'
					}
				};
			} else {
				return {
					banner: {
						message: 'Completed Round 1 Submission.',
						route: '/dashboard'
					}
				};
			}
		} else if (current.phase === 3) {
			if (result1.declared) {
				return {
					result1,
					banner: {
						message: 'Round 1 results declared. You are eligible for final round.',
						route: '/dashboard'
					}
				};
			} else {
				return {
					banner: {
						message: 'Round 1 results will be declared soon.',
						route: '/dashboard'
					}
				};
			}
		} else if (current.phase === 4) {
			if (!team[0]?.github) {
				return {
					finalStatements,
					banner: {
						message: 'Add your Github Repo.',
						route: '/dashboard'
					}
				};
			} else {
				return {
					finalStatements,
					githubLink: team[0]?.github
				};
			}
		} else if (current.phase === 5) {
			if (result2.declared) {
				return {
					result: result2,
					banner: {
						message: 'Final results declared.',
						route: null
					}
				};
			} else {
				return {
					banner: {
						message: 'Final results will be declared soon.',
						route: null
					}
				};
			}
		} else {
			return {
				result: result2,
				banner: {
					message: 'Bye Bye! Neurathon is over.',
					route: null
				}
			};
		}
	}
};
