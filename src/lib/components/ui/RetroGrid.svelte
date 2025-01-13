<script lang="ts">
	import { cn } from '$lib/utils';

	let className: string = '';
	export { className as class };
</script>

<div
	class={cn(
		'pointer-events-none absolute h-full w-full overflow-hidden opacity-60 [perspective:200px]',
		className
	)}
>
	<!-- Grid  -->
	<div class="absolute inset-0 [transform:rotateX(30deg)]">
		<div
			class={cn(
				'animate-grid',

				'[background-repeat:repeat] [background-size:50px_50px] [height:400vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw]',

				// Light Styles
				'[background-image:linear-gradient(to_right,rgba(0,0,0,0.3)_3px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0,0.3)_3px,transparent_0)]',

				// Dark styles
				'dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_3px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.2)_3px,transparent_0)]'
			)}
		></div>
	</div>

	<!-- Background Gradient -->
	<div
		class="absolute inset-0 bg-gradient-to-t from-[#56e6ff] to-transparent to-40% dark:from-black"
	></div>
</div>
