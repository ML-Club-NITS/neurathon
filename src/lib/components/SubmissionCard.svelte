<script lang="ts">
	import { enhance } from '$app/forms';
	import { Motion, useMotionValue, useMotionTemplate } from 'svelte-motion';

	let selectedProblemStatement = $state('');
	let githubRepoLink = $state('');
	let deploymentLink = $state('');
	let umlDesignLink = $state('');

	let errors = $state({
		githubRepoLink: '',
		problemStatement: ''
	});

	let { TeamID } = $props();

	let isSubmitting = $state(false);

	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);
	let background = useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.1), transparent 80%)`;

	function validate() {
		errors = { githubRepoLink: '', problemStatement: '' };

		if (!githubRepoLink) {
			errors.githubRepoLink = 'GitHub Repository Link is required.';
		}
		if (!selectedProblemStatement) {
			errors.problemStatement = 'Select Problem Statement is required.';
		}

		if (!!errors.githubRepoLink) {
			return false;
		}

		return true;
	}

	const problemStatements = [
		'id-1: Autonomous Resource Identification and Mapping',
		'id-2: Predicting Traffic Using Satellite Street Maps',
		'id-3: Advancing Optical Coherence Tomography (OCT) Image Analysis',
		'id-4: Developing a Generative NLP-Powered Document Summarizer',
		'id-5: Developing an AI-Driven Debate Partner',
		'id-6: Fake News Detection in Indian Languages',
		'id-7: Accidental Fall Detection for the Elderly',
		'id-8: Human Activity Detection Using Sensor Data',
		'id-9: AI for Music Composition',
		'id-10: Image Generator',
		'id-11: Crowd Control in Public Events'
	];
</script>

<div
	role="presentation"
	onmousemove={(e) => {
		const { left, top } = e.currentTarget.getBoundingClientRect();
		mouseX.set(e.clientX - left);
		mouseY.set(e.clientY - top);
	}}
	class="group relative w-full overflow-hidden rounded-md border border-gray-800 bg-gradient-to-r from-indigo-900/[0.3] to-black/[0.5] p-6 text-white opacity-95 shadow-lg backdrop-blur-sm transition-all duration-300 hover:opacity-100"
>
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

	<div class="relative flex flex-col">
		<div class="mb-4 text-center">
			<span
				class="inline-flex animate-text-gradient bg-gradient-to-r from-[#FFFFFF] via-[#BE87FF] to-[#FFFFFF] bg-[200%_auto] bg-clip-text pb-6 text-center font-LeagueSpartanFont text-3xl font-bold text-transparent md:text-4xl lg:text-5xl"
			>
				Submit your project
			</span>

			<p
				class="mt-2 bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-xl font-semibold text-transparent"
			>
				Complete your submission before deadline.
			</p>
		</div>

		<form
			class="space-y-4"
			method="POST"
			action="?/submmision"
			use:enhance={({ cancel }) => {
				if (isSubmitting) {
					return cancel();
				} else {
					isSubmitting = true;
				}

				if (!validate()) {
					isSubmitting = false;
					return cancel();
				}

				return async ({ update }) => {
					await update();
					selectedProblemStatement = '';
					githubRepoLink = '';
					deploymentLink = '';
					umlDesignLink = '';
					setTimeout(() => (isSubmitting = false), 1500);
				};
			}}
			autocomplete="off"
			novalidate
		>
			<div>
				<label for="statementID" class="block text-sm font-medium text-neutral-400">
					Problem Statement <span class="text-red-500">*</span>
				</label>
				<select
					id="statementID"
					name="statementID"
					bind:value={selectedProblemStatement}
					class="w-full rounded-md border {errors.problemStatement
						? 'border-red-500'
						: 'border-gray-700'} bg-gray-900 px-4 py-2 text-white focus:border-indigo-500 focus:ring-indigo-500"
				>
					<option value="" disabled selected>Select a problem statement</option>
					{#each problemStatements as problem}
						<option value={problem}>{problem}</option>
					{/each}
				</select>
				{#if errors.problemStatement}
					<div class="mt-1 text-sm text-red-500">{errors.problemStatement}</div>
				{/if}
			</div>

			<input type="hidden" name="teamID" value={TeamID} />
			<div>
				<label for="github-repo" class="block text-sm font-medium text-neutral-400">
					GitHub Repository Link <span class="text-red-500">*</span>
				</label>
				<input
					type="url"
					id="github-repo"
					name="github-repo"
					bind:value={githubRepoLink}
					class="w-full rounded-md border {errors.githubRepoLink
						? 'border-red-500'
						: 'border-gray-700'} bg-gray-900 px-4 py-2 text-white focus:border-indigo-500 focus:ring-indigo-500"
					placeholder="https://github.com/your-username/your-repo"
				/>
				{#if errors.githubRepoLink}
					<div class="mt-1 text-sm text-red-500">{errors.githubRepoLink}</div>
				{/if}
			</div>

			<div>
				<label for="deployment-link" class="block text-sm font-medium text-neutral-400">
					Deployment Link (Optional)
				</label>
				<input
					type="url"
					id="deployment-link"
					name="deployment-link"
					bind:value={deploymentLink}
					class="w-full rounded-md border border-gray-700 bg-gray-900 px-4 py-2 text-white focus:border-indigo-500 focus:ring-indigo-500"
					placeholder="https://your-app.com"
				/>
			</div>

			<div>
				<label for="uml-design" class="block text-sm font-medium text-neutral-400">
					UML Design Link (Optional)
				</label>
				<input
					type="url"
					id="uml-design"
					name="uml-design"
					bind:value={umlDesignLink}
					class="w-full rounded-md border border-gray-700 bg-gray-900 px-4 py-2 text-white focus:border-indigo-500 focus:ring-indigo-500"
					placeholder="https://figma.com/your-uml-design"
				/>
			</div>

			<button
				type="submit"
				class="mt-4 w-full rounded-md bg-indigo-600/25 px-6 py-3 text-lg font-semibold text-white transition-all duration-200 ease-in-out hover:bg-indigo-600/55 focus:outline-none focus:ring-2 focus:ring-indigo-800/25 focus:ring-offset-2"
				class:!cursor-not-allowed={isSubmitting}
				disabled={isSubmitting}
			>
				{isSubmitting ? 'Submitting...' : 'Submit'}
			</button>
		</form>
	</div>
</div>
