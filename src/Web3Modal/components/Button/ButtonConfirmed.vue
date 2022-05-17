
<template>
    <ButtonConfirmedStyle v-if="confirmed"/>
    <ButtonPrimary v-else :altDisabledStyle="altDisabledStyle" />
</template>
<script>

import styled from 'vue3-styled-components'
import { lighten} from 'polished'
import {ButtonPrimary, Base} from "../Button";
const ButtonConfirmedStyle = styled(Base)`
  background-color: ${({ theme }) => lighten(0.5, theme.green1)};
  color: ${({ theme }) => theme.green1};
  border: 1px solid ${({ theme }) => theme.green1};

  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`
export default {
    props: {
        confirmed: Boolean,
        altDisabledStyle: Object,
    },
    components: {
        ButtonPrimary,
        ButtonConfirmedStyle,
    },
};
</script>