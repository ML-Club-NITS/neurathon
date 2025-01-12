<script>
	// import SvelteSvg from "$lib/svg/web/ll.svg";
	// import SupabaseSvg from "$lib/svg/web/ll.svg";
	import MagicCard from './MagicCard.svelte';
	import ButtonBackgroundShine from './ButtonBackgroundShine.svelte';
</script>

<div class="m-20px flex h-[250px] w-[300px] flex-col gap-4 lg:flex-row">
	<MagicCard
		class="group flex cursor-pointer flex-col items-center justify-center whitespace-nowrap text-center text-4xl shadow-2xl transition-all duration-300 hover:border-[#1cff149e]"
		gradientColor="#043634"
		gradientSize={300}
	>
		<div class="det-container flex h-full w-full flex-col items-center justify-center gap-4 p-4">
			<div class="img-container h-[100px] w-full flex-shrink-0 overflow-hidden border-2"></div>
			<div
				class="flex items-center justify-center gap-1.5 text-lg font-semibold transition-all duration-500 group-hover:text-[#7fe565]"
			>
				<!-- <img src={SupabaseSvg} alt="svelte_logo" class="size-10 mt-1.5" /> -->
				Track Name
			</div>
			<div class="button-container mt-2">
				<ButtonBackgroundShine />
			</div>
		</div>
	</MagicCard>
</div>

<style>
	.det-container {
		max-width: 100%;
		text-align: center;
	}

	.img-container {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #f9f9f9;
	}

	.button-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
