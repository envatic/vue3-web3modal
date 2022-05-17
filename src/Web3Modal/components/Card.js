import styled from "vue3-styled-components";
import {Box} from "@/Web3Modal/reflexbox";
import Text from "@/Web3Modal/theme/TextWrapper.vue";
const CardProps = {
	width: {
		type: String,
		required: false,
		default: "100%",
	},
	padding: {
		type: String,
		required: false,
		default: "",
	},
	border: {
		type: String,
		required: false,
		default: "",
	},
	borderRadius: {
		type: String,
		required: false,
		default: "",
	},
};
export const Card = styled(Box, CardProps)`
	width: ${({width}) => width};
	border-radius: 16px;
	padding: 1.25rem;
	padding: ${({padding}) => padding};
	border: ${({border}) => border};
	border-radius: ${({borderRadius}) => borderRadius};
`;

export const LightCard = styled(Card)`
	border: 1px solid ${({theme}) => theme.bg2};
	background-color: ${({theme}) => theme.bg1};
`;

export const LightGreyCard = styled(Card)`
	background-color: ${({theme}) => theme.bg2};
`;

export const GreyCard = styled(Card)`
	background-color: ${({theme}) => theme.bg3};
`;

export const OutlineCard = styled(Card)`
	border: 1px solid ${({theme}) => theme.bg3};
`;

export const YellowCard = styled(Card)`
	background-color: rgba(243, 132, 30, 0.05);
	color: ${({theme}) => theme.yellow2};
	font-weight: 500;
`;

export const PinkCard = styled(Card)`
	background-color: rgba(255, 0, 122, 0.03);
	color: ${({theme}) => theme.primary1};
	font-weight: 500;
`;
const BlueCardStyled = styled(Card)`
	background-color: ${({theme}) => theme.primary5};
	color: ${({theme}) => theme.primary1};
	border-radius: 12px;
	width: fit-content;
`;

export const BlueCard = {
	components: {
		BlueCardStyled,
		Text,
	},
	template: `<BlueCardStyled>
				<Text fontWeight="500" color="#2172E5">
					<slots></slots>
				</Text>
			</BlueCardStyled>`,
};
