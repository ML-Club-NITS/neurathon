<script>
    import imgsrc from '$lib/assets/MLClub_vector_logo_large.svg';
</script>

<nav
    class="fixed start-0 top-0 z-20 sm:rounded-none rounded-sm w-full border-b border-gray-200 bg-white bg-opacity-30 backdrop-filter backdrop-blur-md dark:border-gray-600 dark:bg-gray-900 dark:bg-opacity-30"
>
    <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={imgsrc} class="h-8" alt="MLClub NITS Logo" />
        </a>
        <div class="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
            <button
                type="button"
                class="relative rounded-xl bg-orange-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >Register</button
            >
            <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
            >
                <span class="sr-only">Open main menu</span>
                <svg
                    class="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15"
                    />
                </svg>
            </button>
        </div>
        <div
            class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="navbar-sticky"
        >
            <ul
                class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-6 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-opacity-30 md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 dark:bg-opacity-30 md:dark:bg-opacity-30"
            >
                <li>
                    <a
                        href="#"
                        class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                        >About</a
                    >
                </li>
                <li>
                    <a
                        href="#"
                        class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                        >Sponsors</a
                    >
                </li>
                <li>
                    <a
                        href="#"
                        class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                        >Timeline</a
                    >
                </li>
                <li>
                    <a
                        href="#"
                        class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                        >Prizes</a
                    >
                </li>
                <li>
                    <a
                        href="#"
                        class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                        >FAQs</a
                    >
                </li>
            </ul>
        </div>
    </div>
</nav>
