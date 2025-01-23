<script>
	import { goto } from '$app/navigation';

	let teamLead = true;		
	let qulifiedR1 = true;		
	let team = {
		TeamName: 'Team Name',
		Members: [
			{
				name: 'Member 1',
				phone: '1234567890'
			},
			{
				name: 'Member 2',
				phone: '1234567890'
			}
		],
		CreatedBy: '1234567890'
	};
</script>


<div>
	Congratulations! {qulifiedR1
		? teamLead
			? 'Your team has been qualified kaggle round. To continue to second round you need to add your github repo.'
			: 'Your team has been qulified kaggle round.'
		: "We are sorry to inform you that your team has not qulified in kaggle round. But don't be sad, faliure is the first stage of success."}
</div>
{#if teamLead && qulifiedR1}
	<button
		class="mt-3 px-4 py-2 rounded-md bg-gray-900"
		onclick={() => {
			goto('/dashboard/team');
		}}
		aria-label="Register your team">Add Github</button
	>
{/if}
