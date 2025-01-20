<script lang="ts">
	// import { onMount } from 'svelte';
	import { Hero, About, Prizes, Timeline, Sponsors, FAQs, Footer } from '$lib/components';

	import bubble from '$lib/assets/bubble.gif';
	import cool1 from '$lib/assets/cool1.png';
	import drop2 from '$lib/assets/drop2.png';
	import dgg from '$lib/assets/dgg.png';
	import modius from '$lib/assets/Mobius.jpeg';
	import glass from '$lib/assets/Glass _Knot_.jpeg';

	// let scrollPosition = 0;

	// const handleScroll = () => {
	// 	const bgImage = document.querySelector('.background-image') as HTMLElement;
	// 	const cool1 = document.querySelector('.cool1') as HTMLElement;
	// 	const drop2 = document.querySelector('.drop2') as HTMLElement;
	// 	const dgg = document.querySelector('.dgg') as HTMLElement;
	// 	const stars = document.querySelector('.stars') as HTMLElement;
	// 	const modius = document.querySelector('.modius') as HTMLElement;
	// 	const glass = document.querySelector('.glass') as HTMLElement;
	// 	const orange = document.querySelector('.orange') as HTMLElement;

	// 	if (bgImage) {
	// 		scrollPosition = window.scrollY;
	// 		bgImage.style.transform = `translateY(${scrollPosition * -0.2}px)`;
	// 	}
	// 	if (cool1) {
	// 		scrollPosition = window.scrollY;
	// 		cool1.style.transform = `translateY(${scrollPosition * -0.2}px)`;
	// 	}
	// 	if (drop2) {
	// 		scrollPosition = window.scrollY;
	// 		drop2.style.transform = `translateY(${scrollPosition * -0.2}px)`;
	// 	}
	// 	if (dgg) {
	// 		scrollPosition = window.scrollY;
	// 		dgg.style.transform = `translateY(${scrollPosition * -0.2}px)`;
	// 	}
	// 	if (stars) {
	// 		scrollPosition = window.scrollY;
	// 		stars.style.transform = `translateY(${scrollPosition * -0.2}px)`;
	// 	}
	// 	if (modius) {
	// 		modius.style.transform = `translateY(${scrollPosition * -0.2}px)`;
	// 	}
	// 	if (glass) {
	// 		glass.style.transform = `translateY(${scrollPosition * -0.2}px)`;
	// 	}
	// 	if (orange) {
	// 		orange.style.transform = `translateY(${scrollPosition * -0.2}px)`;
	// 	}
	// };

	// onMount(() => {
	// 	window.addEventListener('scroll', handleScroll);
	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll);
	// 	};
	// });

	// export let data;
</script>

<div
	class="main-body flex h-auto min-h-screen max-w-[1200px] flex-col items-center justify-center bg-black text-white"
>
	<!-- <p class="mb-6">Last fetch Server Time: {data?.currentTime || 'Unavailable'}</p> -->
	<section id="home">
		<Hero />
	</section>

	<main class="container">
		<img src={dgg} class="dgg" alt="dgg" />
		<img src={bubble} class="background-image" alt="Decorative" />
		<section class="container">
			<About />
		</section>

		<img src={cool1} class="cool1" alt="cool1" />
		<section class="container">
			<Timeline />
		</section>

		<img src={glass} class="glass" alt="glass" />
		<img src={drop2} class="drop2" alt="drop2" />
		<section class="container">
			<Prizes />
		</section>

		<img src={modius} class="modius" alt="modius" />
		<section class="container">
			<Sponsors />
		</section>
		<!-- <img src={bubble} class="bubble2" alt="bubble2" /> -->
		<section id="faqs">
			<FAQs />
		</section>
	</main>
	<footer class="mt-8 w-screen">
		<Footer />
	</footer>
</div>

<!-- </div> -->

<style>
	.main-body {
		position: relative;
		overflow: hidden;
	}

	.background-image {
		display: block;
		position: absolute;
		top: 15%;
		right: 75%;
		width: 500px;
		height: auto;
		opacity: 0.3;
		z-index: 0;
		transition: transform 1s ease-out;
	}
	/* 
	.bubble2 {
		position: absolute;
		bottom: -7%;
		right: 65%;
		width: 1000px;
		height: auto;
		opacity: 0.3;
		transition: transform 1s ease-out;
	} */

	.cool1 {
		position: absolute;
		left: 70%;
		width: 75%;
		display: block;
		height: auto;
		opacity: 0.7;
		z-index: 0;
		transition: transform 1s ease-out;
	}

	.drop2 {
		position: absolute;
		top: 35%;
		right: 55%;
		width: 85%;
		height: auto;
		opacity: 0.15;
		z-index: 0;
		transition: transform 1s ease-out;
	}

	.glass {
		position: absolute;
		/* top: 450%; */
		left: 55%;
		width: 85%;
		height: auto;
		opacity: 0.15;
		z-index: 0;
		transition: transform 1s ease-out;
	}

	.modius {
		position: absolute;
		/* top: 960%; */
		right: 55%;
		width: 100%;
		height: auto;
		opacity: 0;
		z-index: 0;
		transition: transform 1s ease-out;
	}

	@media (max-width: 400px) {
		.modius {
			opacity: 0.15;
		}
	}

	.dgg {
		position: absolute;
		top: -10%;
		right: 55%;
		width: 85%;
		height: auto;
		opacity: 0.15;
		z-index: 0;
		transition: transform 1s ease-out;
	}

	@media (max-width: 760px) {
		.drop2 {
			right: 45%;
			width: 100%;
		}

		.dgg {
			top: 5%;
			width: 100%;
			left: 0%;
		}
	}

	@media (max-width: 800px) {
		.dgg {
			top: 0%;
		}
	}
</style>
