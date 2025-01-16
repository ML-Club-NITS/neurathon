<div class="rounded-xl p-4">
	<div class="mx-auto max-w-sm overflow-hidden rounded-lg text-white">
		<form method="POST" action="?/login">
			<div class="text-md mb-4 flex items-center gap-4">
				<label class="block font-bold text-white" for="email"> Email </label>
				<input
					class="focus:shadow-outline w-full appearance-none rounded border p-2 leading-tight text-black shadow focus:outline-none"
					name="email"
					type="email"
					id="email"
				/>
			</div>
			<div class="text-md mb-8 flex items-center gap-4">
				<label class="block font-bold text-white" for="password"> Password </label>
				<input
					class="focus:shadow-outline w-full appearance-none rounded border p-2 leading-tight text-black shadow focus:outline-none"
					name="password"
					type="password"
					id="password"
				/>
			</div>
			<div class="flex items-center justify-between">
				<button
					class="focus:shadow-outline rounded bg-orange-500 px-8 py-2 font-bold text-white hover:bg-orange-600 focus:outline-none"
				>
					Log In
				</button>
				<button
					class="inline-block w-fit align-baseline text-sm font-bold text-orange-500 hover:text-orange-600"
					formaction="?/resetPassword"
				>
					Forgot Password?
				</button>
			</div>
		</form>
	</div>
</div>
