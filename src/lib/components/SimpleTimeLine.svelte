<script>
	import jsonData from '$lib/data/simpletimeline.json';
</script>

<div class="flex h-screen flex-col items-center justify-center bg-transparent px-6 md:px-10">
	<span
		class="mb-6 inline-flex w-fit animate-text-gradient text-wrap bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] bg-clip-text p-2 text-center text-2xl font-bold text-transparent md:text-3xl lg:text-5xl 2xl:text-8xl"
		id="faq_text"
	>
		TimeLine
	</span>
	<div class="space-y-6 border-l-2">
		{#each jsonData as event}
			<div class="relative w-full">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 36 36"
					fill="currentColor"
					class="absolute -top-0.5 z-10 -ml-3.5 h-10 w-10 rounded-full text-orange-500"
				>
					<path
						fill-rule="evenodd"
						d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
						clip-rule="evenodd"
					/>
				</svg>
				<div class="mx-6">
					<h4 class="text-xl font-bold text-orange-500">{event.title}</h4>
					<p class="mt-2 max-w-screen-sm text-xl text-gray-500">
						{event.mode} - {event.dates}
					</p>
					{#if event.details}
						<p class="mt-2 max-w-screen-sm text-sm text-gray-400">{event.details}</p>
					{/if}
					{#if event.schedule}
						<div class="mt-4">
							{#each event.schedule as schedule}
								<h5 class="font-semibold text-orange-500">{schedule.day} ({schedule.date})</h5>
								<ul class="ml-4 list-disc text-gray-500">
									{#each schedule.events as item}
										<li class="text-sm">{item}</li>
									{/each}
								</ul>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>
