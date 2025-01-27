<script lang="ts">
	import ml_vector from '$lib/assets/MLClub_vector_logo_large.svg';
</script>

<section class="flex w-full flex-col bg-gray-950 sm:grid sm:grid-cols-3">
	<div class="z-2 col-span-1 flex w-full items-center justify-center px-0 sm:py-4">
		<a
			class="h-24 w-52 scale-50 bg-cover bg-center bg-no-repeat sm:scale-100"
			href="https://www.mlclubnits.com/"
			aria-label="ML Club NITS website"
		>
			<img src={ml_vector} alt="mlclub_logo" />
		</a>
	</div>
	<div class="z-3 col-span-2 w-auto space-y-8 overflow-hidden px-0 py-8 sm:px-6 lg:px-8">
		<div class="flex justify-center space-x-6 sm:mt-8 md:space-x-6">
			<a href="https://www.facebook.com/mlclubNITS" class="text-gray-400 hover:text-gray-500">
				<span class="sr-only">Facebook</span>
				<svg
					class="h-5 w-5 sm:h-8 sm:w-8"
					aria-hidden="true"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						fill-rule="evenodd"
						d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
						clip-rule="evenodd"
					></path>
				</svg>
			</a>
			<a href="https://www.instagram.com/mlclub_nits/" class="text-gray-400 hover:text-gray-500">
				<span class="sr-only">Instagram</span>
				<svg
					class="h-5 w-5 sm:h-8 sm:w-8"
					aria-hidden="true"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						fill-rule="evenodd"
						d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
						clip-rule="evenodd"
					></path>
				</svg>
			</a>
			<a href="https://ml-club-nits.hashnode.dev" class="text-gray-400 hover:text-gray-500">
				<span class="sr-only">Blogs</span>
				<svg
					class="h-5 w-5 sm:h-8 sm:w-8"
					fill="currentColor"
					viewBox="0 0 48 48"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						d="M42.164,17.126L30.874,5.835c-3.781-3.781-9.967-3.781-13.748,0L5.836,17.126  c-3.781,3.781-3.781,9.967,0,13.748l11.291,11.291c3.781,3.781,9.967,3.781,13.748,0l11.291-11.291  C45.945,27.093,45.945,20.907,42.164,17.126z M24,31c-3.866,0-7-3.134-7-7c0-3.866,3.134-7,7-7s7,3.134,7,7  C31,27.866,27.866,31,24,31z"
						clip-rule="evenodd"
					></path>
				</svg>
			</a>
			<a
				href="https://www.linkedin.com/company/machine-learning-club-nits/"
				class="text-gray-400 hover:text-gray-500"
			>
				<span class="sr-only">LinkedIn</span>
				<svg
					class="h-5 w-5 sm:h-8 sm:w-8"
					fill="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M22.23 0H1.77C.79 0 0 .774 0 1.73v20.54C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.73V1.73C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9.037h3.56v11.415zM5.34 7.753c-1.14 0-2.06-.927-2.06-2.064 0-1.14.92-2.064 2.06-2.064s2.06.924 2.06 2.064c0 1.137-.92 2.064-2.06 2.064zm15.11 12.699h-3.56v-5.548c0-1.323-.026-3.023-1.84-3.023-1.84 0-2.12 1.438-2.12 2.923v5.648h-3.56V9.037h3.42v1.557h.049c.477-.903 1.638-1.853 3.37-1.853 3.6 0 4.27 2.37 4.27 5.457v6.254z"
					></path>
				</svg>
			</a>
			<a
				href="https://chat.whatsapp.com/KtcLQNl5cN8BoEgweOt5EH"
				class="text-gray-400 hover:text-gray-500"
			>
				<span class="sr-only">LinkedIn</span>
				<svg
					class="h-5 w-5 sm:h-8 sm:w-8"
					fill="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.55 4.17 1.6 6L0 24l6.26-1.64A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.26-1.44l-.38-.22-3.7.97.99-3.61-.24-.38A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.27-7.73c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.66.15-.19.29-.76.95-.93 1.14-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.43-.86-.77-1.44-1.72-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.6-.91-2.2-.24-.58-.49-.5-.66-.51h-.57c-.19 0-.48.07-.73.36-.25.29-.96.94-.96 2.29 0 1.34.99 2.64 1.13 2.83.14.19 1.95 2.98 4.73 4.18.66.29 1.18.46 1.58.59.66.21 1.26.18 1.73.11.53-.08 1.72-.7 1.96-1.38.24-.67.24-1.24.17-1.37-.07-.13-.26-.19-.55-.34z"
					></path>
				</svg>
			</a>
		</div>
		<div class="mt-8 text-center text-base font-semibold leading-6 text-gray-400">
			<a href="https://www.mlclubnits.com/">
				© 2025 ML CLUB NITS&nbsp;&nbsp; | &nbsp;&nbsp;Made by <span class="text-orange-500"
					>Machine Learning Club, NIT Silchar</span
				></a
			>
		</div>
	</div>
	<div class="absolute z-0">
		<!-- <FooterBG className="absolute inset-0" refresh={true}  /> -->
	</div>
</section>
