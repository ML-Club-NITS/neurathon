import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ depends, locals: { supabase, user } }: { depends: (key: string) => void, locals: { supabase: any, user: any } }) => {
    // depends('supabase:db:teams');

	// const { data, error } = await supabase.rpc('get_team', { member_id: user?.id });

	// if (error) {
	// 	console.error(error);
	// }
	// if (data) {
	// 	const { data: team, error } = await supabase.from('teams').select().eq('TeamID', data);

	// 	if (error) {
	// 		console.error(error);
	// 	}

	// 	return { TeamID: data, team: team ? (team[0] ?? []) : [] };
	// } else {
	// 	console.log('UUID does not exist in any team.');
	// }

    const timer = new Date();
    const r1Time = new Date("13 Feb 2025");
    const r1TimeEnd = new Date("17 Feb 2025");
    const r2Time = new Date("21 March 2025");
    const r2TimeEnd = new Date("23 March 2025");
    if (timer < r1Time) {
        return {
            commits: [],
            round: 0,
            timer: (timer.getTime() - timer.getTime()) / 1000
        };
    } else if (timer > r1Time && timer < r1TimeEnd) {
        return {
            commits: [],
            round: 1,
            timer: (timer.getTime() - r1Time.getTime()) / 1000
        };
    } else if (timer > r1TimeEnd && timer < r2Time) {
        return {
            commits: [],
            round: 1.5,
            timer: (timer.getTime() - r1TimeEnd.getTime()) / 1000
        };
    } else if (timer > r2Time && timer < r2TimeEnd) {
        const msg = await fetch('https://api.github.com/repos/tech-hunter-mainak/neurathon-24/commits');
        const userData = await msg.json();
        const dataSize = userData.length > 5 ? 5 : userData.length;
        const commitData = [];
        for (let i = 0; i < dataSize; i++) {
            commitData.push({
                committerName: userData[i].commit.committer.name,
                commitMessage: userData[i].commit.message,
                commitDate: userData[i].commit.committer.date,
                committerAvatar: userData[i].author.avatar_url,
                commitUrl: userData[i].html_url,
                committerUrl: userData[i].author.html_url
            });
        }
        return {
            commits: [commitData],
            round: 2,
            timer: (timer.getTime() - r2Time.getTime()) / 1000
        };
    }
    else {
        return {
            commits: []
        };
    }
};
