<template>
	<Box as="button" tx="buttons" variant="primary" :__css="css"><slot/></Box>
</template>
<script>
import { Box } from './reflexbox'
	export default {
		components:{
			Box
		},
		data(){
			return{ }
		}
	}
</script>