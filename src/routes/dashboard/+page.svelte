<script lang="ts">
	import {
		EventTimer,
		GetGithub,
		GitHistory,
		LeaderBoard,
		Notification,
		SubmissionCard,
		ProblemStatementCard
	} from '$lib/components';

	import { TextGenerateEffect } from '$lib/components/ui';
	import NotificationCard from '$lib/components/ui/NotificationCard.svelte';
	import { toast } from '@zerodevx/svelte-toast';

	let { data, form } = $props();
	let {
		user,
		phase,
		profileCompleted,
		TeamID,
		team,
		problemStatements,
		startTime,
		endTime,
		result1,
		result,
		banner = { message: '', route: null },
		notification = { message: '', duration: 1000 }
	} = $derived(data);

	let teamLead = $derived(team && user ? team.CreatedBy === user.id : false);
	let qualifiedR1 = $derived(result1?.results?.includes(TeamID) || false);

	$effect(() => {
		if (form?.error) {
			toast.push(typeof form?.error === 'string' ? form?.error : 'Some error occurred', {
				theme: {
					'--toastColor': '#fff',
					'--toastBackground': 'rgba(220, 38, 38, 0.9)',
					'--toastBarBackground': '#DC2626'
				},
				duration: 3000
			});
		} else if (form?.submission) {
			toast.push('Submission Completed', {
				theme: {
					'--toastColor': 'mintcream',
					'--toastBackground': 'rgba(72,187,120,0.9)',
					'--toastBarBackground': '#2F855A'
				},
				duration: 2000
			});
		} else if (notification && notification.message) {
			toast.push(typeof form?.error === 'string' ? notification.message : 'Some error occurred', {
				theme: {
					'--toastColor': '#fff',
					'--toastBackground': 'rgba(220, 38, 38, 0.9)',
					'--toastBarBackground': '#DC2626'
				},
				duration: notification.duration ?? 1000
			});
		}
	});
</script>

<section class="flex h-auto w-full flex-col items-center justify-center gap-4">
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
					<span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400"
						>Dashboard</span
					>
				</div>
			</li>
		</ol>
	</nav>
	<div class="w-full text-left text-2xl font-semibold text-white">
		<TextGenerateEffect words={`Welcome, ${data.user?.user_metadata.name || 'user'}`} />
	</div>
	<!-- <div class="z-0 rounded-lg text-white"><Notification /></div> -->
	<div class="flex w-full flex-row flex-wrap justify-evenly gap-4 lg:flex-row lg:flex-nowrap">
		<!-- <div class="rounded-lg md:w-full lg:min-w-[300px] lg:max-w-full">
			<GitHistory {commits} />
		</div> -->
		<!-- <SubmissionCard /> -->
		<!-- <EventTimer {eventTime} {currentTime} {EventName} {EventDescription}/> -->
		<!-- <GitHistory {commits}/> -->
		<!-- <ProblemStatementCard /> -->
		<GetGithub {teamLead} {qualifiedR1} {TeamID} />
		<div class="flex w-full flex-col gap-4 rounded-lg lg:max-w-[50%]">
			{#if phase === 1}
				{#if !profileCompleted}
					<NotificationCard message="Please complete your profile to participate in the event" />
				{:else if !TeamID}
					<NotificationCard message="Create or join a team to participate in the event" />
				{:else}
					<NotificationCard message="You are successfully registered for event." />
				{/if}

				<EventTimer
					eventTime={endTime}
					currentTime={startTime}
					eventDescription="Registerations ends in"
					eventName="Round 1 starts"
				/>
				<!-- event start poster / photo gallery / anything interactive -->
			{:else if !profileCompleted || !TeamID}
				<NotificationCard message={banner?.message} />
			{:else if phase === 2}
				<NotificationCard message={banner?.message} />
				<EventTimer
					eventTime={endTime}
					currentTime={startTime}
					eventDescription="Submissions ends in"
					eventName="Round 1 ends"
				/>
				<!-- show timer for the ending of the round -->
				{#if !team.Round1}
					<SubmissionCard {TeamID} />
				{/if}

				{#if problemStatements}
					<ProblemStatementCard {problemStatements} />
				{/if}
			{:else if phase === 3}
				<NotificationCard message={banner?.message} />
				<EventTimer
					eventTime={endTime}
					currentTime={startTime}
					eventDescription="offline round starts in"
					eventName="Final starts"
				/>

				{#if result1 && result1.declared}
					<!-- scoreboard -->
					<LeaderBoard items={result1.results} />
				{/if}
				<!--END OF ONLINE ROUND-->
				<!-- show a card till the result is declares, "...till result , brouse throug teh problems" -->
				<!-- <ProblemStatementCard {problemStatements}/> -->
				<!-- for those who want to go through the problems even after the round 1 -->
			{:else if phase === 4}
				<!-- Online Round result -->
				<!--result greetings-->
				<NotificationCard message={banner?.message} />
				<EventTimer
					eventTime={endTime}
					currentTime={startTime}
					eventDescription="offline round ends in"
					eventName="Final ends"
				/>
				{#if !team.github}
					<GetGithub {teamLead} {qualifiedR1} {TeamID} />
				{:else}
					<GitHistory url={team.github} />
				{/if}
				<!-- show timer till start of  round 2 -->
			{:else if phase === 5}
				<NotificationCard message={banner?.message} />

				{#if result && result.declared}
					<!-- scoreboard -->
					<LeaderBoard items={result.results} />
				{/if}
				<!-- Result Card, WITH TEAM THAT WON WITH  THEIR DEPLOYMENT LINKS -->
				<!--  eVENT pHOTO gALLARY -->
				<!-- bYE byE CARD -->
			{:else}
				<NotificationCard message={banner?.message} />

				{#if result && result.declared}
					<!-- scoreboard -->
					<LeaderBoard items={result.results} />
				{/if}
				<!-- Result Card, WITH TEAM THAT WON WITH  THEIR DEPLOYMENT LINKS -->
				<!--  eVENT pHOTO gALLARY -->
				<!-- bYE byE CARD -->
			{/if}
		</div>
	</div>
</section>
