<script>
	const commits = [
		{
			date: '2021-10-10',
			committerName: 'Committer Name 1',
			commitMessage: 'Commit Message 1'
		},
		{
			date: '2021-10-10',
			committerName: 'Committer Name 2',
			commitMessage: 'Commit Message 2'
		},
		{
			date: '2021-10-10',
			committerName: 'Committer Name 3',
			commitMessage: 'Commit Message 3'
		}
	];
</script>

<div class="flex flex-col gap-2 rounded-lg bg-gray-900 p-4 text-white">
	<h1 class="text-center text-xl font-bold">Latest Changes</h1>
	<div class="flex flex-col gap-4">
		{#each commits as { date, committerName, commitMessage }}
			<div>
				<time class="flex w-full justify-start pb-2 text-sm">{date}</time>
				<div class="flex flex-row items-start gap-2 rounded-md bg-gray-950 p-2">
					<div class="h-14 min-w-14 rounded-full bg-white"></div>
					<div class="flex w-full flex-col gap-2">
						<div class="flex flex-row justify-between gap-2">
							<div class="flex flex-col">
								<div class="w-full text-lg font-semibold">{committerName}</div>
								<div class="text-sm">{commitMessage}</div>
							</div>
							<div>
								<button class="rounded-md bg-gray-800 p-1 text-white" aria-label="View Commit">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
