<script>
	import { onMount } from 'svelte';
	import Faq1 from './Faq1.svelte';
	import faqData from '$lib/data/faqs.json';

	onMount(() => {
		document.querySelectorAll('.accordion-button').forEach((button) => {
			button.addEventListener('click', () => {
				const faqId = button.getAttribute('data-faq');
				let content;
				if (faqId) {
					content = document.getElementById(faqId);
				}
				const expanded = button.getAttribute('aria-expanded') === 'true';

				// Close all open accordions
				document
					.querySelectorAll('.accordion-content')
					.forEach((item) => item.classList.add('hidden'));
				document
					.querySelectorAll('.accordion-button')
					.forEach((btn) => btn.setAttribute('aria-expanded', 'false'));

				// Toggle the clicked accordion
				if (!expanded) {
					if (content) {
						content.classList.remove('hidden');
					}
					button.setAttribute('aria-expanded', 'true');
				}
			});
		});
	});
	
	
</script>

<section class="my-12 py-8 text-center text-white md:py-12 xl:py-16">
	<span
		class="mb-12 inline-flex w-fit animate-text-gradient text-wrap bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] bg-clip-text p-2 text-center text-4xl font-bold text-transparent sm:text-5xl md:text-6xl"
	>
		FAQs
	</span>
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
			<div>
				<h2 class="mb-4 text-3xl font-bold md:text-4xl">
					How can we help you? Unlocking possibilities for your web hosting FAQs answered.
				</h2>
				<p class="mb-6 text-lg text-gray-400">
					We hope you have found an answer to your question. If you need any help, please search
					your query on our Support Center or contact us via email.
				</p>
			</div>
			<div>
				<div class="space-y-0">
					{#each faqData.faqs as faq}
						<div class="rounded-lg bg-gray shadow-lgn">
							<Faq1 question={faq.question} answer={faq.answer} />
						</div>
					{/each}
					
				</div>
			</div>
		</div>
	</div>
</section>
