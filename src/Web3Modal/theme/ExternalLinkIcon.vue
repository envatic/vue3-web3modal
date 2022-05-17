<template>
	<LinkIconWrapper target="target" rel="target">
      <LinkIcon />
    </LinkIconWrapper>
</template>
<script>
	import {LinkIconWrapper} from './index';
	import {LinkIcon} from './index';
	export default{
		components:{
			LinkIconWrapper,
			LinkIcon
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