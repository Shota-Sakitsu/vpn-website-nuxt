<template>
	<div class="m-0">
		<h2 class="m-0">
			def <span class="tw-text-blue-600" v-text="props.title"></span>():
		</h2>
		<div class="pl-14">
			<slot>
				<p>Coming soon...</p>
			</slot>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps(["title"]);
</script>