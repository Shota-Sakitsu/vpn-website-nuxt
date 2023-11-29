<template>
	<NuxtLink v-if="props.author.type.includes('homepageUrl')" :to="props.author.homepageUrl">
		<div class="tw-max-w-min hover:tw-underline">
			<UnlinkedAuthorElement :author="props.author" />
		</div>
	</NuxtLink>
	<UnlinkedAuthorElement v-else :author="props.author" />
</template>

<script setup lang="ts">
import type {TypedAuthor} from "~/composables/Author";
import { UnlinkedAuthorElement } from "#components";

const props = defineProps<{ author: TypedAuthor }>()
</script>