<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	export let eventTime: number | undefined;
	export let currentTime: number;
	export let eventName: string | undefined;
	export let eventDescription: string | undefined;

	let timeLeft = {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	};

	let intervalId: ReturnType<typeof setInterval>;

	function calculateTimeLeft() {
		const difference = (eventTime ?? 0) - (currentTime ?? 0);

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60)
			};
		} else {
			timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
			clearInterval(intervalId);
		}
	}

	onMount(() => {
		calculateTimeLeft();

		intervalId = setInterval(() => {
			currentTime += 1000;
			calculateTimeLeft();
		}, 1000);
	});

	onDestroy(() => {
		clearInterval(intervalId);
	});
</script>

<div
	class="h-fit w-full overflow-hidden rounded-md border border-gray-800 bg-gradient-to-r from-indigo-900/[0.3] to-black/[0.5] p-6 text-white opacity-95 shadow-lg backdrop-blur-sm"
>
	<div class="relative flex flex-col">
		<div class="mb-4 text-center">
			<p
				class="bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-2xl font-semibold text-transparent"
			>
				Time remaining until {eventName}
			</p>
			<p class="mt-3 text-sm font-thin text-gray-300 md:text-xl">
				{eventDescription}
			</p>
		</div>

		<div class="flex justify-center gap-6">
			<div class="flex flex-col items-center">
				<span class="text-4xl font-bold">{timeLeft.days}</span>
				<span class="text-sm text-neutral-400">Days</span>
			</div>
			<div class="flex flex-col items-center">
				<span class="text-4xl font-bold">{timeLeft.hours}</span>
				<span class="text-sm text-neutral-400">Hours</span>
			</div>
			<div class="flex flex-col items-center">
				<span class="text-4xl font-bold">{timeLeft.minutes}</span>
				<span class="text-sm text-neutral-400">Minutes</span>
			</div>
			<div class="flex flex-col items-center">
				<span class="text-4xl font-bold">{timeLeft.seconds}</span>
				<span class="text-sm text-neutral-400">Seconds</span>
			</div>
		</div>
	</div>
</div>
