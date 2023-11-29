<template>
	<div class="tw-min-w-max tw-flex tw-flex-row">
		<div class="tw-flex tw-justify-center tw-m-1" v-if="props.author.type.includes('iconPath')">
			<Icon :iconPath="props.author.iconPath" size="32"/>
		</div>
		<div class="tw-flex tw-justify-center tw-items-center">
			{{ props.author.name }}
			<span v-if="props.author.type.includes('alphabetName')">
				&nbsp;&nbsp;({{ props.author.alphabetName }})
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import type {TypedAuthor} from "~/composables/Author";

const props = defineProps<{ author: TypedAuthor }>();
</script>