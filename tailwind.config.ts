import type {Config} from 'tailwindcss'
import typography from '@tailwindcss/typography';

export default {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
	],
	theme: {
		extend: {},
	},
	plugins: [
		typography
	],
	prefix: "tw-",
	darkMode: "class",
} satisfies Config

