<script>
	import { Accordion } from './ui';

	import data from '$lib/data/faqs.json';
</script>

<section class="my-12 py-8 text-center text-white md:py-12 xl:py-16">
	<span
		class="mb-12 inline-flex w-fit animate-text-gradient text-wrap bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] bg-clip-text p-2 text-center text-4xl font-bold text-transparent sm:text-5xl md:text-6xl"
	>
		FAQs
	</span>
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
			<div class="flex flex-col items-center">
				<h2 class="mb-4 text-3xl font-bold md:text-4xl">How can we help you today?</h2>
				<p class="text-lg text-gray-400">
					We hope you have found an answer to your question. If you need any help, please search
					your query on our Support Center or contact us via email.
				</p>
				<img src="faq.jpeg" alt="" class="w-60 rounded-lg" />
			</div>
			<div>
				<div class="space-y-0">
					{#each data.faqs as faq}
						<div class="bg-gray shadow-lgn rounded-lg">
							<Accordion>
								<span slot="head">{faq.question}</span>
								<div slot="details">
									<p>
										{faq.answer}
									</p>
								</div>
							</Accordion>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
