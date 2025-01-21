<script lang="ts">
	import gem from '$lib/assets/gem.png';
	import eligibilityData from '$lib/data/eligibilityData.json';
	import { ParticipateTimeline, Button, GradientAnimation } from './ui';

	let neurathonDate = '--/--/2025';
	let eligData2 = [
		{
			title: 'Registrations',
			des: '12',
			icon: 'fi fi-ss-team-check-alt'
		},
		{
			title: 'Team Size',
			des: '2-4 Memberes',
			icon: 'fi fi-ss-users-alt'
		},
		{
			title: 'Registration Deadline',
			des: '--',
			icon: 'fi fi-ss-clock'
		}
	];
</script>

<div class="overflow-hidden"></div>

<GradientAnimation>
	<div
		class="text-whit mt-[4.3rem] flex flex-col gap-5 gap-x-0 md:flex-row lg:flex-row xl:flex-row"
	>
		<div class="reg g-1 text-white md:w-[50%] lg:w-[50%] xl:w-[50%]">
			<div
				class="reg-container m-3 flex flex-col justify-center overflow-hidden rounded border border-gray-600 bg-gray-700/[0.7]"
			>
				<div class="event-info-card flex flex-row gap-5 px-5 pb-2 pt-5">
					<div class="icon h-full w-fit rounded bg-white/[0.6]">
						<img src={gem} class="max-w-16" alt="gem" />
					</div>
					<div class="event-name">
						<h1 class="font-LeagueSpartanFont text-[2rem] font-semibold">Neurathon</h1>
					</div>
				</div>
				<div class="event-des p-5 pt-1">
					<div class="event-date flex gap-1">
						<i class="fi fi-br-calendar-day"></i>
						<i class="text-[0.7rem]">{neurathonDate}</i>
					</div>
					<div class="event-text text-wrap">
						Neurathon is a distinguished machine learning hackathon designed for the development of
						creative AI solutions within an intensive, collaborative environment. Participants form
						teams to tackle challenges curated by the organizers, focusing on areas such as software
						engineering, data modeling, and algorithm optimization. This event serves as a dynamic
						platform for showcasing technical expertise, exchanging knowledge with industry peers,
						and designing impactful AI-driven products. Neurathon offers a unique opportunity for
						individuals passionate about machine learning to gain practical, hands-on experience
						while contributing to the advancement of artificial intelligence
					</div>
				</div>
				<div class="reg-button flex justify-start pb-2 pl-5">
					<Button title="Register" />
				</div>
			</div>
			<div
				class="eligibility-container m-3 flex flex-col gap-2 rounded border border-gray-600 bg-gray-700/[0.7] p-5"
			>
				<h1 class="eligibility-text-container font-LeagueSpartanFont text-xl font-semibold">
					Eligibility
				</h1>
				<div class="professions flex flex-row p-1 pl-0">
					{#each eligibilityData.data as i}
						<div
							class="prof mr-1 h-full w-fit rounded-xl bg-gray-900/[0.5] p-[0.375rem] px-[0.5rem] text-[0.7rem]"
						>
							{i.status}
						</div>
					{/each}
				</div>
				<div class="elig-datas flex flex-wrap">
					{#each eligData2 as item}
						<div class="team-regs mx-2 flex flex-row pb-2">
							<div
								class="team-reg-icon g-1 flex h-[2.5rem] w-[2.5rem] justify-center rounded bg-gray-900/[0.5] p-2"
							>
								<i class="${item.icon} translate-y-[0.15rem]"></i>
							</div>
							<div class="team-reg-det flex flex-col">
								<div class="team-reg-text px-1 font-LeagueSpartanFont text-[0.65rem]">
									{item.title}
								</div>
								<div class="team-reg-data mx-1 flex justify-start text-[0.85rem]">{item.des}</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div class="neurathon-info-container g-1 overflow-hidden md:w-[50%] lg:w-[50%] xl:w-[50%]">
			<div class="event-timeline m-3 rounded border border-gray-600 bg-gray-700/[0.5] pb-5">
				<ParticipateTimeline />
			</div>
		</div>
	</div>
</GradientAnimation>
