import Timeline from '$lib/data/timeline.json';
import result1 from '$lib/data/round1Results.json';
import result2 from '$lib/data/round2Results.json';
import finalStatements from '$lib/data/finalStatements.json';
import problemStatements from '$lib/data/problemstatements.json';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ depends, locals: { supabase, user } }) => {
	depends('supabase:db:teams');
	depends('supabase:db:profiles');

	const now = Date.now();

	const current = Timeline.timeline.find(
		(phase) =>
			new Date(phase.startTime).getTime() <= now && now <= new Date(phase.endTime).getTime()
	) || { startTime: '2025-05-01T00:00:00Z', endTime: '2025-05-01T00:00:00Z', phase: -1 }; // default for when the hackathon is over

	const { data: profile } = await supabase.from('profiles').select().eq('id', user?.id);

	const profileCompleted = profile && profile.length > 0;

	if (!profileCompleted) {
		if (current.phase === 1) {
			return {
				phase: current.phase,
				startTime: now,
				endTime: new Date(current.endTime).getTime(),
				profileCompleted,
				TeamID: null,
				team: null,
				banner: {
					message: 'Complete your profile details',
					route: '/dashboard/profile'
				}
			};
		} else {
			return {
				phase: current.phase,
				startTime: now,
				endTime: new Date(current.endTime).getTime(),
				profileCompleted,
				TeamID: null,
				team: null,
				banner: { message: 'Hackathon is already started.', route: null }
			};
		}
	} else {
		const { data: teamID, error: teamError } = await supabase.rpc('get_team', {
			member_id: user?.id
		});

		if (teamError || !teamID) {
			if (current.phase === 1) {
				return {
					phase: current.phase,
					profile: profile[0],
					startTime: now,
					endTime: new Date(current.endTime).getTime(),
					profileCompleted,
					TeamID: teamID,
					team: null,
					banner: {
						message: 'Create or Join Team before Hackathon Starts.',
						route: '/dashboard/team'
					}
				};
			} else {
				return {
					phase: current.phase,
					profile: profile[0],
					startTime: now,
					endTime: new Date(current.endTime).getTime(),
					profileCompleted,
					TeamID: teamID,
					team: null,
					banner: { message: 'Registerations Over! Hackathon is already started.', route: null }
				};
			}
		}

		const { data: team, error: teamDataError } = await supabase
			.from('teams')
			.select()
			.eq('TeamID', teamID);

		if (teamDataError) {
			return {
				phase: current.phase,
				profile: profile[0],
				startTime: now,
				endTime: new Date(current.endTime).getTime(),
				notification: { message: 'Error fetching team data.', duration: 2000 }
			};
		}

		if (current.phase === 1) {
			return {
				phase: current.phase,
				profile: profile[0],
				startTime: now,
				endTime: new Date(current.endTime).getTime(),
				profileCompleted,
				TeamID: teamID,
				team: team[0],
				banner: {
					message: 'Registeration completed successfully.',
					route: '/dashboard'
				}
			};
		} else if (current.phase === 2) {
			if (!team[0]?.Round1) {
				return {
					phase: current.phase,
					profile: profile[0],
					startTime: now,
					endTime: new Date(current.endTime).getTime(),
					problemStatements,
					profileCompleted,
					TeamID: teamID,
					team: team[0],
					banner: {
						message: 'Submit before the deadline.',
						route: '/dashboard'
					}
				};
			} else {
				return {
					phase: current.phase,
					profile: profile[0],
					startTime: now,
					endTime: new Date(current.endTime).getTime(),
					profileCompleted,
					TeamID: teamID,
					team: team[0],
					banner: {
						message: 'Completed Round 1 Submission.',
						route: '/dashboard'
					}
				};
			}
		} else if (current.phase === 3) {
			if (result1.declared) {
				const Q = result1.results.find((id) => id.TeamID === teamID) ? 1 : 0;
				return {
					phase: current.phase,
					profile: profile[0],
					startTime: now,
					endTime: new Date(current.endTime).getTime(),
					profileCompleted,
					TeamID: teamID,
					team: team[0],
					result1,
				};
			} else {
				return {
					phase: current.phase,
					profile: profile[0],
					startTime: now,
					endTime: new Date(current.endTime).getTime(),
					profileCompleted,
					TeamID: teamID,
					team: team[0],
					banner: {
						message: 'Round 1 results will be declared soon.',
						route: '/dashboard'
					},
				};
			}
		} else if (current.phase === 4) {
			if (!team[0]?.github) {
				return {
					phase: current.phase,
					profile: profile[0],
					startTime: now,
					endTime: new Date(current.endTime).getTime(),
					finalStatements,
					profileCompleted,
					TeamID: teamID,
					team: team[0],
					banner: {
						message: 'Add your Github Repo.',
						route: '/dashboard'
					}
				};
			} else {
				return {
					phase: current.phase,
					profile: profile[0],
					startTime: now,
					endTime: new Date(current.endTime).getTime(),
					finalStatements,
					profileCompleted,
					TeamID: teamID,
					team: team[0],
					githubLink: team[0]?.github
				};
			}
		} else if (current.phase === 5) {
			if (result2.declared) {
				return {
					phase: current.phase,
					profile: profile[0],
					startTime: now,
					endTime: new Date(current.endTime).getTime(),
					result: result2,
					profileCompleted,
					TeamID: teamID,
					team: team[0],
					banner: {
						message: 'Final results declared.',
						route: null
					}
				};
			} else {
				return {
					phase: current.phase,
					profile: profile[0],
					startTime: now,
					endTime: new Date(current.endTime).getTime(),
					profileCompleted,
					TeamID: teamID,
					team: team[0],
					banner: {
						message: 'Final results will be declared soon.',
						route: null
					}
				};
			}
		} else {
			return {
				phase: current.phase,
				profile: profile[0],
				startTime: now,
				endTime: new Date(current.endTime).getTime(),
				result: result2,
				profileCompleted,
				TeamID: teamID,
				team: team[0],
				banner: {
					message: 'Bye Bye! Neurathon is over.',
					route: null
				}
			};
		}
	}
};
