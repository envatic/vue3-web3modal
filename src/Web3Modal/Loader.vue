<template>
	<StyledSVG
		viewBox="0 0 24 24"
		fill="none"
		:xmlns="'http://www.w3.org/2000/svg'"
		:size="size"
		:stroke="stroke"
	>
		<path
			d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5"
			stroke-width="2.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		></path>
	</StyledSVG>
</template> 
<script>
	import styled, { keyframes } from "vue3-styled-component";
	const rotate = keyframes`
	        	  from {
	        		transform: rotate(0deg);
	        	  }
	        	  to {
	        		transform: rotate(360deg);
	        	  }
	        	`;

	const StyledSVG = styled("svg", {
		size: {
			type: String,
			required: false,
			default: "16px",
		},
		stroke: {
			type: String,
			required: false,
			default: null,
		},
	})`
		animation: 2s ${rotate} linear infinite;
		height: ${({ size }) => size};
		width: ${({ size }) => size};
		path {
			stroke: ${({ stroke, theme }) => (stroke ? stroke : theme.primary1)};
		}
	`;
	export default {
		components: {
			StyledSVG,
		},
		props: {
			size: { type: String, default: "16px" },
			stroke: { type: String, default: null },
		},
	};
</script>