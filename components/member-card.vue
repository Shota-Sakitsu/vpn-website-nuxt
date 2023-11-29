<template>
	<MemberCardBase v-if="props.author.type.includes('homepageUrl')" :author="props.author" />
	<NuxtLink v-else :to="props.author.homepageUrl ?? '#'">
		<MemberCardBase :author="props.author" />
	</NuxtLink>
</template>

<script setup lang="ts">
import type {TypedAuthor} from "~/composables/Author";
import { MemberCardBase } from "#components";

const props = defineProps<{ author: TypedAuthor }>();
</script>
