import styled, {keyframes} from "vue3-styled-components";
import darken from "polished/lib/color/darken";
import {
	XIcon as X,
	ExternalLinkIcon as LinkIconFeather,
	TrashIcon as Trash,
} from "@/Web3Modal/assets/icons";
export const ButtonText = styled.button`
	outline: none;
	border: none;
	font-size: inherit;
	padding: 0;
	margin: 0;
	background: none;
	cursor: pointer;
	:hover {
		opacity: 0.7;
	}
	:focus {
		text-decoration: underline;
		outline: 0;
	}
`;

export const Button = styled("button", {warning: Boolean})`
  padding: 1rem 2rem 1rem 2rem;
  border-radius: 3rem;
  cursor: pointer;
  user-select: none;
  font-size: 1rem;
  border: none;
  outline: none;
  background-color: ${({warning, theme}) =>
		warning ? theme.red1 : theme.primary1}
  color: ${({theme}) => theme.white};
  width: 100%;
  :hover,
  :focus {
    background-color: ${({warning, theme}) =>
		darken(0.05, warning ? theme.red1 : theme.primary1)};
  }
  :active {
    background-color: ${({warning, theme}) =>
		darken(0.1, warning ? theme.red1 : theme.primary1)};
  }
  :disabled {
    background-color: ${({theme}) => theme.bg1};
    color: ${({theme}) => theme.text4};
    cursor: auto;
  }
`;
export const XIcon = styled(X)`
	cursor: pointer;
`;
export const CloseIcon = styled(X)`
	cursor: pointer;
`;

// for wrapper react feather icons
export const IconWrapper = styled("div", {
	stroke: {
		type: String,
		required: false,
		default: "",
	},
	marginRight: {
		type: String,
		required: false,
		default: "",
	},
	marginLeft: {
		type: String,
		required: false,
		default: "",
	},
	size: {
		type: String,
		required: false,
		default: "20px",
	},
})`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${({size}) => size};
	height: ${({size}) => size};
	margin-right: ${({marginRight}) => (marginRight ? marginRight : 0)};
	margin-left: ${({marginLeft}) => (marginLeft ? marginLeft : 0)};
	& > * {
		stroke: ${({theme, stroke}) => (stroke ? stroke : theme.blue1)};
	}
`;

// A button that triggers some onClick result, but looks like a link.
export const LinkStyledButton = styled("button", {disabled: Boolean})`
	border: none;
	text-decoration: none;
	background: none;

	cursor: ${({disabled}) => (disabled ? "default" : "pointer")};
	color: ${({theme, disabled}) => (disabled ? theme.text2 : theme.primary1)};
	font-weight: 500;

	:hover {
		text-decoration: ${({disabled}) => (disabled ? null : "underline")};
	}

	:focus {
		outline: none;
		text-decoration: ${({disabled}) => (disabled ? null : "underline")};
	}

	:active {
		text-decoration: none;
	}
`;

export const StyledInternalLink = styled("a")`
	text-decoration: none;
	cursor: pointer;
	color: ${({theme}) => theme.primary1};
	font-weight: 500;

	:hover {
		text-decoration: underline;
	}

	:focus {
		outline: none;
		text-decoration: underline;
	}

	:active {
		text-decoration: none;
	}
`;

export const StyledLink = styled.a`
	text-decoration: none;
	cursor: pointer;
	color: ${({theme}) => theme.primary1};
	font-weight: 500;

	:hover {
		text-decoration: underline;
	}

	:focus {
		outline: none;
		text-decoration: underline;
	}

	:active {
		text-decoration: none;
	}
`;

export const LinkIconWrapper = styled.a`
	text-decoration: none;
	cursor: pointer;
	align-items: center;
	justify-content: center;
	display: flex;

	:hover {
		text-decoration: none;
		opacity: 0.7;
	}

	:focus {
		outline: none;
		text-decoration: none;
	}

	:active {
		text-decoration: none;
	}
`;

export const LinkIcon = styled(LinkIconFeather)`
	height: 16px;
	width: 18px;
	margin-left: 10px;
	stroke: ${({theme}) => theme.blue1};
`;

export const TrashIcon = styled(Trash)`
	height: 16px;
	width: 18px;
	margin-left: 10px;
	stroke: ${({theme}) => theme.text3};

	cursor: pointer;
	align-items: center;
	justify-content: center;
	display: flex;

	:hover {
		opacity: 0.7;
	}
`;

const rotateImg = keyframes`
  0% {
    transform: perspective(1000px) rotateY(0deg);
  }

  100% {
    transform: perspective(1000px) rotateY(360deg);
  }
`;

export const UniTokenAnimated = styled.img`
	animation: ${rotateImg} 5s cubic-bezier(0.83, 0, 0.17, 1) infinite;
	padding: 2rem 0 0 0;
	filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.img`
	animation: 2s ${rotate} linear infinite;
	width: 16px;
	height: 16px;
`;

export const BackArrowLink = styled(StyledInternalLink)`
	color: ${({theme}) => theme.text1};
`;

export const CustomLightSpinner = styled(Spinner, {size: String})`
	height: ${({size}) => size};
	width: ${({size}) => size};
`;

export const HideSmall = styled.span`
	${({theme}) => theme.mediaWidth.upToSmall`
    display: none;
  `};
`;

export const HideExtraSmall = styled.span`
	${({theme}) => theme.mediaWidth.upToExtraSmall`
    display: none;
  `};
`;

export const ExtraSmallOnly = styled.span`
	display: none;
	${({theme}) => theme.mediaWidth.upToExtraSmall`
    display: block;
  `};
`;
export const ContentWrapper = styled.div`
	background-color: ${({theme}) => theme.bg2};
	padding: 2rem;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;

	${({theme}) => theme.mediaWidth.upToMedium`
padding: 1 rem `};
`;
