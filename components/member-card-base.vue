<template>
	<div class="tw-w-80 tw-min-w-min tw-m-1 tw-p-2 tw-border tw-rounded-xl">
		<div class="tw-flex tw-flex-wrap">
			<Icon :iconPath="props.author.iconPath" size="80" />
			<div class="tw-flex tw-flex-col tw-justify-center ml-1">
				<div class="tw-text-3xl tw-font-bold tw-min-w-max tw-text-center">
					{{ props.author.name }}
				</div>
				<div class="tw-text-sm tw-text-gray-600 tw-text-center" v-if="props.author.type.includes('alphabetName')">
					<i>{{ props.author.alphabetName }}</i>
				</div>
			</div>
		</div>
		<Tags v-if="props.author.type.includes('favs')" :tags="props.author.favs ?? []" />
	</div>
</template>

<script setup lang="ts">
import {TypedAuthor} from "~/composables/Author";
import { Icon, Tags } from "#components";

const props = defineProps<{ author: TypedAuthor }>();
</script>