<script lang="ts">
	import gem from '$lib/assets/gem.png';
	import Button from './ui/Button.svelte';
	import eligibilityData from '$lib/data/eligibilityData.json';
	import ParticipateTimeline from './ui/ParticipateTimeline.svelte';

	// let { data } = $props();
	// let { supabase } = $derived(data);

	// async function signOut() {
	// 	const { error } = await supabase.auth.signOut();
	// 	console.error(error);
	// 	goto('/');
	// }

	let neurathonDate = '--/--/2025';
	// let neurathonDes = "hcbauv hhhhhhhhhhhhhhhhhhhhcchwnlhhhhhhhhhhlHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH";

	let eligData2 = [
		{
			title: 'Registrations',
			des: '12',
			icon: 'fi fi-ss-team-check-alt'
		},
		{
			title: 'Team Size',
			des: '2-4 Memberes',
			icon: 'fi fi-ss-users-alt'
		},
		{
			title: 'Registration Deadline',
			des: '--',
			icon: 'fi fi-ss-clock'
		}
	];
</script>

<div class="text-whit mt-[4.3rem] flex flex-col gap-5 gap-x-0 md:flex-row-reverse lg:flex-row-reverse xl:flex-row-reverse">
	<div class="reg g-1 text-white md:w-[40%] lg:w-[30%] xl:w-[30%]">
		<div
			class="reg-container m-3 flex flex-col justify-center overflow-hidden rounded bg-gray-700/[0.7]"
		>
			<div class="event-info-card flex flex-row gap-5 px-5 pb-2 pt-5">
				<div class="icon h-full w-fit rounded bg-white/[0.6]">
					<img src={gem} class="max-w-16" alt="gem" />
				</div>
				<div class="event-name">
					<h1 class="font-LeagueSpartanFont text-[2rem] font-semibold">Neurathon</h1>
				</div>
			</div>
			<div class="event-des p-5 pt-1">
				<div class="event-date flex gap-1">
					<i class="fi fi-br-calendar-day"></i>
					<i class="text-[0.7rem]">{neurathonDate}</i>
				</div>
				<div class="event-text text-wrap">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque incidunt explicabo ipsum,
					magnam nihil harum reiciendis voluptate perferendis repellendus ut eaque, dolore iure. Cum
					et minus delectus rem saepe voluptatibus tenetur provident dignissimos natus possimus vel
					eaque quia facere fugiat, illo deleniti nam nemo sint rerum animi dolore quisquam quae!
				</div>
			</div>
			<div class="reg-button flex justify-start pb-2 pl-5">
				<Button title="Register" />
			</div>
		</div>
		<div class="eligibility-container m-3 flex flex-col gap-2 rounded bg-gray-700/[0.7] p-5">
			<h1 class="eligibility-text-container font-LeagueSpartanFont text-xl font-semibold">
				Eligibility
			</h1>
			<div class="professions flex flex-row p-1 pl-0">
				{#each eligibilityData.data as i}
					<div
						class="prof mr-1 h-full w-fit rounded-xl bg-gray-900/[0.5] p-[0.375rem] px-[0.5rem] text-[0.7rem]"
					>
						{i.status}
					</div>
				{/each}
			</div>
			<div class="elig-datas flex flex-wrap">
				{#each eligData2 as item}
					<div class="team-regs mx-2 flex flex-row pb-2">
						<div
							class="team-reg-icon g-1 flex h-[2.5rem] w-[2.5rem] justify-center rounded bg-gray-900/[0.5] p-2"
						>
							<i class="${item.icon} translate-y-[0.15rem]"></i>
						</div>
						<div class="team-reg-det flex flex-col">
							<div class="team-reg-text px-1 font-LeagueSpartanFont text-[0.65rem]">
								{item.title}
							</div>
							<div class="team-reg-data mx-1 flex justify-start text-[0.85rem]">{item.des}</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div class="neurathon-info-container g-1 overflow-hidden md:w-[70%] lg:w-[70%] xl:w-[70%]">
		<div class="event-timeline m-3 pb-5 rounded border border-gray-400 bg-gray-700/[0.5]">
			<ParticipateTimeline />
		</div>
	</div>
	<!-- <div class="h-20"></div>
	<button onclick={signOut} class="rounded-lg bg-red-500 px-2 py-1">LogOut</button>
	<h1>Private page for User: {user?.email}</h1>
	<h1>Name: {user?.user_metadata?.name}</h1>
	<h1>Phone No.: {user?.user_metadata?.phone}</h1>

	{#if TeamID}
		<div class="container border-2 border-black p-2">
			<span class="bg-gray-400">Team ID: {TeamID}</span>
			<h1>Team: {team?.TeamName}</h1>
			<p>Team Name: {team?.TeamName}</p>
			<p>
				Leader: {team.Members.find((m: { sub: string; name: string }) => m.sub === team?.CreatedBy)
					?.name}
			</p>
			<p>Members:</p>
			{#each team?.Members as member}
				<p>{member.name} {member.phone}</p>
			{/each}
			<form method="POST">
				{#if team?.CreatedBy === user?.id}
					<button formaction="?/delete" class="rounded-lg bg-red-600 px-2 py-1">Delete</button>
				{:else}
					<button formaction="?/leave" class="rounded-lg bg-red-600 px-2 py-1">Leave</button>
				{/if}
			</form>
		</div>
	{:else}
		<div class="container border-2 border-black bg-gray-400">
			<form method="POST" class="m-2 flex gap-4 bg-gray-200">
				<label for="teamname">Team Name</label>
				<input type="text" id="teamname" name="teamname" />
				<button formaction="?/register">Create Team</button>
			</form>
			<form method="POST" class="m-2 flex gap-4 bg-gray-200">
				<label for="teamid">Team Id</label>
				<input type="text" id="teamid" name="teamid" />
				<button formaction="?/join">Join Team</button>
			</form>
		</div>
	{/if} -->
</div>
