<script lang="ts">
	import { Hero, About, Prizes, Timeline, Sponsers, FAQs, Footer } from '$lib/components';

	import drop from "$lib/assets/drop2.png"
	import bubble from "$lib/assets/bubble.gif"
	import cool1 from "$lib/assets/cool1.png";
	import drop2 from "$lib/assets/drop2.png";
	import { onMount } from 'svelte';

	let scrollPosition = 0;

	const handleScroll = () => {
		const bgImage = document.querySelector('.background-image') as HTMLElement;
		const cool1 = document.querySelector('.cool1') as HTMLElement;
		const drop2  = document.querySelector('.drop2') as HTMLElement;
		if(bgImage) {
			scrollPosition = window.scrollY;
			bgImage.style.transform = `translateY(${scrollPosition * -0.2}px)`;
		}
		if(cool1) {
			scrollPosition = window.scrollY;
			cool1.style.transform = `translateY(${scrollPosition * -0.2}px)`;
		}
		if(drop2) {
			scrollPosition = window.scrollY;
			drop2.style.transform = `translateY(${scrollPosition * -0.2}px)`;
		}
		
	};

	onMount(()=> {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	// export let data;
</script>

<!-- <div class="main-body flex min-h-screen flex-col items-center justify-center bg-black text-white"> -->
	
	<!-- <img src={smooth1} class="smooth1" alt="smooth1" /> -->
	
	<img src={bubble} class="background-image" alt="Decorative" />

	
	<div class="main-body flex min-h-screen flex-col items-center justify-center bg-black text-white">
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
			<img src={drop2} class="drop2" alt="drop2" />
			<section class="container" id="prizes">
				<Prizes />
			</section>
			<section id="sponsers">
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
	.background-image {
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

@media (max-width: 720px) {
	.drop2 {
		right: 45%;
		width:100%;
	}
}



</style>
  


