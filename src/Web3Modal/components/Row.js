import styled from "vue3-styled-component";
import {Box} from "@/Web3Modal/Rebass/reflexbox";

const Row = styled(Box, {
	width: {
		type: String,
		required: false,
		default: "100%",
	},
	align: {
		type: String,
		required: false,
		default: "center",
	},
	justify: {
		type: String,
		required: false,
		default: "flex-start",
	},
	padding: {
		type: String,
		required: false,
		default: undefined,
	},
	border: {
		type: String,
		required: false,
		default: undefined,
	},
	borderRadius: {
		type: String,
		required: false,
		default: undefined,
	},
})`
	width: ${({width}) => width};
	display: flex;
	padding: 0;
	align-items: ${({align}) => align};
	justify-content: ${({justify}) => justify};
	padding: ${({padding}) => padding};
	border: ${({border}) => border};
	border-radius: ${({borderRadius}) => borderRadius};
`;

export const RowBetween = styled(Row)`
	justify-content: space-between;
`;

export const RowFlat = styled.div`
	display: flex;
	align-items: flex-end;
`;

export const AutoRow = styled(Row, {
	gap: {
		type: String,
		required: false,
		default: undefined,
	},
	justify: {
		type: String,
		required: false,
		default: undefined,
	},
})`
	flex-wrap: wrap;
	${({gap}) => gap && `margin:-${gap};`}
	${({justify}) => justify && `justify-content: ${justify};`}
  & > * {
		margin: ${({gap}) => gap} !important;
	}
`;

export const RowFixed = styled(Row, {
	gap: {
		type: String,
		required: false,
		default: undefined,
	},
	justify: {
		type: String,
		required: false,
		default: undefined,
	},
})`
	width: fit-content;
	${({gap}) => gap && `margin: -${gap};`}
`;

export default Row;
