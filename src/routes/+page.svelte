<script lang="ts">
	import { Hero, About, Prizes, Timeline, Sponsers, FAQs, Footer } from '$lib/components';

	import drop from '$lib/assets/drop2.png';
	import bubble from '$lib/assets/bubble.gif';
	import cool1 from '$lib/assets/cool1.png';
	import drop2 from '$lib/assets/drop2.png';
	import dgg from '$lib/assets/dgg.png';
	import stars from "$lib/assets/stars.png";
	import modius from "$lib/assets/Mobius.jpeg";
	import glass from "$lib/assets/Glass _Knot_.jpeg";
	import orange from "$lib/assets/orange.jpeg";
	import { onMount } from 'svelte';

	let scrollPosition = 0;

	const handleScroll = () => {
		const bgImage = document.querySelector('.background-image') as HTMLElement;
		const cool1 = document.querySelector('.cool1') as HTMLElement;
		const drop2 = document.querySelector('.drop2') as HTMLElement;
		const dgg = document.querySelector('.dgg') as HTMLElement;
		const stars = document.querySelector('.stars') as HTMLElement;
		const modius = document.querySelector('.modius') as HTMLElement;
		const glass = document.querySelector('.glass') as HTMLElement;
		const orange = document.querySelector('.orange') as HTMLElement;

		if (bgImage) {
			scrollPosition = window.scrollY;
			bgImage.style.transform = `translateY(${scrollPosition * -0.2}px)`;
		}
		if (cool1) {
			scrollPosition = window.scrollY;
			cool1.style.transform = `translateY(${scrollPosition * -0.2}px)`;
		}
		if (drop2) {
			scrollPosition = window.scrollY;
			drop2.style.transform = `translateY(${scrollPosition * -0.2}px)`;
		}
		if (dgg) {
			scrollPosition = window.scrollY;
			dgg.style.transform = `translateY(${scrollPosition * -0.2}px)`;
		}
		if(stars){
			scrollPosition = window.scrollY;
			stars.style.transform = `translateY(${scrollPosition * -0.2}px)`;
		}
		if(modius){
			modius.style.transform = `translateY(${scrollPosition * -0.2}px)`;
		}
		if(glass){
			glass.style.transform = `translateY(${scrollPosition * -0.2}px)`;
		}
		if(orange){
			orange.style.transform = `translateY(${scrollPosition * -0.2}px)`;
		}
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	// export let data;
</script>

<!-- <div class="main-body flex min-h-screen flex-col items-center justify-center bg-black text-white"> -->

<!-- <img src={smooth1} class="smooth1" alt="smooth1" /> -->
<img src={dgg} class="dgg" alt="dgg" />
<!-- <img src={} alt=""> -->
<img src={bubble} class="background-image" alt="Decorative" />

<div class="main-body m-w-[1200px] overflow-hidden flex min-h-screen flex-col items-center justify-center bg-black text-white">
	<!-- <p class="mb-6">Last fetch Server Time: {data?.currentTime || 'Unavailable'}</p> -->
	<section id="hero" class="container">
		<Hero />
	</section>

	<main class="container">
		<section class="conatiner" id="about">
			<About />
		</section>
		<img src={cool1} class="cool1" alt="cool1" />

		<section class="container" id="timeline">
			<Timeline />
		</section>
		<img src={glass} class="glass" alt="glass" />
		<img src={drop2} class="drop2" alt="drop2" />
		<section class="container" id="prizes">
			<Prizes />
		</section>
		<img src={modius} class="modius" alt="modius" />
		<section id="sponsors">
			<Sponsers />
		</section>
		
		<section id="faqs">
			<FAQs />
		</section>
		
	</main>
	
</div>

<footer class="mt-8">
	<Footer />
</footer>


<!-- </div> -->

<style>
	.main-body {
		position: relative;
		overflow: hidden;
	}


	.background-image {
		display: block;
		position: absolute;
		top: 100%;
		right: 75%;
		width: 500px;
		height: auto;
		opacity: 0.3;
		z-index: 0;
		transition: transform 1s ease-out;
	}

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
		top: 300%;
		right: 55%;
		width: 85%;
		height: auto;
		opacity: 0.15;
		z-index: 0;
		transition: transform 1s ease-out;
	}

	

	.glass {
		position: absolute;
		top: 450%;
		left: 55%;
		width: 85%;
		height: auto;
		opacity: 0.15;
		z-index: 0;
		transition: transform 1s ease-out;
	}

	.modius {

		position: absolute;
		top: 960%;
		right: 55%;
		width: 100%;
		height: auto;
		opacity: 0.0;
		z-index: 0;
		transition: transform 1s ease-out;
	}

	@media(max-width: 400px) {
		.modius {
			opacity: 0.15;
		}
	}

	



	.dgg {
		position: absolute;
		bottom: 0%;
		right: 55%;
		width: 85%;
		height: auto;
		opacity: 0.15;
		z-index: 0;
		transition: transform 1s ease-out;
	}

	@media (max-width: 600px) {
		.drop2 {
			right: 45%;
			width: 100%;
		}

		.dgg {
			top: 50%;
			width: 100%;
			left: 57%;
		}
	}
</style>
