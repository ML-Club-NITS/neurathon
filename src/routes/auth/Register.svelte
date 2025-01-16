<div class="rounded-xl p-4">
	<div class="text-whte mx-auto max-w-sm overflow-hidden rounded-lg">
		<form method="POST" action="?/register">
			<div class="text-md mb-4 flex items-center gap-4">
				<label class="flex font-bold text-white" for="username"> Name </label>
				<input
					class="focus:shadow-outline w-full appearance-none rounded border px-2 py-2 leading-tight text-black shadow focus:outline-none"
					name="name"
					type="text"
					id="username"
				/>
			</div>
			<div class="text-md mb-4 flex items-center gap-4">
				<label class="flex font-bold text-white" for="email"> Email </label>
				<input
					class="focus:shadow-outline w-full appearance-none rounded border px-2 py-2 leading-tight text-black shadow focus:outline-none"
					name="email"
					type="email"
					id="email"
				/>
			</div>
			<div class="text-md mb-4 flex items-center gap-4">
				<label class="flex font-bold text-white" for="phone"> Phone No. </label>
				<input
					class="focus:shadow-outline w-full appearance-none rounded border px-2 py-2 leading-tight text-black shadow focus:outline-none"
					name="phone"
					type="tel"
					id="phone"
				/>
			</div>
			<div class="text-md mb-8 flex items-center gap-4">
				<label class="flex font-bold text-white" for="password"> Password </label>
				<input
					class="focus:shadow-outline w-full appearance-none rounded border px-2 py-2 leading-tight text-black shadow focus:outline-none"
					name="password"
					type="password"
					id="password"
				/>
			</div>
			<div class="flex items-center justify-between">
				<button
					class="focus:shadow-outline rounded bg-orange-500 px-8 py-2 font-bold text-white hover:bg-orange-600 focus:outline-none"
				>
					Sign Up
				</button>
			</div>
		</form>
	</div>
</div>
