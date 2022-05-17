<template>
	<StyledToggle :isActive="modelValue" :onClick="toggle">
		<ToggleElement :isActive="modelValue" :isOnSwitch="true"> On </ToggleElement>
		<ToggleElement :isActive="!modelValue" :isOnSwitch="false"> Off </ToggleElement>
	</StyledToggle>
</template>
<script>
import styled from 'vue3-styled-components'
const ToggleElement = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 14px;
  background: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.primary1 : theme.text4) : 'none')};
  color: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.white : theme.text2) : theme.text3)};
  font-size: 1rem;
  font-weight: 400;

  padding: 0.35rem 0.6rem;
  border-radius: 12px;
  background: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.primary1 : theme.text4) : 'none')};
  color: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.white : theme.text2) : theme.text2)};
  font-size: 1rem;
  font-weight: ${({ isOnSwitch }) => (isOnSwitch ? '500' : '400')};
  :hover {
    user-select: ${({ isOnSwitch }) => (isOnSwitch ? 'none' : 'initial')};
    background: ${({ theme, isActive, isOnSwitch }) =>
      isActive ? (isOnSwitch ? theme.primary1 : theme.text3) : 'none'};
    color: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.white : theme.text2) : theme.text3)};
  }
`

const StyledToggle = styled.button`
  border-radius: 12px;
  border: none;
  background: ${({ theme }) => theme.bg3};
  display: flex;
  width: fit-content;
  cursor: pointer;
  outline: none;
  padding: 0;
`

export default{
	components:{
		StyledToggle,
		ToggleElement,
	},
	props:{
		modelValue: Boolean 
	},
	emits: ['update:modelValue'],
	methods:{
		toggle(){
			this.$emit('update:modelValue', !this.modelValue)
		}
	}	
}
</script>