<template>
<Flex
    as='label'
    tx='forms'
    variant='label'
    :__css="{
      width: '100%',
    }"><slot/></Flex>
</template>
<script>
import { Flex } from '../reflexbox'	
	export default{
		components:{
			Flex
		}
	}
</script>


  