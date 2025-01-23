<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();

	// let { data } = $props();
	let { supabase, user, TeamID, team } = $derived(data);

	async function signOut() {
		const { error } = await supabase.auth.signOut();
		console.error(error);
		goto('/');
	}
</script>

<div class="register-page text-red-400">
	<div class="h-20"></div>
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
				<input type="text" id="teamname" class="h-full" name="teamname" />
				<button formaction="?/register" class="bg-gray-800 p-2">Create Team</button>
			</form>
			<!-- <form method="POST" class="m-2 flex gap-4 bg-gray-200">
				<label for="teamid">Team Id</label>
				<input type="text" id="teamid" name="teamid" />
				<button formaction="?/join">Join Team</button>
			</form> -->
		</div>
	{/if}
</div>
