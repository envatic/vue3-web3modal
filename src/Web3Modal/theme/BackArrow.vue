<template>
	<BackArrowLink :to="to">
		<ArrowLeftIcon></ArrowLeftIcon>
	</BackArrowLink>
</template>
<script>
	import BackArrowLink from "./theme";
	import { ArrowLeftIcon } from "@/Web3Modal/assets/icons";
	export default {
		components: {
			BackArrowLink,
			ArrowLeftIcon,
		},
		props: {
			to: {
				type: String,
				required: true,
			},
		},
	};
</script>
