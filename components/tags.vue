<template>
	<div class="tw-flex tw-flex-wrap">
		<Tag v-for="(tag, key) in props.tags" :key="key" :tag="tag" />
	</div>
</template>

<script setup lang="ts">
import { Tag } from "#components";

const props = defineProps<{tags: string[]}>();
</script>