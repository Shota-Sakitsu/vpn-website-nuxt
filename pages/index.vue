<template>
	<div>
		<h1 class="tw-h-48 tw-flex tw-justify-center tw-items-center">
			<i class="tw-drop-shadow">
				<span class="tw-text-6xl tw-text-blue-600">V</span>
				irtual&ensp;
				<span class="tw-text-6xl tw-text-blue-600">P</span>
				rogrammers'&ensp;
				<span class="tw-text-6xl tw-text-blue-600">N</span>
				etwork
			</i>
		</h1>
	</div>
	<div class="tw-text-green-600 tw-font-bold">
		<p>'''</p>
		<p>
			VPNはプログラミング・ITに関する活動をしているバーチャル存在のコミュニティです。
		</p>
		<p>
			技術系コラボの企画・お誘い || 技術系アウトプットの宣伝・共有
			などができます<br>
			メンバーは現在20名以上
		</p>
		<p>'''</p>
	</div>
	<Section title="Member">
		<div class="tw-flex tw-flex-wrap tw-justify-start tw-overflow-x-hidden tw-overflow-y-auto tw-max-h-64">
			<div v-if="fetchedMembers == 'done' && false">OK</div>
			<div v-if="fetchedMembers == 'fetching' && false">executing...</div>
			<div v-else class="tw-font-mono">
				Traceback (most recent call last):<br>
				&nbsp;&nbsp;&nbsp;&nbsp;File "index.vue", line 82, in setup<br>
				vpnsite.error.HTTPError: <span v-if="errorDesc && errorDesc != ''" v-text="errorDesc"></span><span v-else>Fetch Error</span>
			</div>
		</div>
	</Section>
	<Section title="Post">
		<div class="tw-overflow-y-auto">
			<NuxtLink :to="`/posts/`">
				<div class="tw-flex tw-flex-col tw-border-2 tw-rounded-xl tw-cursor-pointer">
					<div class="tw-m-2">
						<div class="tw-text-xl">{postData.title}</div>
						<div v-text="'AuthorElement author={postData.author}'"></div>
					</div>
					<Tags :tags="['TAG','HASH']" />
				</div>
			</NuxtLink>
		</div>
	</Section>
	<Section title="Contact">
		<p>
			// TODO: VPN問い合わせフォーム用意する
			<br>
			// フォームができるまでの間, VPNへのお問い合わせは,
			珠響そうきのツイッターにおねがいします
			<br>
			VPN参加希望の方は, 珠響そうきのツイッターまで！
			<NuxtLink :to="'https://twitter.com/tamayurasouki'">@tamayurasouki</NuxtLink>
		</p>
	</Section>
</template>

<script setup lang="ts">
import { Section } from "#components";
import type {MembersType} from "~/composables/MembersType";
import type {MembersJson} from "~/composables/MembersJson";
import type {FetchStatus} from "~/composables/FetchStatus";

const fetchedMembers = toRef<FetchStatus>("fetching");
const members = toRef<MembersType>({});
const errorDesc = toRef<string>("");

useFetch<MembersJson>("/api/typed-member")
	.then(receivedMembers => {
		fetchedMembers.value = "done";
		members.value = (receivedMembers.data.value ?? {members: {}}).members;
	})
	.catch(errorStatus => {
		fetchedMembers.value = "error";
		errorDesc.value = errorStatus.toString();
	})

useSeoMeta({
	title: "Hello, world!",
})
</script>