<div class="p-4">
	<div class="w-full overflow-hidden">
		<form method="POST" action="?/register">
			<div class="text-md mb-4 flex items-center gap-4">
				<label class="flex font-bold text-slate-300" for="username"> Name </label>
				<input
					class="focus:shadow-outline w-full appearance-none rounded border border-slate-400 p-2 leading-tight bg-slate-700 opacity-80 text-slate-400 shadow focus:outline-none"
					name="name"
					type="text"
					id="username"
					placeholder="full name"
				/>
			</div>
			<div class="text-md mb-4 flex items-center gap-4">
				<label class="flex font-bold text-slate-300" for="email"> Email </label>
				<input
					class="focus:shadow-outline w-full appearance-none rounded border border-slate-400 p-2 leading-tight bg-slate-700 opacity-80 text-slate-400 shadow focus:outline-none"
					name="email"
					type="email"
					id="email"
					placeholder="abc@mail.com"
				/>
			</div>
			<div class="text-md mb-4 flex items-center gap-4">
				<label class="flex font-bold text-slate-300" for="phone"> Phone No. </label>
				<input
					class="focus:shadow-outline w-full appearance-none rounded border border-slate-400 p-2 leading-tight bg-slate-700 opacity-80 text-slate-400 shadow focus:outline-none"
					name="phone"
					type="tel"
					id="phone"
					placeholder="+91 99******00"
				/>
			</div>
			<div class="text-md mb-8 flex items-center gap-4">
				<label class="flex font-bold text-slate-300" for="password"> Password </label>
				<input
					class="focus:shadow-outline w-full appearance-none rounded border border-slate-400 p-2 leading-tight bg-slate-700 opacity-80 text-slate-400 shadow focus:outline-none"
					name="password"
					type="password"
					id="password"
					placeholder="********"
				/>
			</div>
			<div class="flex items-center justify-center">
				<button
					class="w-full focus:shadow-outline rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-600 focus:outline-none"
				>
					Sign Up
				</button>
			</div>
		</form>
	</div>
</div>
