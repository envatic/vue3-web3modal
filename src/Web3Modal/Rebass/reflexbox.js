import styled from "vue3-styled-component";
import { space, layout, typography, color, flexbox } from "../theme/styled";
import css, { get } from "@styled-system/css";
import props from "./props";
const esx = (props) => css(props.sx)(props.theme);
const base = (props) => css(props.__css)(props.theme);
const evariant = ({ theme, variant, tx = "variants" }) =>
css(get(theme, tx + "." + variant, get(theme, variant)))(theme);

export const Box = styled("div", props({
  __css:Object,
  css:String,
  sx:Object, 
  tx:String, 
  variant:String
}))`
  box-sizing:border-box;
  margin: 0;
  min-width: 0;
  ${esx}
  ${base}
  ${evariant}
  ${space}
  ${layout}
  ${typography}
  ${color}
  ${flexbox}
`;


export const Flex = styled(Box)`
display:flex;
`