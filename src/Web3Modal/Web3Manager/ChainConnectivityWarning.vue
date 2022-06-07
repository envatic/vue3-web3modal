
<script >
	import { useI18n } from "vue-i18n";
	import { computed } from "vue";
	import { CHAIN_INFO } from "../constants/chainInfo";
	import { SupportedChainId } from "../constants/chains";
	import useActiveWeb3Vue from "../hooks";
	import { AlertOctagonIcon as AlertOctagon } from "@/Web3Modal/assets/icons";
	import styled from "vue3-styled-component";
	import { ExternalLink, MEDIA_WIDTHS } from "theme";

	const BodyRow = styled.div`
		color: ${({ theme }) => theme.black};
		font-size: 12px;
	`;
	const CautionIcon = styled(AlertOctagon)`
		color: ${({ theme }) => theme.black};
	`;
	const Link = styled(ExternalLink)`
		color: ${({ theme }) => theme.black};
		text-decoration: underline;
	`;
	const TitleRow = styled.div`
		align-items: center;
		display: flex;
		justify-content: flex-start;
		margin-bottom: 8px;
	`;

	const TitleText = styled.div`
		color: black;
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
		margin: 0px 12px;
	`;
	const Wrapper = styled.div`
		background-color: ${({ theme }) => theme.yellow3};
		border-radius: 12px;
		bottom: 60px;
		display: none;
		max-width: 348px;
		padding: 16px 20px;
		position: absolute;
		right: 16px;
		@media screen and (min-width: ${MEDIA_WIDTHS.upToMedium}px) {
			display: block;
		}
	`;
	export default {
		components: {
			Wrapper,
			TitleText,
			TitleRow,
			Link,
			CautionIcon,
			BodyRow,
		},
		setup() {
			const { chainId } = useActiveWeb3Vue();
			const info = computed(
				() => CHAIN_INFO[chainId.value ?? SupportedChainId.MAINNET]
			);
			const label = computed(() => info.value?.label);
			const { t } = useI18n();
			return {
				t,
				label,
				chainId,
				SupportedChainId,
			};
		},
	};
</script>
<template>
	<Wrapper>
		<TitleRow>
			<CautionIcon />
			<TitleText>
				{{t('Network Warning')}}
			</TitleText>
		</TitleRow>
		<BodyRow>
			<template v-if="chainId === SupportedChainId.MAINNET">
				{{t('You may have lost your network connection.')}}
			</template>
			<template v-else>
				{{t('You may have lost your network connection, or {label} might be down right now.',{label})}}
			</template>
			{{' '}}
			<span v-if="info.statusPage !== undefined">
				{{t('Check network status')}}{' '}
				<Link :href="info.statusPage|| ''">
				{{t('here.')}}
				</Link>
			</span>
		</BodyRow>
	</Wrapper>
</template>