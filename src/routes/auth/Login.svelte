<div class="p-4">
	<div class="w-full overflow-hidden">
		<form method="POST" action="?/login">
			<div class="text-md mb-4 flex items-center gap-4">
				<label class="block font-bold text-slate-300" for="email"> Email </label>
				<input
					class="focus:shadow-outline w-full appearance-none rounded border border-slate-400 p-2 leading-tight bg-slate-700 opacity-80 text-slate-400 shadow focus:outline-none"
					name="email"
					type="email"
					id="email"
					placeholder="abc@mail.com"
				/>
			</div>
			<div class="text-md mb-8 flex items-center gap-4">
				<label class="block font-bold text-slate-300" for="password"> Password </label>
				<input
					class="focus:shadow-outline w-full appearance-none rounded border border-slate-400 p-2 leading-tight bg-slate-700 opacity-80 text-slate-400 shadow focus:outline-none"
					name="password"
					type="password"
					id="password"
					placeholder="********"
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
