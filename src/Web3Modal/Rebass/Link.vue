<template>
	<Box as="a" variant="link" tx="text"><slot/></Box>
</template>
<script>
import { Box } from './reflexbox'
	export default {
		components:{
			Box
		}
	}
</script>