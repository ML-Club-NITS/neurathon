<script lang="ts">
	import { type Component } from 'svelte';
	import Timeline from './TimelineComponent.svelte';
	import KaggleCard from './KaggleCard.svelte';
	import Day1 from './Day1.svelte';
	import Day2 from './Day2.svelte';
	import Conclusion from './Conclusion.svelte';

	let timelineData: { title: string; content: Component | string }[] = [
		{
			title: 'Preliminary',
			content: KaggleCard
		},
		{
			title: 'Day 1',
			content: Day1
		},
		{
			title: 'Day 2',
			content: Day2
		},
		{
			title: 'Day 3',
			content: Conclusion
		}
	];
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);

	$effect(() => {
		let tl = gsap.timeline();
		tl.from('#timeline', {
			opacity: 0,
			y: 60,
			stagger: 1,

			scrollTrigger: {
				trigger: '#timeline',
				scrub: 0.3,
				start: '-=200',
				end: '+=50',
				once: true,
				snap: {
					ease: 'power1.inOut'
				}
			}
		});
	});
</script>

<section
	id="timeline"
	class="font-sans flex h-full w-full flex-wrap justify-around overflow-hidden md:px-10"
>
	<Timeline {timelineData} />
</section>
