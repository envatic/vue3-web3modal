<template>
  <Flex v-bind="margins">
    <Box v-bind="nonMargins"
      as='select'
      tx='forms'
      variant='select'
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
    />
    <SVG
      :sx="{
        ml: -28,
        alignSelf: 'center',
        pointerEvents: 'none',
      }"
    ><path d="M7 10l5 5 5-5z" /></SVG>
  </Flex>
</template>
<script>
import { Box, Flex } from '../reflexbox'
import { props as systemProps } from '@styled-system/should-forward-prop'
const rebassProps = [
  ...systemProps,
  'sx',
  'variant',
]

const PRE = new RegExp(`^(${rebassProps.join('|')})$`)
const MRE = /^m[trblxy]?$/
const getProps = (test) => (props) => {
  const next = {}
  for (const key in props) {
    if (test(key || '')) next[key] = props[key]
  }
  return next
}
const getSystemProps = getProps(k => PRE.test(k))
const getMarginProps = getProps(k => MRE.test(k))
const omitMarginProps = getProps(k => !MRE.test(k))
	export default{
		inheritAttrs: false,
		components:{
			Box,
			Flex
		},
        methods:{
            getSystemProps,
        },
		computed:{
			margins(){
				return getMarginProps(this.$attrs);
			},
			nonMargins(){
				return omitMarginProps(this.$attrs);
			}
		}
	}
</script>


  