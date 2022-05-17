<template>
	<Box as='h2' tx='text' variant='heading' :__css="css"><slot/></Box>
</template>
<script>
import { Box } from './reflexbox'
	export default {
		components:{
			Box
		},
		data(){
			return{
				css:{
					fontSize: 4,
					fontFamily: 'heading',
					fontWeight: 'heading',
					lineHeight: 'heading',
				}
			}
		}
	}
</script>