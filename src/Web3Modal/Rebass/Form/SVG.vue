<template>
	<Box
		as='svg'
		:width="size"
		:height="size"
		viewBox="0 0 24 24"
		fill='currentcolor'
	>
		<slot />
	</Box>
</template>
<script>
	import { Box } from "../reflexbox";
	export default {
		components: {
			Box,
		},
		props: {
			size: {
				type: Number,
				default: 24,
			},
		},
	};
</script>


  