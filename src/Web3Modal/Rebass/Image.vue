<template>
	<Box
		as='img'
		:__css="css"
	>
		<slot />
	</Box>
</template>
<script>
	import { Box } from "./reflexbox";
	export default {
		components: {
			Box,
		},
		data() {
			return {
				css: {
					maxWidth: "100%",
					height: "auto",
				},
			};
		},
	};
</script>