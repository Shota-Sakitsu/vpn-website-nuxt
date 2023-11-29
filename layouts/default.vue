<template>
	<header class="p-2">
		<div class="tw-flex tw-flex-row tw-justify-between tw-max-w-screen-xl tw-container tw-mx-auto tw-p-2">
			<NuxtLink to="/">Virtual Programmers' Network</NuxtLink>
			<nav class="tw-flex tw-flex-row tw-justify-end" />
		</div>
		<hr />
	</header>
	<main class="tw-max-w-screen-2xl tw-container tw-mx-auto tw-my-2 tw-p-5 tw-prose dark:tw-prose-invert">
		<slot />
	</main>
	<footer class="tw-flex tw-flex-col tw-mx-0 tw-my-16 tw-h-12">
		<hr />
		<div class="tw-flex tw-flex-grow tw-items-center tw-p-1 tw-justify-center">
			<p>
				&copy; 2021, 2023
				<NuxtLink to="https://github.com/VirtualProgrammersNetwork/">
					Virtual Programmers
				</NuxtLink>
			</p>
		</div>
	</footer>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

useServerHead({
	htmlAttrs: {
		lang: "ja",
		prefix: "og: http://ogp.me/ns# article: http://ogp.me/ns/article# website: http://ogp.me/ns/website#",
	},
})
useSeoMeta({
	title: "VPN Official Web",
	titleTemplate: "%s | VPN",
	ogType: "website",
	ogLocale: "ja_JP",
	ogSiteName: "Virtual Programmer's Network",
})

const themeChange = () => {
	if (process.client) {
		const targetElement = document.documentElement;
		switch (colorMode.value) {
			case "dark":
				targetElement.dataset.bsTheme = "dark";
				break;
			case "light":
			default:
				targetElement.dataset.bsTheme = "light";
		}
	}
};

watch(colorMode, themeChange);
themeChange();
</script>