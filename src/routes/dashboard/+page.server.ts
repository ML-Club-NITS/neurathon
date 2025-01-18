import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
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
		commits: commitData
	};
};
