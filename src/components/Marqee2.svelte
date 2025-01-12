<script>
	import Marquee from './Marqee.svelte';
	import Reviewcard from './Reviewcard.svelte';
	import logo from '$lib/assets/diamond.png';
	// import logo from "../assets/logo.png";

	import adobe from '$lib/assets/adobe.png';
	import amazon from '$lib/assets/amazon.png';
	import google from '$lib/assets/google.png';
	import blockchain from '$lib/assets/blockchain.png';
	import cisco from '$lib/assets/cisco.png';
	import cocacola from '$lib/assets/cocacola.png';
	import disney from '$lib/assets/disney.png';
	import ibm from '$lib/assets/ibm.png';
	import walmart from '$lib/assets/walmart.png';

	import sponserData from '$lib/data/sponsers.json';


	let firstRow = sponserData.sponsers.slice(0, sponserData.sponsers.length / 2);
	let secondRow = sponserData.sponsers.slice(sponserData.sponsers.length / 2);
</script>

<div
	class="bg-background relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg py-5 md:shadow-xl"
>
	<Marquee pauseOnHover class="[--duration:30s]">
		{#each firstRow as item}
			<Reviewcard {...item} />
		{/each}
	</Marquee>
	<Marquee reverse pauseOnHover class="[--duration:30s]">
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
