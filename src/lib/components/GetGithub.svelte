<script lang="ts">
	import { enhance } from '$app/forms';
	import { Motion, useMotionValue, useMotionTemplate } from 'svelte-motion';

	let githubLink = $state('');
	let githubLinkError = $state('');

	let submitting = $state(false);

	let { teamLead, qualifiedR1, TeamID } = $props();

	function isValidGitHubRepoUrl(url: string) {
		const pattern = /^https:\/\/github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+(\/)?$/;

		return pattern.test(url);
	}

	// Mouse-following effect
	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);
	let background = useMotionTemplate`
		radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.1), transparent 80%)
	`;
</script>

<div
	role="presentation"
	onmousemove={(e) => {
		const { left, top } = e.currentTarget.getBoundingClientRect();
		mouseX.set(e.clientX - left);
		mouseY.set(e.clientY - top);
	}}
	class="group relative h-fit w-full overflow-hidden rounded-md border border-gray-800 bg-gradient-to-r from-indigo-900/[0.3] to-black/[0.5] p-6 text-white opacity-95 shadow-lg backdrop-blur-sm transition-all duration-300 hover:opacity-100"
>
	<!-- Mouse-following gradient overlay -->
	<Motion
		style={{
			background
		}}
		let:motion
	>
		<div
			use:motion
			class="pointer-events-none absolute -inset-px rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-50"
		></div>
	</Motion>

	<!-- Content -->
	<div class="relative flex flex-col">
		<div class="mb-4 text-center">
			<span
				class="inline-flex animate-text-gradient bg-gradient-to-r from-[#FFFFFF] via-[#BE87FF] to-[#FFFFFF] bg-[200%_auto] bg-clip-text pb-6 text-center font-LeagueSpartanFont text-3xl font-bold text-transparent md:text-4xl lg:text-5xl"
			>
				{qualifiedR1 ? 'Congratulation' : 'Thanks for participating'}
			</span>

			<p
				class="mt-2 bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-xl font-semibold text-transparent"
			>
				{qualifiedR1
					? teamLead
						? 'Your team has qualified for the final round. Add your GitHub repository immediately, to partcipate in final round.'
						: 'Your team is qualified for the final round.'
					: "We're sorry to inform you that your team did not qualify for the final round. But don't be sad—failure is the first step toward success."}
			</p>
		</div>
		{#if teamLead && qualifiedR1}
			<div>
				<form
					method="POST"
					class="m-2 space-y-4"
					autocomplete="off"
					use:enhance={({ cancel }) => {
						if (submitting) {
							return cancel();
						} else {
							submitting = true;
						}

						if (githubLink === '') {
							githubLinkError = 'Field is required';
							submitting = false;
							return cancel();
						} else if (!isValidGitHubRepoUrl(githubLink)) {
							githubLinkError = 'Invalid GitHub repository URL';
							submitting = false;
							return cancel();
						}

						return async ({ update }) => {
							await update();
							githubLinkError = '';
							githubLink = '';
							setTimeout(() => (submitting = false), 1500);
						};
					}}
					novalidate
				>
					<input type="hidden" name="teamID" value={TeamID} />
					<div>
						<input
							type="url"
							name="githubLink"
							class="w-full rounded-lg border border-neutral-600 bg-neutral-700 px-4 py-2 text-neutral-100 focus:border-indigo-500 focus:ring-indigo-500"
							class:!border-red-500={githubLinkError}
							bind:value={githubLink}
							placeholder="Github Repository Url"
							aria-invalid={githubLinkError ? 'true' : 'false'}
						/>
						{#if githubLinkError}
							<p class="pt-1 text-right text-xs text-red-500">{githubLinkError}</p>
						{/if}
					</div>
					<button
						formaction="?/addGithub"
						class="w-full rounded-lg bg-indigo-600/15 px-4 py-2 text-neutral-100 transition-colors duration-200 hover:bg-indigo-800/55"
						class:!cursor-not-allowed={submitting}
						disabled={submitting}
						aria-label="Add GitHub Repository"
					>
						Add GitHub Repository
					</button>
				</form>
			</div>
		{/if}
	</div>
</div>
