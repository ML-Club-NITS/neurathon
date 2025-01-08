<script lang="ts">
	import { invalidate } from '$app/navigation';
	import type { EventHandler } from 'svelte/elements';

	let { data } = $props();
	let { notes, supabase, user } = $derived(data);

	const handleSubmit: EventHandler<SubmitEvent, HTMLFormElement> = async (e) => {
		e.preventDefault();
		if (!e.target) return;

		const form = e.target as HTMLFormElement;

		const note = (new FormData(form).get('note') ?? '') as string;
		if (!note) return;

		const { error } = await supabase.from('notes').insert({ note });
		if (error) console.error(error);

		invalidate('supabase:db:notes');
		form.reset();
	};
</script>

<h1>Private page for User: {user?.email}</h1>
<h1>Name: {user?.user_metadata?.name}</h1>
<h1>Phone No.: {user?.user_metadata?.phone}</h1>
<h2>Notes</h2>
<ul>
	{#each notes as note}
		<li>{note.note}</li>
	{/each}
</ul>
<form onsubmit={handleSubmit}>
	<label>
		Add a note
		<input name="note" type="text" />
	</label>
</form>
