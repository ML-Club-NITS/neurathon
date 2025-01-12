<script>
	import Marquee from './Marqee.svelte';
	import Reviewcard from './Reviewcard.svelte';
	import logo from '$lib/assets/diamond.png';
	// import logo from "../assets/logo.png";

	const reviews = [
		{
			name: 'Bhide',
			username: '@Bhide',
			body: 'Noicee work. I love it. Keep it up.',
			img: logo
		},
		{
			name: 'Bhide',
			username: '@Bhide',
			body: 'Noicee work. I love it. Keep it up.',
			img: logo
		},
		{
			name: 'Bhide',
			username: '@Bhide',
			body: 'Noicee work. I love it. Keep it up.',
			img: logo
		},
		{
			name: 'Bhide',
			username: '@Bhide',
			body: 'Noicee work. I love it. Keep it up.',
			img: logo
		},
		{
			name: 'Bhide',
			username: '@Bhide',
			body: 'Noicee work. I love it. Keep it up.',
			img: logo
		},
		{
			name: 'Bhide',
			username: '@Bhide',
			body: 'Noicee work. I love it. Keep it up.',
			img: logo
		},
		{
			name: 'Bhide',
			username: '@Bhide',
			body: 'Noicee work. I love it. Keep it up.',
			img: logo
		}
		//   {
		//     name: "Jethalal",
		//     username: "@Jethalal",
		//     body: "I am loving it. Keep it up.",
		//     img: "https://avatar.vercel.sh/jack",
		//   },
		//   {
		//     name: "Popatlal",
		//     username: "@Popatlal",
		//     body: "I am loving it. Keep it up.",
		//     img: "https://avatar.vercel.sh/jack",
		//   },
		//   {
		//     name: "Iyer",
		//     username: "@Iyer",
		//     body: "I am loving it. Keep it up.",
		//     img: "https://avatar.vercel.sh/jack",
		//   },
		//   {
		//     name: "Sodhi",
		//     username: "@Sodhi",
		//     body: "I am loving it. Keep it up.",
		//     img: "https://avatar.vercel.sh/jack",
		//   },
		//   {
		//     name: "Dr. Hathi",
		//     username: "@Dr. Hathi",
		//     body: "I am loving it. Keep it up.",
		//     img: "https://avatar.vercel.sh/jack",
		//   },
		//   {
		//     name: "Taarak Mehta",
		//     username: "@Taarak Mehta",
		//     body: "I am loving it. Keep it up.",
		//     img: "https://avatar.vercel.sh/jack",
		//   },
		//   {
		//     name: "Anjali",
		//     username: "@Anjali",
		//     body: "I am loving it. Keep it up.",
		//     img: "",
		//   },
	];

	let firstRow = reviews.slice(0, reviews.length / 2);
	let secondRow = reviews.slice(reviews.length / 2);
</script>

<div
	class="bg-background relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg py-5 md:shadow-xl"
>
	<Marquee pauseOnHover class="[--duration:60s]">
		{#each firstRow as item}
			<Reviewcard {...item} />
		{/each}
	</Marquee>
	<Marquee reverse pauseOnHover class="[--duration:60s]">
		{#each secondRow as item}
			<Reviewcard {...item} />
		{/each}
	</Marquee>
	<div
		class="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"
	></div>
	<div
		class="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"
	></div>
</div>
