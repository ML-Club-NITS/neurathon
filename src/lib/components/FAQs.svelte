<script>
	import { Accordion } from './ui';

	import data from '$lib/data/faqs.json';
</script>

<section id="faqs" class="pb-16 pt-24 text-center text-white md:pb-20 md:pt-28 xl:py-28">
	<span
		class="mb-12 inline-flex w-fit animate-text-gradient text-wrap bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] bg-clip-text p-2 text-center text-2xl font-bold text-transparent md:text-3xl lg:text-5xl 2xl:text-8xl"
	>
		FAQs
	</span>
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
			<div class="flex flex-col items-center lg:sticky lg:top-[calc(50vh-100px)] lg:h-max">
				<h2 class="mb-4 text-base font-bold md:text-lg lg:text-2xl 2xl:text-5xl">
					How can we help you today?
				</h2>
				<p class="text-sm text-gray-400 md:text-base lg:text-lg 2xl:text-4xl">
					We hope you have found an answer to your question. If you need any help, please search
					your query on our Support Center or contact us via email.
				</p>
				<img src="faq.jpeg" alt="" class="w-60 rounded-lg" />
			</div>
			<div>
				<div class="space-y-0">
					{#each data.faqs as faq}
						<div class="bg-gray shadow-lgn rounded-lg text-sm md:text-base xl:text-lg 2xl:text-xl">
							<Accordion>
								<span slot="head">{faq.question}</span>
								<div slot="details">
									<p class="text-base">
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
