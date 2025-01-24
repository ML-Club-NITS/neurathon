<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();

	let { supabase, user, TeamID, team } = $derived(data);

	async function signOut() {
		const { error } = await supabase.auth.signOut();
		console.error(error);
		goto('/');
	}
</script>

<div class="min-h-screen bg-neutral-900 text-neutral-100 p-6">
	<!-- Header -->
	<div class="flex justify-between items-center mb-8">
		<h1 class="text-3xl font-bold">Welcome, {user?.user_metadata?.name}</h1>
		<button
			onclick={signOut}
			class="rounded-lg bg-red-600 px-4 py-2 text-neutral-100 hover:bg-red-700 transition-colors duration-200"
		>
			Log Out
		</button>
	</div>

	<!-- User Profile Section -->
	<div class="mb-8">
		<div class="bg-neutral-800 rounded-xl p-6 shadow-lg">
			<h2 class="text-2xl font-bold mb-4">Profile Information</h2>
			<div class="space-y-4">
				<div>
					<label class="text-sm font-medium text-neutral-400">Email</label>
					<p class="text-neutral-100">{user?.email}</p>
				</div>
				<div>
					<label class="text-sm font-medium text-neutral-400">Phone</label>
					<p class="text-neutral-100">{user?.user_metadata?.phone}</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Team Information Section -->
	{#if TeamID}
		<div class="bg-neutral-800 rounded-xl p-6 shadow-lg">
			<h2 class="text-2xl font-bold mb-4">Team Information</h2>
			<div class="space-y-4">
				<div>
					<label class="text-sm font-medium text-neutral-400">Team ID</label>
					<p class="text-neutral-100">{TeamID}</p>
				</div>
				<div>
					<label class="text-sm font-medium text-neutral-400">Team Name</label>
					<p class="text-neutral-100">{team?.TeamName}</p>
				</div>
				<div>
					<label class="text-sm font-medium text-neutral-400">Team Leader</label>
					<p class="text-neutral-100">
						{team.Members.find((m: { sub: string; name: string }) => m.sub === team?.CreatedBy)
							?.name}
					</p>
				</div>
				<div>
					<label class="text-sm font-medium text-neutral-400">Team Members</label>
					<div class="space-y-2">
						{#each team?.Members as member}
							<p class="text-neutral-100">
								{member.name} - {member.phone}
							</p>
						{/each}
					</div>
				</div>
				<form method="POST" class="flex gap-4">
					{#if team?.CreatedBy === user?.id}
						<button
							formaction="?/delete"
							class="rounded-lg bg-red-600 px-4 py-2 text-neutral-100 hover:bg-red-700 transition-colors duration-200"
						>
							Delete Team
						</button>
					{:else}
						<button
							formaction="?/leave"
							class="rounded-lg bg-red-600 px-4 py-2 text-neutral-100 hover:bg-red-700 transition-colors duration-200"
						>
							Leave Team
						</button>
					{/if}
				</form>
			</div>
		</div>
	{:else}
		<div class="bg-neutral-800 rounded-xl p-6 shadow-lg">
			<h2 class="text-2xl font-bold mb-4">Join or Create a Team</h2>
			<div class="space-y-6">
				<form method="POST" class="space-y-4">
					<div>
						<label for="teamname" class="block text-sm font-medium text-neutral-400">Team Name</label>
						<input
							type="text"
							id="teamname"
							name="teamname"
							class="w-full rounded-lg bg-neutral-700 border border-neutral-600 px-4 py-2 text-neutral-100 focus:border-indigo-500 focus:ring-indigo-500"
						/>
					</div>
					<button
						formaction="?/register"
						class="w-full rounded-lg bg-indigo-600 px-4 py-2 text-neutral-100 hover:bg-indigo-700 transition-colors duration-200"
					>
						Create Team
					</button>
				</form>
				<form method="POST" class="space-y-4">
					<div>
						<label for="teamid" class="block text-sm font-medium text-neutral-400">Team ID</label>
						<input
							type="text"
							id="teamid"
							name="teamid"
							class="w-full rounded-lg bg-neutral-700 border border-neutral-600 px-4 py-2 text-neutral-100 focus:border-indigo-500 focus:ring-indigo-500"
						/>
					</div>
					<button
						formaction="?/join"
						class="w-full rounded-lg bg-indigo-600 px-4 py-2 text-neutral-100 hover:bg-indigo-700 transition-colors duration-200"
					>
						Join Team
					</button>
				</form>
			</div>
		</div>
	{/if}
</div>