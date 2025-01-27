<script lang="ts">
	// import gem from '$lib/assets/gem.png';
	import eligibilityData from '$lib/data/eligibilityData.json';
	import { ParticipateTimeline, Button, GradientAnimation, BrochureBtn } from './ui';

	let { data } = $props();

	let neurathonDate = '13th February - 23rd March, 2025';
	let eligData2 = [
		{
			title: 'Registrations',
			des: data?.data[0].count ?? '-',
			icon: 'fi fi-ss-team-check-alt'
		},
		{
			title: 'Team Size',
			des: '1-4 Members',
			icon: 'fi fi-ss-users-alt'
		},
		{
			title: 'Registration Deadline',
			des: '12/02/2025',
			icon: 'fi fi-ss-clock'
		}
	];
</script>

<GradientAnimation>
	<div class="flex h-full w-full flex-col">
		<div class="mt-[4.5rem]"></div>
		<div class="flex flex-col gap-1 p-2 text-white lg:flex-row">
			<div class="reg g-1 w-full text-white lg:sticky lg:w-1/3">
				<div
					class="reg-container m-3 flex flex-col justify-center overflow-hidden rounded border border-gray-600 bg-gray-700/[0.7]"
				>
					<div class="event-info-card flex flex-row gap-5 px-5 pb-2 pt-5">
						<div class="event-name">
							<h1 class="font-LeagueSpartanFont text-[2rem] font-semibold">Neurathon</h1>
						</div>
					</div>
					<div class="event-des p-5 pt-1">
						<div class="event-date mb-1 flex items-center gap-1">
							<i class="fi fi-br-calendar-day text-sm"></i>
							<i class="text-[0.8rem]">{neurathonDate}</i>
						</div>
						<div class="event-text text-wrap py-2 text-[0.95rem] text-slate-300">
							Neurathon is a premier machine learning hackathon where teams collaborate to solve
							challenges in software engineering, data modeling, and algorithm optimization. It
							provides a platform to showcase skills, exchange knowledge, and create impactful AI
							solutions, offering hands-on experience for advancing artificial intelligence.
						</div>
					</div>
					<div class="professions flex flex-row px-4 py-2">
						{#each eligibilityData.data as i}
							<div
								class="prof mr-1 h-full w-fit rounded-xl bg-gray-900/[0.5] p-[0.375rem] px-[0.5rem] text-[0.7rem]"
							>
								{i.status}
							</div>
						{/each}
					</div>
					<div class="elig-datas flex-col flex-wrap justify-between px-4 py-2">
						{#each eligData2 as item}
							<div class="team-regs mr-5 flex flex-row pb-2">
								<div
									class="team-reg-icon g-1 flex h-[2.5rem] w-[2.5rem] justify-center rounded bg-gray-900/[0.5] p-2"
								>
									<i class="${item.icon} translate-y-[0.15rem]"></i>
								</div>
								<div class="team-reg-det flex flex-col">
									<div
										class="team-reg-text px-1 font-LeagueSpartanFont text-[0.75rem] text-slate-300"
									>
										{item.title}
									</div>
									<div class="team-reg-data mx-1 flex justify-start text-[0.85rem]">{item.des}</div>
								</div>
							</div>
						{/each}
					</div>
					<div class="reg-button flex flex-wrap justify-start gap-4 py-4 pl-5">
						<Button title="Register" />
						<BrochureBtn>Download Brochure</BrochureBtn>
					</div>
				</div>
				<!-- <div
					class="eligibility-container m-3 flex flex-col gap-3 rounded border border-gray-600 bg-gray-700/[0.7] p-5"
				>
					<h1 class="eligibility-text-container font-LeagueSpartanFont text-3xl font-bold">
						Eligibility
					</h1>
					
				</div> -->
			</div>

			<div class="neurathon-info-container g-1 mb-3 h-full w-full lg:w-2/3">
				<div class="event-timeline m-3 rounded border border-gray-600 bg-gray-700/[0.5] pb-5">
					<ParticipateTimeline />
				</div>
			</div>
		</div>
	</div>
</GradientAnimation>
