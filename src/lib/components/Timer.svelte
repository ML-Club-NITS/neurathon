<script>
	// count-down timer
	$effect(() => {
		let dest = new Date('apr 25, 2025 10:00:00').getTime();
		let x = setInterval(function () {
			let now = new Date().getTime();
			let diff = dest - now;

			// Check if the countdown has reached zero or negative
			if (diff <= 0) {
				clearInterval(x); // Stop the countdown
				return; // Exit the function
			}

			let days = String(Math.floor(diff / (1000 * 60 * 60 * 24)));
			let hours = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
			let minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
			let seconds = String(Math.floor((diff % (1000 * 60)) / 1000));

			if (Number(days) < 10) {
				days = `0${days}`;
			}
			if (Number(hours) < 10) {
				hours = `0${hours}`;
			}
			if (Number(minutes) < 10) {
				minutes = `0${minutes}`;
			}
			if (Number(seconds) < 10) {
				seconds = `0${seconds}`;
			}

			// Get elements by class name
			let countdownElements = document.getElementsByClassName('countdown-element');

			// Loop through the elements and update their content
			for (let i = 0; i < countdownElements.length; i++) {
				let className = countdownElements[i].classList[1]; // Get the second class name
				switch (className) {
					case 'days':
						countdownElements[i].innerHTML = days;
						break;
					case 'hours':
						countdownElements[i].innerHTML = hours;
						break;
					case 'minutes':
						countdownElements[i].innerHTML = minutes;
						break;
					case 'seconds':
						countdownElements[i].innerHTML = seconds;
						break;
					default:
						break;
				}
			}
		}, 1000);
	});
</script>

<div class="count-down-main flex h-auto w-full items-center justify-center gap-1.5">
	<div class="timer">
		<div
			class="flex aspect-square min-w-[80px] flex-col items-center justify-center gap-0 rounded-xl border border-indigo-600 px-1.5 py-1.5"
		>
			<span
				class="countdown-element days font-manrope text-center text-2xl font-semibold text-indigo-600"
			></span>
			<p class="font-inter w-full text-center text-sm font-normal capitalize text-indigo-600">
				days
			</p>
		</div>
	</div>
	<h3 class="font-manrope text-2xl font-semibold text-gray-900">:</h3>
	<div class="timer">
		<div
			class="flex aspect-square min-w-[80px] flex-col items-center justify-center gap-0 rounded-xl border border-indigo-600 px-1.5 py-1.5"
		>
			<span
				class="countdown-element hours font-manrope text-center text-2xl font-semibold text-indigo-600"
			></span>
			<p class="font-inter w-full text-center text-sm font-normal capitalize text-indigo-600">
				Hour
			</p>
		</div>
	</div>
	<h3 class="font-manrope text-2xl font-semibold text-gray-900">:</h3>
	<div class="timer">
		<div
			class="flex aspect-square min-w-[80px] flex-col items-center justify-center gap-0 rounded-xl border border-indigo-600 px-1.5 py-1.5"
		>
			<span
				class="countdown-element minutes font-manrope text-center text-2xl font-semibold text-indigo-600"
			></span>
			<p class="font-inter w-full text-center text-sm font-normal capitalize text-indigo-600">
				Minutes
			</p>
		</div>
	</div>
	<h3 class="font-manrope text-2xl font-semibold text-gray-900">:</h3>
	<div class="timer">
		<div
			class="flex aspect-square min-w-[80px] flex-col items-center justify-center gap-0 rounded-xl border border-indigo-600 px-1.5 py-1.5"
		>
			<span
				class="countdown-element seconds sec font-manrope text-center text-2xl font-semibold text-indigo-600"
			></span>
			<p class="font-inter w-full text-center text-sm font-normal capitalize text-indigo-600">
				Seconds
			</p>
		</div>
	</div>
</div>
