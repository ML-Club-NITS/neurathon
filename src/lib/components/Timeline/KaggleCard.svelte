<script>
	import kaggleSvg from '$lib/assets/kaggle.svg';
	import MagicCard from './MagicCard.svelte';
</script>

<div class="flex h-[250px] w-full flex-col gap-4 lg:flex-row">
	<MagicCard
		class="group cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl transition-all duration-300 hover:border-[#392b879e]"
		gradientColor="#44a6c6"
		gradientSize={300}
	>
		<div
			class="flex items-center justify-center gap-1.5 font-semibold transition-all duration-500 group-hover:text-[#2961a1]"
		>
			<img src={kaggleSvg} alt="kaggle_logo" class="mt-1.5 size-40" />
		</div>
	</MagicCard>
</div>
