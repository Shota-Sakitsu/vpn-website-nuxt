<template>
	<div class="m-0 p-0">
		<NuxtImg v-if="props.iconPath" :src="props.iconPath" alt="icon" :width="props.size" :height="props.size" />
		<div v-else class="tw-m-0 tw-rounded-full tw-bg-gray-400" :style="{width: `${props.size}px`, height: `${props.size}px`}">
			&nbsp;
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{ iconPath?: string, size: string | number }>();
</script>

<style scoped>
img {
	margin: 0;
	display: inline-block;
	border-radius: 9999px;
}
</style>