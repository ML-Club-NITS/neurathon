<script lang="ts">
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { fade, fly } from 'svelte/transition';
	import { Tabs, TabItem } from 'flowbite-svelte';
	import { Motion, useMotionValue, useMotionTemplate } from 'svelte-motion';
	import { toast } from '@zerodevx/svelte-toast';

	let teamName = $state('');
	let teamNameError = $state('');
	let teamid = $state('');
	let teamidError = $state('');

	let submitting = $state(false);

	let { data, form } = $props();
	let { user, TeamID, team, profileCompleted } = $derived(data);

	// Mouse hover effects
	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);
	let background = useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(38, 38, 38, 0.4), transparent 80%)`;

	function shareLink() {
		const link = `${window.location.origin}/dashboard/team/join?id=${TeamID}`;
		navigator.clipboard.writeText(link);
		toast.push('Link copied to clipboard', {
			theme: {
				'--toastColor': '#fff',
				'--toastBackground': 'rgba(72, 187, 120, 0.9)',
				'--toastBarBackground': '#48BB78'
			},
			duration: 1500
		});
	}

	$effect(() => {
		if (form?.error) {
			toast.push(form?.error, {
				theme: {
					'--toastColor': '#fff',
					'--toastBackground': 'rgba(220, 38, 38, 0.9)',
					'--toastBarBackground': '#DC2626'
				},
				duration: 5000
			});
		}
	});

	let message = '';

	onMount(() => {
		const urlParams = new URLSearchParams(window.location.search);
		message = urlParams.get('message') || '';

		if (message.includes('Successfully')) {
			toast.push(message, {
				theme: {
					'--toastColor': '#fff',
					'--toastBackground': 'rgba(72, 187, 120, 0.9)',
					'--toastBarBackground': '#48BB78'
				},
				duration: 3500
			});
		} else if (message) {
			toast.push(message, {
				theme: {
					'--toastColor': '#fff',
					'--toastBackground': 'rgba(220, 38, 38, 0.9)',
					'--toastBarBackground': '#DC2626'
				},
				duration: 3500
			});
		}

		urlParams.delete('message');
		const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
		goto(newUrl.endsWith('?') ? newUrl.slice(0, -1) : newUrl, { replaceState: true });
	});
</script>

<svelte:head>
	<title>{TeamID ? 'Team' : 'Register Team'} - Neurathon</title>
</svelte:head>

<nav class="mt-2 flex w-full" aria-label="Breadcrumb">
	<ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
		<li class="inline-flex items-center">
			<a
				href="/"
				class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
				aria-label="Home"
			>
				<svg
					class="me-2.5 h-3 w-3"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
					/>
				</svg>
			</a>
		</li>
		<li>
			<div class="flex items-center">
				<svg
					class="mx-1 h-3 w-3 text-gray-400 rtl:rotate-180"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 6 10"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="m1 9 4-4-4-4"
					/>
				</svg>
				<a
					href="/dashboard"
					class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
					>Dashboard</a
				>
			</div>
		</li>
		<li aria-current="page">
			<div class="flex items-center">
				<svg
					class="mx-1 h-3 w-3 text-gray-400 rtl:rotate-180"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 6 10"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="m1 9 4-4-4-4"
					/>
				</svg>
				<span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Team</span>
			</div>
		</li>
	</ol>
</nav>

{#if profileCompleted}
	<div
		class="my-4 flex w-full items-center rounded-lg border border-blue-300 bg-blue-50 p-4 text-sm text-blue-800 dark:border-blue-800 dark:bg-gray-800 dark:text-blue-400"
		role="alert"
		transition:fade
	>
		<svg
			class="me-3 inline h-4 w-4 shrink-0"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 20 20"
		>
			<path
				d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
			/>
		</svg>
		<span class="sr-only">Info</span>
		<div>
			<span class="font-medium">Alert!</span> Create your own team or join a team.
		</div>
	</div>

	<div class="register-page w-full overflow-hidden rounded-lg text-red-400">
		{#if TeamID}
			<div
				onmousemove={(e) => {
					const { left, top } = e.currentTarget.getBoundingClientRect();
					mouseX.set(e.clientX - left);
					mouseY.set(e.clientY - top);
				}}
				class="group relative w-full overflow-hidden rounded-xl bg-neutral-950"
				role="presentation"
				transition:fly={{ y: 20, duration: 300 }}
			>
				<div
					class="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent"
				></div>
				<Motion
					style={{
						background
					}}
					let:motion
				>
					<div
						use:motion
						class="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
					></div>
				</Motion>
				<div
					class="relative flex w-full flex-col gap-3 rounded-xl border border-white/10 px-4 py-5"
				>
					<h2
						class=" mb-4 animate-text-gradient break-words bg-gradient-to-r from-[#FFFFFF] via-[#CBCBCB] to-[#FFFFFF] bg-[200%_auto] bg-clip-text text-center font-LeagueSpartanFont text-3xl font-bold text-neutral-200 text-transparent md:text-4xl lg:text-5xl"
					>
						Team Information
					</h2>
					<div class="space-y-4 lg:mb-11 lg:ml-16">
						<div>
							<span class="text-sm font-medium text-neutral-400">Team Name</span>
							<p
								class="my-1 w-fit animate-text-gradient rounded-lg border border-slate-800 bg-gradient-to-r from-white via-indigo-200/55 to-white bg-[length:200%_auto] bg-clip-text px-3 py-2 font-LeagueSpartanFont text-xl font-bold text-transparent shadow-md transition-all hover:border-white md:text-2xl lg:text-4xl"
							>
								{team?.TeamName}
							</p>
						</div>
						<div>
							<span class="text-sm font-medium text-neutral-400">Team ID</span>
							<p
								class="my-1 w-fit select-text rounded-lg border border-slate-800 px-3 py-2 font-LeagueSpartanFont text-base font-bold text-neutral-100 shadow-md transition-all hover:border-white"
							>
								{TeamID}
							</p>
						</div>
						<div>
							<span class="text-sm font-medium text-neutral-400">Team Leader</span>
							<p
								class="my-1 w-fit rounded-lg border border-slate-800 px-3 py-2 font-LeagueSpartanFont text-xl font-bold text-neutral-100 shadow-md transition-all hover:border-white"
							>
								{team?.Members.find((m: { sub: string; name: string }) => m.sub === team?.CreatedBy)
									?.name}
							</p>
						</div>
						{#if team?.Members.length > 1}
							<div>
								<span class="text-sm font-medium text-neutral-400">Team Members</span>
								<div class="my-2 flex flex-col gap-2 font-LeagueSpartanFont font-bold">
									{#each team?.Members.filter((m: { sub: string }) => m.sub !== team?.CreatedBy) as member}
										<div
											class="w-fit rounded-lg border border-slate-800 px-3 py-2 shadow-md transition-all hover:scale-105 hover:border-white hover:bg-slate-700/55"
										>
											<p class="text-md leading-4 text-neutral-100">
												{member.name} <span class="text-sm text-slate-400">({member.email})</span>
											</p>
										</div>
									{/each}
								</div>
							</div>
						{/if}
						<form
							method="POST"
							class="flex gap-4 pt-4"
							use:enhance={() => {
								submitting = true;

								return async ({ update }) => {
									await update();
									setTimeout(() => (submitting = false), 1500);
								};
							}}
						>
							{#if team?.CreatedBy === user?.id}
								<button
									class="transform rounded-md border border-neutral-300 bg-slate-700/15 px-4 py-2 text-sm text-neutral-100 backdrop-blur-md transition duration-200 hover:-translate-y-1 hover:bg-green-500 hover:shadow-md"
									onclick={shareLink}
								>
									Share Team
								</button>
								<button
									formaction="?/delete"
									class="transform rounded-md border border-neutral-300 bg-slate-700/15 px-4 py-2 text-sm text-neutral-100 backdrop-blur-md transition duration-200 hover:-translate-y-1 hover:bg-red-500 hover:shadow-md"
									class:!cursor-not-allowed={submitting}
									disabled={submitting}
								>
									Delete Team
								</button>
							{:else}
								<button
									formaction="?/leave"
									class="transform rounded-md border border-neutral-300 bg-slate-700/15 px-4 py-2 text-sm text-neutral-100 backdrop-blur-md transition duration-200 hover:-translate-y-1 hover:bg-red-500 hover:shadow-md"
									class:!cursor-not-allowed={submitting}
									disabled={submitting}
								>
									Leave Team
								</button>
							{/if}
						</form>
					</div>
				</div>
			</div>
		{:else}
			<div
				onmousemove={(e) => {
					const { left, top } = e.currentTarget.getBoundingClientRect();
					mouseX.set(e.clientX - left);
					mouseY.set(e.clientY - top);
				}}
				class="group relative w-full overflow-hidden rounded-xl bg-neutral-950"
				role="presentation"
				transition:fly={{ y: 20, duration: 300 }}
			>
				<div
					class="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent"
				></div>
				<Motion
					style={{
						background
					}}
					let:motion
				>
					<div
						use:motion
						class="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
					></div>
				</Motion>
				<div class="relative flex flex-col gap-3 rounded-xl border border-white/10 px-4 py-5">
					<div class="m-2 flex flex-col items-center space-y-6">
						<Tabs
							tabStyle="pill"
							defaultClass="bg-slate-800 flex gap-2 p-1 items-center rounded-lg w-fit mx-auto"
							contentClass="w-80 md:w-96 p-2 m-2 rounded-lg"
						>
							<TabItem
								open
								inactiveClasses="text-md sm:text-lg hover:text-lg min-w-fit px-6 py-2 rounded-lg text-slate-500"
								activeClasses="text-md sm:text-lg hover:text-lg min-w-fit px-6 py-2 rounded-lg text-white bg-gray-700"
							>
								<div slot="title">Create Team</div>
								<form
									method="POST"
									class="m-2 space-y-4"
									autocomplete="off"
									use:enhance={({ cancel }) => {
										submitting = true;
										if (teamName === '') {
											teamNameError = 'Team Name is required';
											submitting = false;
											return cancel();
										} else if (teamName.length > 30) {
											teamNameError = 'Team Name is too long';
											submitting = false;
											return cancel();
										}

										return async ({ update }) => {
											await update();
											setTimeout(() => (submitting = false), 1500);
										};
									}}
									novalidate
								>
									<div>
										<label for="teamname" class="block text-sm font-medium text-neutral-400"
											>Team Name</label
										>
										<input
											type="text"
											id="teamname"
											name="teamname"
											class="w-full rounded-lg border border-neutral-600 bg-neutral-700 px-4 py-2 text-neutral-100 focus:border-indigo-500 focus:ring-indigo-500"
											class:!border-red-500={teamNameError}
											bind:value={teamName}
											aria-invalid={teamNameError ? 'true' : 'false'}
										/>
										{#if teamNameError}
											<p class="pt-1 text-right text-xs text-red-500">{teamNameError}</p>
										{/if}
									</div>
									<button
										formaction="?/register"
										class="w-full rounded-lg bg-indigo-600/15 px-4 py-2 text-neutral-100 transition-colors duration-200 hover:bg-indigo-800/55"
										class:!cursor-not-allowed={submitting}
										disabled={submitting}
									>
										Create Team
									</button>
								</form>
							</TabItem>
							<TabItem
								inactiveClasses="text-lg hover:text-lg min-w-fit px-6 py-2 rounded-lg text-slate-500"
								activeClasses="text-lg hover:text-lg min-w-fit px-6 py-2 rounded-lg text-white bg-gray-700"
							>
								<div slot="title">Join Team</div>
								<form
									method="POST"
									class="m-2 space-y-4"
									autocomplete="off"
									use:enhance={({ cancel }) => {
										submitting = true;
										if (teamid === '') {
											teamidError = 'Team ID is required';
											submitting = false;
											return cancel();
										}

										return async ({ update }) => {
											await update();
											setTimeout(() => (submitting = false), 1500);
										};
									}}
									novalidate
								>
									<div>
										<label for="teamid" class="block text-sm font-medium text-neutral-400"
											>Team ID</label
										>
										<input
											type="text"
											id="teamid"
											name="teamid"
											class="w-full rounded-lg border border-neutral-600 bg-neutral-700 px-4 py-2 text-neutral-100 focus:border-indigo-500 focus:ring-indigo-500"
											class:!border-red-500={teamidError}
											bind:value={teamid}
											aria-invalid={teamidError ? 'true' : 'false'}
										/>
										{#if teamidError}
											<p class="pt-1 text-right text-xs text-red-500">{teamidError}</p>
										{/if}
									</div>
									<button
										formaction="?/join"
										class="w-full rounded-lg bg-indigo-600/15 px-4 py-2 text-neutral-100 transition-colors duration-200 hover:bg-indigo-800/55"
										class:!cursor-not-allowed={submitting}
										disabled={submitting}
									>
										Join Team
									</button>
								</form>
							</TabItem>
						</Tabs>
					</div>
				</div>
			</div>
		{/if}
	</div>
{:else}
	<div
		class="my-4 flex w-full items-center rounded-lg border border-blue-300 bg-blue-50 p-4 text-sm text-blue-800 dark:border-blue-800 dark:bg-gray-800 dark:text-blue-400"
		role="alert"
		transition:fade
	>
		<svg
			class="me-3 inline h-4 w-4 shrink-0"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 20 20"
		>
			<path
				d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
			/>
		</svg>
		<span class="sr-only">Info</span>
		<div>
			<span class="font-medium">Alert!</span> Complete your profile to register your team.
		</div>
	</div>
{/if}
