<template>
	<div class="tw-text-xs tw-rounded-full tw-border tw-border-gray-400 tw-p-0.5 tw-m-1 tw-max-w-min tw-max-h-min tw-whitespace-nowrap">
		#{{ props.tag }}
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{tag: string}>();
</script>