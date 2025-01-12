<script>

	import RetroGrid from "./RetroGrid.svelte";

</script>
<section
	id="prizes"
	class="h-full w-full justify-around overflow-hidden bg-white font-sans md:px-10 dark:bg-neutral-950"
>
	<div class="text-center font-bold text-4xl">Prizes</div>
	<div class="card-border my-14 h-[400px]">
		<div class="card-bg">
			<div class="container-logo">
				<div class="logo"></div>
				<div class="logo-inside">
					<div class="first"></div>
					<div class="second"></div>
				</div>
			</div>
			<div id="blur-area"></div>
			<div class="marquee">
				<div class="marquee__inner" aria-hidden="true">
					<span class="viper">winner winner winner winner</span>
					<span class="viper">winner winner winner winner</span>
					<span class="viper">winner winner winner winner</span>
				</div>
			</div>
		</div>
		<div class="mist-container">
			<div class="mist"></div>
		</div>
		<div id="winner-prize" class="m-20 h-auto w-auto">
			<strong
				id="text-ext"
				class="my-5 flex flex-col items-start !text-4xl font-bold text-green-400">₹10000</strong
			>
			<strong id="text-border" class="z-20 my-3 !text-2xl font-semibold">
				Neurathon Grand Winner
			</strong>
		</div>
	</div>
</section>

<style>
	.card-border {
		z-index: 0;
		position: relative;
		padding: 1rem;
		height: 320px;
		width: 300px;
		box-sizing: border-box;
		background: transparent;
		backdrop-filter: blur(40px);
		border-radius: 0px 2rem;
		background-image: radial-gradient(#2121218a, #212121cc),
			linear-gradient(35deg, #7a3a00 62%, #ffaa57 100%);
		box-shadow: 1px 1px 3rem #ffaa57;
		background-origin: border-box;
		background-clip: content-box, border-box;
		transition: all 0.5s;
		animation: pulse_3011 3s infinite;
	}

	.card-bg {
		position: relative;
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		overflow: hidden;
		border-radius: 0px 0.8rem;
		background: linear-gradient(
			346.8deg,
			#7a3a00 30%,
			#9c4d00 30%,
			rgba(255, 100, 20, 0) 30%,
			rgba(255, 100, 20, 0) 32%,
			#7a3a00 32%,
			#7a3a00 35%,
			transparent 35%
		);
	}

	strong {
		display: flex;
		height: 100%;
		width: 100%;
		text-transform: uppercase;
		font-family: 'Open Sans Pro', sans-serif;
		font-weight: 900;
		letter-spacing: 0.5rem;
	}

	#text-border {
		position: absolute;
		top: 15.35rem;
		left: 1.5rem;
		width: 100%;
		height: fit-content;
		/* color: transparent; */
		/* -webkit-text-stroke-width: 4px;
		-webkit-text-stroke-color: rgb(255, 255, 255);
		background: linear-gradient(90deg, transparent 100%, #ffffff 65%);
		background-size: cover;
		background-clip: text; */
		/* -webkit-background-clip: text; */
	}

	#text-ext {
		z-index: -1;
		display: flex;
		position: absolute;
		inset: 1rem;
		-webkit-text-stroke-width: 1px;
		/* -webkit-text-stroke-color: #ffffff; */
		background: linear-gradient(
			346.8deg,
			rgb(255, 173, 89) 30%,
			#ffaa57 30%,
			#ffaa57 30%,
			rgb(255, 173, 89) 32%,
			rgb(255, 173, 89) 32%,
			rgb(255, 173, 89) 35%
		);
		background-size: cover;
		background-clip: text;
		-webkit-background-clip: text;
		/* -webkit-text-fill-color: transparent; */
		padding: 9rem 0 0 0.5rem;
	}

	.marquee {
		top: 0;
		z-index: -5;
		width: 100%;
		height: 100%;
		position: absolute;
		overflow: hidden;
		--offset: 2rem;
		--move-initial: calc(-20% + var(--offset));
		--move-final: calc(-85% + var(--offset));
		border-radius: 0px 1rem;
		filter: opacity(0.3);
	}

	.marquee__inner {
		width: fit-content;
		display: flex;
		position: relative;
		transform: translate3d(var(--move-initial), 0, 0);
		animation: slide 60s linear infinite;
		border-radius: 0px 1rem;
	}

	.marquee__inner {
		animation-play-state: running;
	}

	#blur-area {
		display: block;
		position: absolute;
		z-index: -1;
		inset: 0;
		/* border: 1px solid rgb(12, 255, 65); */
		border-radius: 0 1rem;
		backdrop-filter: blur(3px);
		background: linear-gradient(90deg, transparent 0%, #00000044 100%);
	}

	.viper {
		display: flex;
		text-transform: uppercase;
		font-family: 'Open Sans Pro', sans-serif;
		font-size: 8rem;
		font-weight: 900;
		align-items: center;
		line-height: 0.9em;
		color: transparent;
		-webkit-text-stroke-width: 2px;
		-webkit-text-stroke-color: #ffaa57;
	}

	.container-logo {
		display: flex;
		position: absolute;
		width: 3.5rem;
		height: 3em;
		top: 1rem;
		left: 1rem;
		align-items: center;
		justify-content: center;
		clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
	}

	.logo {
		position: absolute;
		width: 200%;
		height: 200%;
		background: conic-gradient(
			#7a3a00 0%,
			#fff 10%,
			#ffaa57 25%,
			#9c4d00 50%,
			#ffaa57 70%,
			#b37a47 90%
		);
		animation: spin 5s linear infinite;
	}

	.logo-inside {
		display: flex;
		width: 85%;
		height: 85%;
		align-items: center;
		justify-content: center;
		clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
		background-color: #212121;
	}

	.first,
	.second {
		position: absolute;
		width: 30px;
		height: 30px;
		background-color: #57ff95;
	}

	.first {
		clip-path: polygon(0 10%, 70% 90%, 35% 90%, 0 50%);
	}

	.second {
		clip-path: polygon(100% 10%, 100% 50%, 88% 65%, 55% 65%);
	}

	.mist-container {
		position: absolute;
		width: 450px;
		height: 150px;
		overflow: hidden;
		filter: blur(1rem);
		top: 60%;
		left: 0;
	}

	.mist {
		width: 100%;
		height: 100%;
		background: radial-gradient(circle, rgba(255, 173, 89, 0.63) 10%, rgba(255, 255, 255, 0) 50%);
		animation: mist 10s infinite both;
	}

	svg {
		position: absolute;
		top: 0%;
		width: 18rem;
		height: 100%;
		z-index: -2;
	}

	.card-border:hover {
		transform: rotateY(20deg);
		box-shadow: 0 0 2rem #ffaa57;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}

	@keyframes mist {
		0% {
			transform: translateX(-50%) translateY(0%) scaleY(0.7) rotate(0deg);
			opacity: 0.3;
		}

		50% {
			transform: translateX(0%) translateY(50%) scaleY(-10.3) rotate(20deg);
			opacity: 0.5;
		}

		100% {
			transform: translateX(-50%) translateY(0%) scaleY(0.7) rotate(-20deg);
			opacity: 0.3;
		}
	}

	@keyframes pulse_3011 {
		0% {
			box-shadow: 0 0 1rem #ffaa57;
		}

		70% {
			box-shadow: 0 0 2rem #ffaa57;
		}

		100% {
			box-shadow: 0 0 1rem #ffaa57;
		}
	}

	@keyframes slide {
		0% {
			transform: translate3d(var(--move-initial), 0, 0);
		}

		100% {
			transform: translate3d(var(--move-final), 0, 0);
		}
	}
</style>
