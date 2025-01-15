<script>
    import kaggleSvg from "$lib/assets/kaggle.svg";
    import MagicCard from "./MagicCard.svelte";
  </script>
  
  <div class="flex w-full flex-col gap-4 h-[250px] lg:flex-row">
    <MagicCard
      class="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl group hover:border-[#392b879e] transition-all duration-300"
      gradientColor="#44a6c5"
      gradientSize={300}
    >
      <div
        class="group-hover:text-[#2130428a] transition-all duration-500 flex gap-1.5 justify-center items-center font-semibold"
      >
        <img src={kaggleSvg} alt="kaggle_logo" class="size-40 mt-1.5" />
      </div>
    </MagicCard>
  </div>
  