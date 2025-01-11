<script>
	function expandCard() {
		// Your expand card logic here
		console.log('Card expanded');
	}
</script>

<div class="crad-container">
	<div class="card" on:click={expandCard}>
		<div class="card-header">
			<div class="img-container">
				<img src="src\components\assets\diamond.png" alt="diamond" />
			</div>
		</div>
		<div class="card-body">
			<p class="card-text">Tracks</p>
			<div class="crad-details">This is Track 1</div>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

	.crad-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.card {
		width: 300px;
		background: linear-gradient(rgb(231, 144, 5, 0.2), rgb(213, 84, 4, 0.2));
		border-radius: 15px;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(15px);
		border: 1px solid rgba(255, 255, 255, 0.1);
		overflow: hidden;
		position: relative;
		transition:
			transform 0.3s,
			background 0.5s;
	}

	.card-header {
		padding: 20px;
		/* border-bottom: 1px solid rgba(255, 255, 255, 0.2); */
	}

	.card-title {
		margin: 0;
		font-size: 18px;
		color: #fff;
	}

	.card-body {
		padding: 20px;
		display: flex;
		justify-content: center;
	}

	.card-text {
		margin: 0;
		color: #fff;
		font-family: 'league-spartan', sans-serif;
		font-weight: bold;
		font-size: 30px;
	}

	.card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 200%;
		height: 200%;
		background: linear-gradient(
			120deg,
			rgba(222, 0, 0, 0.1),
			rgba(218, 110, 2, 0.2),
			rgba(111, 4, 193, 0.1)
		);
		background-size: 300% 300%;
		z-index: -1;
		transition: opacity 0.5s;
		opacity: 0;
	}

	.card:hover::before {
		animation: flowing-water 3s infinite linear;
		opacity: 1;
	}

	.card:hover {
		transform: translateY(-10px);
		background: linear-gradient(rgb(231, 144, 5, 0.35), rgb(213, 84, 4, 0.35));
	}

	.card-details {
		display: none;
	}

	@keyframes flowing-water {
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
