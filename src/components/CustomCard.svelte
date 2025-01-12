<div class="flex h-full w-full items-center justify-center">
	<div>
		How to reach NIT Silchar? <br />
	</div>
	<div class="group w-full">
		<div class="card"></div>
		<div class="stick h-[100px] w-[5px] bg-slate-200"></div>
	</div>
</div>

<style>
	.stick {
		transform: rotateY(19deg);
	}
	.card {
		height: 250px;
		width: 190px;
		background-image: linear-gradient(to top, #210c93, #0d117a, #011160, #010e47, #07052e);
		box-shadow: rgba(0, 0, 0, 0.24) -20px 30px 10px;
		transform-style: preserve-3d;
		transform: rotateY(19deg);
		border-radius: 10px;
		transition: transform 2s;
	}

	.card:hover {
		transform: perspective(400px) rotateX(60deg) rotateZ(-30deg);
	}
</style>
