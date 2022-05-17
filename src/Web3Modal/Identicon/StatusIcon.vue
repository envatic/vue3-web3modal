<script >
	import { computed } from "@vue/runtime-core";
	import { useActiveWeb3Vue } from "../hooks";
	import Identicon from "./Identicon";
	export default {
		components: {
			Identicon,
		},
		setup() {
			const { providerInfo: provider } = useActiveWeb3Vue();
			const isInjected = computed(() => provider.value.id == "injected");
			return {
				provider,
				isInjected,
			};
		},
	};
</script>
<template>
	<Identicon v-if="isInjected" />
	<img
		v-else
		:src="provider.logo"
		:alt="provider.name"
	/>
</template>
