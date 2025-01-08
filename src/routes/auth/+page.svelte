<div class="h-screen bg-gray-200 py-20 p-4 md:p-20 lg:p-32">
    <div class="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg mx-auto p-6">
		<form method="POST" action="?/login">
			<div class="flex mb-4 gap-4">
				<label class="mb-2 block font-bold text-gray-700" for="username"> Name </label>
				<input
					class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
					name="name"
					type="text"
				/>
			</div>
			<div class="flex mb-4 gap-4">
				<label class="mb-2 block font-bold text-gray-700" for="username"> Email </label>
				<input
					class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
					name="email"
					type="email"
				/>
			</div>
			<div class="flex mb-6 gap-4">
				<label class="mb-2 block font-bold text-gray-700" for="password"> Phone No. </label>
				<input
					class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
					name="phone"
					type="tel"
				/>
			</div>
			<div class="flex mb-6 gap-4">
				<label class="mb-2 block font-bold text-gray-700" for="password"> Password </label>
				<input
					class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
					name="password"
					type="password"
				/>
			</div>
			<div class="flex items-center justify-between">
				<button
					class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
				>
					Log In
				</button>
				<button
					class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
					formaction="?/signup"
				>
					Sign Up
				</button>
				<a
					class="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
					href="/"
				>
					Forgot Password?
				</a>
			</div>
		</form>
	</div>
</div>
