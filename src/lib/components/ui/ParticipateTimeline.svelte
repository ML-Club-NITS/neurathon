<script lang="ts">
	import data from '$lib/data/participateTimeline.json';

	let timelineContainer: HTMLDivElement;
</script>

<div class="relative h-screen overflow-hidden bg-transparent">
	<div class="relative flex h-full justify-center align-middle">
		<div class="max-h-screen overflow-y-auto" bind:this={timelineContainer}>
			<div class="mx-auto ml-0 flex flex-col p-8 pl-7 align-middle">
				{#each data as item (item.version)}
					<div class="relative pb-8">
						<span class="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-800" aria-hidden="true"
						></span>
						<div class="relative flex items-start space-x-3">
							<div>
								<div class="relative px-1">
									<div class="flex h-8 w-8 items-center justify-center rounded-full bg-white"></div>
								</div>
							</div>
							<div class="min-w-0 flex-1 py-0">
								<div class="text-md text-gray-500">
									<div>
										<span class="mr-2 text-2xl font-medium text-white">{item.version}</span>
										<span
											class="relative my-0.5 inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-0.5 text-sm"
										>
											<div class="absolute flex flex-shrink-0 items-center justify-center">
												<span
													class="h-1.5 w-1.5 rounded-full {item.status === 'Online'
														? 'bg-green-500'
														: 'bg-red-500'}"
													aria-hidden="true"
												></span>
											</div>
											<div class="ml-3.5 font-medium text-gray-900">{item.status}</div>
										</span>
									</div>
									<span class="whitespace-nowrap text-sm">{item.duration}</span>
								</div>
								<div class="mt-2 text-white">
									<p>
										{item.description}
									</p>
									<ul class="list-disc pl-5">
										{#each item.updates as update}
											<li>{@html update}</li>
										{/each}
									</ul>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
