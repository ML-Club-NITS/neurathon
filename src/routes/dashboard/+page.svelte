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
		// banner = { message: '', route: null },
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

<svelte:head>
	<title>Dashboard - Neurathon</title>
</svelte:head>

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
		<TextGenerateEffect
			className="text-white"
			words={`Welcome, ${data.user?.user_metadata.name || 'user'}`}
		/>
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
		<div class="flex w-full flex-col gap-4 rounded-lg md:max-w-[70%] lg:max-w-[60%]">
			{#if phase === 1}
				{#if !profileCompleted}
					<Notification
						data={{
							msg: 'Please complete your profile to participate in the event.',
							route: 'dashboard/profile',
							routeMsg: 'Complete your profile!'
						}}
					/>
				{:else if !TeamID}
					<Notification
						data={{
							msg: 'Create or join a team to participate in the event before deadline.',
							route: 'dashboard/team',
							routeMsg: 'Join or create a team!'
						}}
					/>
				{:else}
					<Notification
						data={{
							header: 'Registration Complete',
							msg: 'You have successfully registered for the event. Good luck!'
						}}
					/>
				{/if}

				<EventTimer
					eventTime={endTime}
					currentTime={startTime}
					eventDescription="Registration ends in"
					eventName="Online Round starts"
				/>
				<!-- event start poster / photo gallery / anything interactive -->
			{:else if !profileCompleted || !TeamID}
				<Notification
					data={{
						header: 'Registrations are Over ‼️',
						msg: 'You missed the deadline. The hackathon has already started.'
					}}
				/>
			{:else if phase === 2}
				<EventTimer
					eventTime={endTime}
					currentTime={startTime}
					eventDescription="Submissions end in"
					eventName="Online Round ends"
				/>
				<!-- show timer for the ending of the round -->
				{#if !team.Round1}
					<SubmissionCard {TeamID} />
				{/if}

				{#if problemStatements}
					<ProblemStatementCard {problemStatements} />
				{/if}
			{:else if phase === 3}
				{#if !result1 || !result1.declared}
					<Notification
						data={{
							header: 'Thank You for Participating!',
							msg: 'Results will be announced soon. Stay tuned!'
						}}
					/>
				{:else if qualifiedR1}
					<Notification
						data={{
							header: 'Congratulations!',
							msg: 'You have qualified for the offline round. Good luck!'
						}}
					/>
				{:else}
					<Notification
						data={{
							header: 'Better Luck Next Time!',
							msg: 'You did not qualify for the offline round.'
						}}
					/>
				{/if}

				<EventTimer
					eventTime={endTime}
					currentTime={startTime}
					eventDescription="Offline round starts in"
					eventName="Finals start"
				/>

				{#if result1 && result1.declared}
					<LeaderBoard items={result1.results} />
				{/if}
				<!--END OF ONLINE ROUND-->
				<!-- show a card till the result is declares, "...till result , brouse throug teh problems" -->
				<!-- <ProblemStatementCard {problemStatements}/> -->
				<!-- for those who want to go through the problems even after the round 1 -->
			{:else if !qualifiedR1}
				<!-- not qualified -->
				<Notification
					data={{
						header: 'Better Luck Next Time!',
						msg: 'You did not qualify for the offline round.'
					}}
				/>
			{:else if phase === 4}
				<!-- offline round starts -->
				{#if !team.github}
					<GetGithub {teamLead} {qualifiedR1} {TeamID} />
					<EventTimer
						eventTime={endTime}
						currentTime={startTime}
						eventDescription="Offline round ends in"
						eventName="Finals end"
					/>
				{:else}
					<EventTimer
						eventTime={endTime}
						currentTime={startTime}
						eventDescription="Offline round ends in"
						eventName="Finals end"
					/>
					<GitHistory url={team.github} />
				{/if}
				<!-- show timer till start of  round 2 -->
			{:else if phase === 5}
				{#if !result || !result.declared}
					<Notification
						data={{
							header: 'Congratulations on reaching Finals!',
							msg: 'Winner will be announced in prize distribution ceremony. Soon will be updated here too!'
						}}
					/>
				{:else}
					<LeaderBoard items={result.results} />
				{/if}
				<!-- Result Card, WITH TEAM THAT WON WITH  THEIR DEPLOYMENT LINKS -->
				<!--  eVENT pHOTO gALLARY -->
				<!-- bYE byE CARD -->
			{:else}
				<Notification
					data={{
						header: "Neurathon'25 ends here!",
						msg: 'Thank you for everyone for making this event a success. Stay tuned for the next edition!'
					}}
				/>
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
