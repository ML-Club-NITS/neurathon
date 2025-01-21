<script>
	// const commits = [
	// 	{
	// 		date: '2021-10-10',
	// 		committerName: 'Committer Name 1',
	// 		commitMessage: 'Commit Message 1'
	// 	},
	// 	{
	// 		date: '2021-10-10',
	// 		committerName: 'Committer Name 2',
	// 		commitMessage: 'Commit Message 2'
	// 	},
	// 	{
	// 		date: '2021-10-10',
	// 		committerName: 'Committer Name 3',
	// 		commitMessage: 'Commit Message 3'
	// 	},
	// 	{
	// 		date: '2021-10-10',
	// 		committerName: 'Committer Name 3',
	// 		commitMessage: 'Commit Message 3'
	// 	},
	// 	{
	// 		date: '2021-10-10',
	// 		committerName: 'Committer Name 3',
	// 		commitMessage: 'Commit Message 3'
	// 	}
	// ];
	export let commits;
</script>

<div class="flex max-w-full flex-col gap-2 rounded-lg bg-gray-900 p-4 text-white">
	<h1 class="text-center text-xl font-bold">Latest Changes</h1>
	<div class="flex flex-col gap-4">
		{#each commits as { commitDate, committerName, commitMessage, commitUrl, committerAvatar, committerUrl }}
			<div>
				<time class="flex w-full justify-start pb-1 text-sm">{commitDate}</time>
				<div class="flex flex-row items-start gap-2 rounded-md bg-gray-950 p-3 pt-2">
					<div class="flex w-full flex-col gap-2">
						<div class="flex flex-row justify-between gap-2">
							<div class="flex flex-col">
								<div class="text-base">{commitMessage}</div>
								<div class="w-full text-sm font-semibold">
									<a
										class="mt-1 flex items-start gap-2"
										href={committerUrl}
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Committer Profile"
									>
										<img
											src={committerAvatar}
											alt="Committer Avater"
											class="h-5 w-5 rounded-full"
										/>
										{committerName}
									</a>
								</div>
							</div>
							<div>
								<button
									onclick={() => {
										window.open(commitUrl);
									}}
									class="rounded-md p-1 text-white"
									aria-label="View Commit"
								>
									<i class="fi fi-rr-arrow-up-right-from-square"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
