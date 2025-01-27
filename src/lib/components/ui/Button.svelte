<script>
	import { goto } from '$app/navigation';

	export let title;
	export let path = '/auth';

	function toRegister() {
		goto(path);
	}
</script>

<div class="flex h-auto items-center justify-center">
	<div class="group relative">
		<button
			class="relative z-10 inline-block cursor-pointer rounded-xl bg-black to-orange-500 p-px font-semibold leading-6 text-white shadow-2xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
			onclick={toRegister}
		>
			<span
				class="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 via-orange-300 to-yellow-300 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
			></span>

			<span class="relative z-10 block rounded-xl bg-gray-950 px-6 py-3">
				<div class="relative z-10 flex items-center space-x-2">
					<span class="text-md transition-all duration-500 group-hover:translate-x-1">{title}</span>
					<svg
						class="h-6 w-6 transition-transform duration-500 group-hover:translate-x-1"
						data-slot="icon"
						aria-hidden="true"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							clip-rule="evenodd"
							d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
							fill-rule="evenodd"
						></path>
					</svg>
				</div>
			</span>
		</button>
	</div>
</div>
