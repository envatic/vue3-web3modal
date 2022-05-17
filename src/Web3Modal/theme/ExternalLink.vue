<template>
	<StyledLink :target="target" :rel="rel" ><slot/></StyledLink>
</template>
<script>
	import {StyledLink} from './index'
	export default{
		components:{
				StyledLink 
			},
		props:{
			
			target:{
				type:String,
				required:false,
				default:'_blank',
			},
			rel:{
				type:String,
				required:false,
				default:'noopener noreferrer',
			}
		},
	}

</script>