<script lang="ts">
	import { goto } from '$app/navigation';

	import gem from '$lib/assets/gem.png';
	import Button from './ui/Button.svelte';

	let { data } = $props();
	let { TeamID, team, user, supabase } = $derived(data);

	async function signOut() {
		const { error } = await supabase.auth.signOut();
		console.error(error);
		goto('/');
	}
</script>

<div class="text-whit mt-[4.3rem] flex flex-col gap-5 md:flex-row lg:flex-row xl:flex-row">
	<div class="reg-container overflow-hidden bg-gray-700/[0.7]  flex flex-col justify-center m-3 rounded text-white">
		<div class="event-info-card flex flex-row gap-5  px-5 pb-2 pt-5">
			<div class="icon h-full w-fit rounded bg-white/[0.6]">
				<img src={gem} class="max-w-16" alt="gem" />
			</div>
			<div class="event-name">
				<h1 class="text-[2rem] font-LeagueSpartanFont font-semibold">Neurathon</h1>
			</div>
		</div>
		<div class="event-des p-5 pt-1">
			<div class="event-date flex gap-1">
				<i class="fi fi-br-calendar-day"></i>
				<i class="text-[0.7rem]">--/--/25</i>
			</div>
			<div class="event-text text-wrap">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur?
			</div>
			
		</div>
		<div class="reg-button flex justify-start pb-2 pl-5">
			<Button title="Register"/>
		</div>
		
	</div>
	<div class="neurathon-info-container overflow-hidden bg-blue-500">
		<div class="p">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, tempore.
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
