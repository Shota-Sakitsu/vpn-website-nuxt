// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	devtools: {enabled: false},
	css: [
		"bootstrap/scss/bootstrap.scss",
		"bootstrap-icons/font/bootstrap-icons.scss",
		"~/assets/css/main.less",
	],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	modules: [
		'@nuxt/content',
		'@nuxtjs/color-mode',
		"@nuxt/image",
	],
	build: {
		transpile: [
			"bootstrap",
		],
	},
	content: {
		markdown: {
			mdc: true,
			remarkPlugins: {
				"remark-emoji": {
					emoticon: true,
				},
				"remark-toc": {
					maxDepth: 2,
					heading: "((table|index)[ -]of[ -])?contents?|toc|index|目次",
				},
				"remark-math": {
					singleDollarTextMath: false,
				},
				"remark-gfm": {
					singleTilde: false,
				},
			},
			rehypePlugins: [
				"rehype-external-links",
				"rehype-slug",
			],
		},
		highlight: {
			theme: {
				default: "github-light",
				dark: "github-dark",
			},
			preload: [
				'diff',
				'json',
				'js',
				'ts',
				'css',
				'shell',
				'html',
				'md',
				'yaml',
				'py',
			]
		},
		sources: {
			blogposts: {
				driver: "github",
				prefix: "/posts",
				repo: "Shota-Sakitsu/vpn-website-content",
				branch: "master",
				dir: "posts",
			},
		},
	},
	colorMode: {
		preference: 'system',
		fallback: 'light',
		hid: 'nuxt-color-mode-script',
		globalName: '__NUXT_COLOR_MODE__',
		componentName: 'ColorScheme',
		classPrefix: 'tw-',
		classSuffix: '',
		storageKey: 'nuxt-color-mode',
	},
});