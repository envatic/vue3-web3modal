<script>
	import styled from "vue3-styled-components";
	import { useActiveWeb3Vue } from "@/Web3Modal/hooks";
	import { computed } from "vue";
	const InfoCard = styled("button", { active: Boolean })`
		background-color: ${({ theme, active }) =>
			active ? theme.bg3 : theme.bg2};
		padding: 1rem;
		outline: none !important;
		border: 1px solid;
		border-radius: 12px;
		width: 100% !important;
		&:focus {
			box-shadow: 0 0 0 1px ${({ theme }) => theme.primary1};
		}
		border-color: ${({ theme, active }) =>
			active ? "transparent" : theme.bg3};
	`;

	const OptionCard = styled(InfoCard)`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-top: 2rem;
		padding: 1rem;
	`;

	const OptionCardLeft = styled.div`
		${({ theme }) => theme.flexColumnNoWrap};
		justify-content: center;
		height: 100%;
	`;

	const OptionCardClickable = styled(OptionCard, { clickable: Boolean })`
		margin-top: 0;
		&:hover {
			cursor: ${({ clickable }) => (clickable ? "pointer" : "")};
			border: ${({ clickable, theme }) =>
				clickable ? `1px solid ${theme.primary1}` : ``};
		}
		opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
	`;

	const GreenCircle = styled.div`
		${({ theme }) => theme.flexRowNoWrap}
		justify-content: center;
		align-items: center;

		&:first-child {
			height: 8px;
			width: 8px;
			margin-right: 8px;
			background-color: ${({ theme }) => theme.green1};
			border-radius: 50%;
		}
	`;

	const CircleWrapper = styled.div`
		color: ${({ theme }) => theme.green1};
		display: flex;
		justify-content: center;
		align-items: center;
	`;

	const HeaderText = styled.div`
		${({ theme }) => theme.flexRowNoWrap};
		color: ${(props) =>
			props.color === "blue"
				? ({ theme }) => theme.primary1
				: ({ theme }) => theme.text1};
		font-size: 1rem;
		font-weight: 500;
	`;

	const SubHeader = styled.div`
		color: ${({ theme }) => theme.text1};
		margin-top: 10px;
		font-size: 12px;
	`;

	const IconWrapper = styled("div", {
		size: {
			type: Number,
			required: false,
			default: 24,
		},
	})`
		${({ theme }) => theme.flexColumnNoWrap};
		align-items: center;
		justify-content: center;
		& > img,
		span {
			height: ${({ size }) => size + "px"};
			width: ${({ size }) => size + "px"};
		}
		${({ theme }) => theme.mediaWidth.upToMedium`
	                                        align-items: flex-end;
	                                      `};
	`;
	export default {
		components: {
			IconWrapper,
			SubHeader,
			HeaderText,
			CircleWrapper,
			GreenCircle,
			OptionCardClickable,
			OptionCardLeft,
		},
		props: {
			provider: {
				type: Object,
				required: false,
				default: null,
			},
			showDescription: {
				type: Boolean,
				required: false,
				default: false,
			},
			clickable: {
				type: Boolean,
				required: false,
				default: true,
			},
		},
		setup(props) {
			const { active: activated } = useActiveWeb3Vue();
			const canClick = computed(() => {
				const active = props.provider.active && activated.value;
				return props.clickable && !active;
			});
			return {
				canClick,
				activated,
			};
		},
	};
</script>
<template>
	<OptionCardClickable
		:clickable="canClick"
		:active="provider.active && activated"
	>
		<OptionCardLeft>
			<HeaderText
				:title="showDescription ? '' : provider.decription"
				:color="provider.color"
			>
				<CircleWrapper v-if="provider.active && activated">
					<GreenCircle>
						<div></div>
					</GreenCircle>
				</CircleWrapper>
				{{ provider.name }}
			</HeaderText>
			<SubHeader v-if="showDescription">{{
                provider.description
            }}</SubHeader>
		</OptionCardLeft>
		<IconWrapper :size="provider.size">
			<img
				:src="provider.logo"
				:alt="provider.name"
			/>
		</IconWrapper>
	</OptionCardClickable>
</template>
