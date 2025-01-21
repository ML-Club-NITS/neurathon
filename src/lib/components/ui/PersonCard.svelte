<script lang="ts">
	
    
    export let user;

	// let user = {
	// 	name: 'test',
    //     image: userProfile,
    //     role: 'Software Developer',
    //     about: 'Lorem50',
    //     contact: {
    //         email: 'test',
    //         phone: '9954722871',
    //         location: 'San Francisco, CA'
    //     }
    // };
</script>

<div
    class="animate-fade-in w-full max-w-4xl rounded-xl border border-gray-700 bg-opacity-50 bg-gradient-to-r from-black via-gray-900 to-gray-800 p-8 text-white shadow-2xl backdrop-blur-sm transition-all duration-300"
>
    <div class="flex flex-col md:flex-row">
		<div class="mb-8 text-center md:mb-0 md:w-1/3">
			<img
				src={user.image}
				alt=""
				class="mx-auto mb-4 h-[150px] md:h-auto lg:h-auto xl:h-auto w-auto rounded-full border-4 border-gray-700 transition-transform duration-300 hover:scale-105"
			/>
			<h1 class="mb-2 text-2xl font-bold">{user.name}</h1>
			<p class="">{user.role}</p>
		</div>
		<div class="md:w-2/3 md:pl-8">
			<div class="about-user text-justify">
				<h2 class="mb-4 text-xl font-semibold">About Me</h2>
				<p class="mb-6 text-gray-300">
					{user.about}
				</p>
			</div>
			<div class="contact-user text-left">
				<h2 class="mb-4 text-xl font-semibold">Contact Information</h2>
                <div class="contact-info-container flex flex-col justify-center">
                    <ul class="space-y-2 text-gray-300 w-fit">
                        <li class="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="mr-2 h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            {user.contact.email}
                        </li>
                        <li class="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="mr-2 h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                                />
                            </svg>
                            {user.contact.phone}
                        </li>
                        <li class="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="mr-2 h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            Cachra
                        </li>
                    </ul>
                </div>
				
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	.animate-fade-in {
		animation: fadeIn 0.5s ease-out forwards;
	}
</style>
