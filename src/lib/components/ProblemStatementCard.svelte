<script lang="ts">
	import { Motion, useMotionValue, useMotionTemplate } from 'svelte-motion';

	// import problemStatements from '$lib/data/problemstatements.json';
	import { ProblemCard, ProblemDetails } from '$lib/components';

	export let problemStatements;

	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);
	let background = useMotionTemplate`
      radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.1), transparent 80%)
    `;

	type Event = {
		id: number;
		title: string;
		overview: string;
		keyObjectives: any;
		environment: any;
	};

	let selectedEvent: Event | null = null;

	let isPopupOpen = false;

	function handleEventSelect(event: Event) {
		selectedEvent = event;
		isPopupOpen = true;
	}

	function closePopup() {
		isPopupOpen = false;
		selectedEvent = null;
	}
</script>

<div class="prob-container relative flex flex-col justify-center pt-6">
	<span
		class="mb-4 mt-10 animate-text-gradient bg-gradient-to-r from-[#FFFFFF] via-[#7e7e7e] to-[#FFFFFF] bg-[200%_auto] bg-clip-text text-center font-LeagueSpartanFont text-3xl font-bold text-transparent md:text-4xl lg:text-5xl"
	>
		Problem Statements
	</span>

	<div class="grid grid-cols-1 justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each problemStatements as statement}
			<ProblemCard {statement} on:select={() => handleEventSelect(statement)} />
		{/each}
	</div>
</div>
{#if selectedEvent}
	<ProblemDetails statement={selectedEvent} isOpen={isPopupOpen} {closePopup} />
{/if}
