<template>
	<div v-if="fetchedMembers == 'fetching'">
		Loading...
	</div>
	<ContentRenderer :value="page" v-else-if="fetchedMembers == 'done'">
		<div class="tw-border-2 tw-rounded-3xl tw-p-4 tw-my-4">
			<h1>{{ title }}</h1>
			<AuthorElement :author="author"/>
			<Tags :tags="tags"/>
		</div>
		<ContentRendererMarkdown :value="page" />
	</ContentRenderer>
	<div v-else>
		Not Found
	</div>
</template>

<script setup lang="ts">
import {useRoute} from "#imports";
import type {MembersJson} from "~/composables/MembersJson";
import type {TypedAuthor} from "~/composables/Author";
import type {MembersType} from "~/composables/MembersType";
import type {FetchStatus} from "~/composables/FetchStatus";

const fetchedMembers = toRef<FetchStatus>("fetching");
const route = useRoute();
const authorId = toRef<string>("");
const tags = toRef<string[]>([]);
const author = toRef<TypedAuthor>({type: ["name"], name: "Unknown"});
const title = toRef<string>("Untitled");

const { slug } = route.params;
const { data: page } = await useAsyncData("", () => queryContent().where({_path: `/posts/${slug.toString()}`}).findOne());
const members = await useFetch<MembersJson>("/api/typed-members");

if (page.value) {
	useContentHead(page.value);
	authorId.value = page.value["authorId"].toString();
	author.value = ((members.data.value ?? {members: {}}).members as MembersType)[`${authorId.value}`]
	tags.value = page.value["tags"];
	fetchedMembers.value = "done";
	title.value = page.value?.title ?? "Untitled";
} else {
	fetchedMembers.value = "error";
}
</script>