import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			orange: '#ff9e64',
			yellow: '#e0af68',
			green: '#9ece6a',
			cyan: '#7dcfff',
			blue: '#7aa2f7',
			purple: '#bb9af7',
			pink: '#ff007c',
			red: '#f7768e',
			gray: '#565f89',
			fg: '#a9b1d6',
			bg: '#1a1b26',
			'bg-alt': '#24283b',
			unknown: '#ffffff'
		},
		extend: {
			typography: ({ theme }) => ({
				tokyonight: {
					css: {
						'--tw-prose-body': theme('colors.fg'),
						'--tw-prose-headings': theme('colors.purple'),
						'--tw-prose-links': theme('colors.blue'),
						'--tw-prose-bold': theme('colors.blue'),
						a: {
							color: 'var(--tw-prose-links)',
							textDecoration: 'none'
						}
					}
				}
			})
		}
	},

	plugins: [typography]
} satisfies Config;
