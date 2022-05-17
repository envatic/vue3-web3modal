<template>
	<ButtonGray
		:disabled="disabled"
		:style="{ borderRadius: '20px' }"
	>
		<RowBetween>
			<div :style="{ display: 'flex', alignItems: 'center' }">
				<slot />
			</div>
			<ChevronDown :size="24" />
		</RowBetween>
	</ButtonGray>
</template>
<script>
	import { ChevronDownIcon as ChevronDown } from "vue3-feather";
	import { ButtonGray } from "../Button";
	export default {
		components: {
			ButtonGray,
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