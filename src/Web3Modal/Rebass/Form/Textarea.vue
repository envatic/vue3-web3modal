<template>
<Box
    as='textarea'
    tx='forms'
    variant='textarea'
    :__css="{
      display: 'block',
      width: '100%',
      p: 2,
      appearance: 'none',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      border: '1px solid',
      borderRadius: 'default',
      color: 'inherit',
      bg: 'transparent',
    }"
  ><slot/></Box>
</template>
<script>
import { Box } from '../reflexbox'	
	export default{
		components:{
			Box
		}
	}
</script>


  