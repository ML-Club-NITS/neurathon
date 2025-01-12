/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				rp1: ["readyplayer", "monospace"],
				outfit: ["Outfit", "sans-serif"],
				lps: ["LeagueSpartan", "sans-serif"],
			},
		}
	},
	plugins: []
};
