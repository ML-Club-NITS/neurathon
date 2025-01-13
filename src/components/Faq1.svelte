<script>
	import Accordion from './Accordion.svelte';

	export let question;
	export let answer;
</script>

<Accordion>
	<span slot="head">{question}</span>
	<div slot="details">
		<p>
			{answer}
		</p>
	</div>
</Accordion>
