<script>
	import { theme } from "@/Web3Modal/theme";
	import { ThemeProvider } from "vue3-styled-components";
	export default {
		components: {
			ThemeProvider,
		},
		setup() {
			return {
				theme,
			};
		},
	};
</script>
<template>
	<ThemeProvider :theme="theme">
		<slot />
	</ThemeProvider>
</template>
