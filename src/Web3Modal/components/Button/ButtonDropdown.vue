<template>
	<ButtonPrimary :disabled="disabled">
		<RowBetween>
			<div :style="{ display: 'flex', alignItems: 'center' }">
				<slot/>
			</div>
			<ChevronDown :size="24" />
		</RowBetween>
	</ButtonPrimary>
</template>
<script>
	import { ChevronDownIcon as ChevronDown } from "vue3-feather";
	import { ButtonPrimary } from "../Button";
	export default {
		components: {
			ButtonPrimary,
			ChevronDown,
		},
		props: {
			disabled: {
				type: Boolean,
				default: false,
			},
		},
	};
</script>