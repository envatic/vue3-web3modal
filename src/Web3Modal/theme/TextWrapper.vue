<template>
	<TxtDiv :istyles="textStyle">
		<slot />
	</TxtDiv>
</template>
<script>
	import styled, { css } from "vue3-styled-component";
	const TxtDiv = styled("div", {
		istyles: Object,
	})`
		box-sizing: border-box;
		margin: 0px 0px 0px 6px;
		min-width: 0px;
		${(props) =>
			css`
				${props.istyles}
			`}
	`;
	import { useTheme } from "@/Web3Modal/theme";
	export default {
		components: {
			TxtDiv,
		},
		inheritAttrs: false,
		props: {
			type: {
				type: String,
				required: false,
				default: "",
			},
			fontWeight: {
				type: Number,
				required: false,
				default: null,
			},
			fontSize: {
				type: String,
				required: false,
				default: null,
			},
			error: {
				type: Boolean,
				required: false,
				default: false,
			},
		},
		setup() {
			const theme = useTheme();
			return { theme };
		},
		computed: {
			textStyle() {
				return {
					fontWeight: this.fontWeight ?? 500,
					fontSize: this.fontSize ?? "14px",
					...this.styleType,
					...this.$attrs,
					...this.color,
				};
			},
			color() {
				if (
					this.$attrs.color?.startsWith("#") ||
					this.$attrs.color?.startsWith("rgb")
				)
					return { color: this.$attrs.color };
				if (this.theme[this.$attrs?.color])
					return { color: this.theme[this.$attrs?.color] };
				return {};
			},
			styleType() {
				switch (this.type.toLowerCase()) {
					case "main":
						return { color: this.theme["text2"] };
					case "link":
						return { color: this.theme["primary1"] };
					case "black":
						return { color: this.theme["text1"] };
					case "white":
						return { color: this.theme["white"] };
					case "body":
						return {
							fontWeight: this.fontWeight ?? 400,
							fontSize: this.fontSize ?? "16px",
						};
					case "largeHeader":
						return {
							fontWeight: this.fontWeight ?? 600,
							fontSize: this.fontSize ?? "24px",
						};
					case "mediumHeader":
						return { fontSize: this.fontSize ?? "20px" };
					case "subHeader":
						return {
							fontWeight: this.fontWeight ?? 400,
							fontSize: this.fontSize ?? "14px",
						};
					case "small":
						return { fontSize: this.fontSize ?? "11px" };
					case "blue":
						return { color: this.theme["blue1"] };
					case "yellow":
						return { color: this.theme["yellow1"] };
					case "darkGray":
						return { color: this.theme["text3"] };
					case "gray":
						return { color: this.theme["bg3"] };
					case "italic":
						return {
							fontSize: "12px",
							fontStyle: "italic",
							color: this.theme["text2"],
						};
					case "error":
						return {
							fontSize: "12px",
							color: this.error
								? this.theme["red1"]
								: this.theme["text2"],
						};
					default:
						return {};
				}
			},
		},
	};
</script>