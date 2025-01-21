<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';
	import PersonCard from '$lib/components/ui/PersonCard.svelte';
	import userProfile from '$lib/assets/userProfile.jpeg';
	let { data }: { data: PageData } = $props();

	let { supabase } = $derived(data);

	

	let user = {
		name: 'test',
		image: userProfile,
		role: 'Software Developer',
		about: 'Lorem50',
		contact: {
			email: 'test',
			phone: '9954722871',
			location: 'San Francisco, CA'
		},
		id: '1'
	};

	let team = {
		TeamName: 'Awesome Team',
		CreatedBy: 'Tahmid',
		Members: [
			{ sub: 'user2', name: 'Tah2', phone: '123-456-7890' },
			{ sub: 'use2', name: 'Tah3', phone: '987-654-3210' }
		]
	};

	let TeamID = 'fsw';
</script>

<div
	class="register-page flex h-auto w-auto flex-col bg-green-500 pt-16 md:flex-row lg:flex-row xl:flex-row"
>
	<div class="personal-info m-5 bg-red-500 p-5 md:w-[50%] lg:w-[50%] xl:w-[50%]">
		<!-- <div class="h-20"></div> -->
		
		<!-- <h1>Private page for User: {user?.email}</h1>
		<h1>Name: {user?.user_metadata?.name}</h1>
		<h1>Phone No.: {user?.user_metadata?.phone}</h1>  -->
		<!-- <p>Lorem100</p> -->
		<PersonCard user={user} />
	</div>
	<div class="team-info m-5 bg-blue-500 p-5 md:w-[50%] lg:w-[50%] xl:w-[50%]">
		{#if TeamID}
			<div class="container border-2 border-black p-2">
				<span class="bg-gray-400">Team ID: {TeamID}</span>
				<h1>Team: {team?.TeamName}</h1>
				<p>Team Name: {team?.TeamName}</p>
				<p>
					Leader: {team.Members.find(
						(m: { sub: string; name: string }) => m.sub === team?.CreatedBy
					)?.name}
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
		{/if}
	</div>
</div>
