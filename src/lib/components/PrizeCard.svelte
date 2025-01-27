<script>
	import { NumberTicker } from './ui';

	export let title;
	export let award;
	export let image;
</script>

<section id="prizes" class="font-sans h-full w-full justify-center">
	<div class="card-container mx-auto">
		<div class="card">
			<div class="card-prize-container">
				<img src={image} alt="Prize" />
			</div>
			<div class="prize-info">
				<p class="prize-title">{title}</p>
				<NumberTicker value={+award} />
			</div>
		</div>
	</div>
</section>

<style>
	.card-container {
		display: flex;
		justify-content: center;
	}

	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 320px;
		height: 400px;
		border-radius: 1rem;
		/* background: rgba(255, 255, 255, 0.1); */
		backdrop-filter: blur(10px);
		position: relative;
		border: 4px solid transparent;
		background-clip: padding-box;
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
		overflow: hidden;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		animation: border-gradient 5s infinite;
	}

	.card:hover {
		transform: translateY(-10px);
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
	}

	.card:before {
		content: '';
		position: absolute;
		inset: -4px;
		border-radius: 1rem;
		background: linear-gradient(45deg, #cd0000, #00000051, #0000005d, #0316a2);
		background-size: 300% 300%;
		animation: gradient-animation 6s ease infinite;
		z-index: -1;
	}

	.card-prize-container {
		width: 100%;
		height: 70%;
		/* backdrop-filter: blur(10px); */
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: -50px;
	}

	.prize-info {
		position: absolute;
		bottom: 1.5rem;
		width: 100%;
		text-align: center;
		color: rgba(255, 255, 255, 0.9);
	}

	.prize-title {
		font-size: 1rem;
		color: rgba(255, 255, 255, 0.7);
	}

	.prize-award {
		font-size: 1.5rem;
		font-weight: bold;
		color: rgba(255, 255, 255, 0.9);
	}

	@keyframes gradient-animation {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
