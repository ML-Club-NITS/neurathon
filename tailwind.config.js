/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				shine: 'shine 2s linear infinite',
				marquee: 'marquee var(--duration) linear infinite',
				'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
				'text-gradient': 'text-gradient 3s linear infinite',
				grid: 'grid 15s linear infinite',
				shimmer: 'shimmer 8s infinite',
				'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
			},
			keyframes: {
				shine: {
					from: { backgroundPosition: '0 0' },
					to: { backgroundPosition: '-200% 0' }
				},
				marquee: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(calc(-100% - var(--gap)))' }
				},
				'marquee-vertical': {
					from: { transform: 'translateY(0)' },
					to: { transform: 'translateY(calc(-100% - var(--gap)))' }
				},
				'text-gradient': {
					to: {
						backgroundPosition: '200% center'
					}
				},
				grid: {
					'0%': { transform: 'translateY(-30%)' },
					'100%': { transform: 'translateY(0)' }
				},
				moveTogether: {
					'0%': { transform: 'translateX(50px)', opacity: '0', filter: 'blur(10px)' },
					'100%': { transform: 'translateX(0)', opacity: '1', filter: 'blur(0)' }
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				animation: {
					'fade-in': 'fadeIn 1s forwards',
					'move-together': 'moveTogether 1s ease-in-out forwards'
				},
				shimmer: {
					'0%, 90%, 100%': {
						'background-position': 'calc(-100% - var(--shimmer-width)) 0'
					},
					'30%, 60%': {
						'background-position': 'calc(100% + var(--shimmer-width)) 0'
					}
				},
				'shine-pulse': {
					'0%': {
						'background-position': '0% 0%'
					},
					'40%': {
						'background-position': '50% 70%'
					},
					'80%': {
						'background-position': '100% 100%'
					},
					to: {
						'background-position': '0% 0%'
					}
				},
				'border-beam': {
					'100%': {
						'offset-distance': '100%',
					},
				},
			}
		}
	},
	plugins: ['tailwindcss-motion'],
	extend: {
		fontFamily: {
			rp1: ['readyplayer', 'monospace'],
			outfit: ['Outfit', 'sans-serif'],
			lps: ['LeagueSpartan', 'sans-serif']
		}
	}
};
