<template>
  <ButtonErrorStyle v-if="error" />
  <ButtonPrimary v-else />
</template>
<script>
import styled from "vue3-styled-components";
import { darken } from "polished";
import { ButtonPrimary, Base } from "../Button";
const ButtonErrorStyle = styled(Base)`
  background-color: ${({ theme }) => theme.red1};
  border: 1px solid ${({ theme }) => theme.red1};

  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.05, theme.red1)};
    background-color: ${({ theme }) => darken(0.05, theme.red1)};
  }
  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.red1)};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.1, theme.red1)};
    background-color: ${({ theme }) => darken(0.1, theme.red1)};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
    box-shadow: none;
    background-color: ${({ theme }) => theme.red1};
    border: 1px solid ${({ theme }) => theme.red1};
  }
`;
export default {
  props: {
    error: Boolean,
  },
  components: {
    ButtonPrimary,
    ButtonErrorStyle,
  },
};
</script>
