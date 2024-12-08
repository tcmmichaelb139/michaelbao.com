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
						'--tw-prose-lead': theme('colors.unknown'),
						'--tw-prose-links': theme('colors.purple'),
						'--tw-prose-bold': theme('colors.amber[900]'),
						'--tw-prose-counters': theme('colors.amber[600]'),
						'--tw-prose-bullets': theme('colors.amber[400]'),
						'--tw-prose-hr': theme('colors.amber[300]'),
						'--tw-prose-quotes': theme('colors.amber[900]'),
						'--tw-prose-quote-borders': theme('colors.amber[300]'),
						'--tw-prose-captions': theme('colors.amber[700]'),
						'--tw-prose-code': theme('colors.amber[900]'),
						'--tw-prose-pre-code': theme('colors.amber[100]'),
						'--tw-prose-pre-bg': theme('colors.amber[900]'),
						'--tw-prose-th-borders': theme('colors.amber[300]'),
						'--tw-prose-td-borders': theme('colors.amber[200]'),
						'--tw-prose-invert-body': theme('colors.amber[200]'),
						'--tw-prose-invert-headings': theme('colors.white'),
						'--tw-prose-invert-lead': theme('colors.amber[300]'),
						'--tw-prose-invert-links': theme('colors.white'),
						'--tw-prose-invert-bold': theme('colors.white'),
						'--tw-prose-invert-counters': theme('colors.amber[400]'),
						'--tw-prose-invert-bullets': theme('colors.amber[600]'),
						'--tw-prose-invert-hr': theme('colors.amber[700]'),
						'--tw-prose-invert-quotes': theme('colors.amber[100]'),
						'--tw-prose-invert-quote-borders': theme('colors.amber[700]'),
						'--tw-prose-invert-captions': theme('colors.amber[400]'),
						'--tw-prose-invert-code': theme('colors.white'),
						'--tw-prose-invert-pre-code': theme('colors.amber[300]'),
						'--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
						'--tw-prose-invert-th-borders': theme('colors.amber[600]'),
						'--tw-prose-invert-td-borders': theme('colors.amber[700]')
					}
				}
			})
		}
	},

	plugins: [typography]
} satisfies Config;
