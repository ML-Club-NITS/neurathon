<div class="mx-auto mt-36 w-fit">
	<form method="POST" action="?/updatePassword">
		<div class="text-md mb-8 flex items-center gap-4">
			<label class="block font-bold text-white" for="new_password"> Password </label>
			<input
				class="focus:shadow-outline w-full appearance-none rounded border p-2 leading-tight text-black shadow focus:outline-none"
				name="new_password"
				type="password"
				id="new_password"
			/>
		</div>
		<div class="flex items-center justify-between">
			<button
				class="focus:shadow-outline rounded bg-orange-500 px-8 py-2 font-bold text-white hover:bg-orange-600 focus:outline-none"
			>
				Update password
			</button>
		</div>
	</form>
</div>
