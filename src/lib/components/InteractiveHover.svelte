<script lang="ts">
  import { cn } from "$lib/utils";
  import { ArrowRight } from "@lucide/svelte";
  let _class: string = "";
  export { _class as class };
  export let text: string = "Button";
  export let href: string = "#";
</script>

<a
  href={href}
  target="_blank"
  rel="noopener noreferrer"
  class={cn(
  "group relative w-32 cursor-pointer overflow-hidden rounded-full border-2 hover:border-0 bg-black p-2 text-center font-semibold",
  _class
  )}
  {...$$restProps}
>
  <span
  class="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 font-semibold"
  >
  {text}
  </span>
  <div
  class="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100"
  >
  <span>{text}</span>
  <ArrowRight />
  </div>
  <div
  class="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-orange-500 transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-orange-500"
  ></div>
</a>