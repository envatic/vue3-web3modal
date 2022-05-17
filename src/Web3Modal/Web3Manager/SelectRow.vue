<script>
	import SelectRowItem from "./SelectRowItem.vue";
	import { CHAIN_INFO } from "../constants/chainInfo";
	import { SupportedChainId } from "../constants/chains";
	import { useActiveWeb3Vue } from "../hooks";
	import { computed } from "vue";
	import { ArrowDownIcon as ArrowDownCircle } from "vue3-feather";
	import styled from "vue3-styled-components";
	import ExternalLink from "../theme/ExternalLink.vue";
	import { useI18n } from "vue-i18n";

	const ActiveRowLinkList = styled.div`
		display: flex;
		flex-direction: column;
		padding: 0 8px;
		& > a {
			align-items: center;
			color: ${({ theme }) => theme.text2};
			display: flex;
			flex-direction: row;
			font-size: 14px;
			font-weight: 500;
			justify-content: space-between;
			padding: 8px 0 4px;
			text-decoration: none;
		}
		& > a:first-child {
			margin: 0;
			margin-top: 0px;
			padding-top: 10px;
		}
	`;
	const ActiveRowWrapper = styled.div`
		background-color: ${({ theme }) => theme.bg1};
		border-radius: 8px;
		cursor: pointer;
		padding: 8px;
		width: 100%;
	`;

	const LinkOutCircle = styled(ArrowDownCircle)`
		transform: rotate(230deg);
		width: 16px;
		height: 16px;
	`;

	export default {
		components: {
			LinkOutCircle,
			ActiveRowWrapper,
			ExternalLink,
			SelectRowItem,
			ActiveRowLinkList,
		},
		props: {
			targetChain: {
				type: [String, Number],
				validator: (v) => Object.values(SupportedChainId).includes(v),
			},
		},

		setup(props) {
			const { chainId } = useActiveWeb3Vue();
			const active = computed(() => chainId.value === props.targetChain);
			const { helpCenterUrl, explorer, bridge, label, logoUrl } =
				CHAIN_INFO[props.targetChain];
			const { t } = useI18n();
			const BridgeLabel = computed(() => {
				switch (chainId.value) {
					case SupportedChainId.ARBITRUM_ONE:
					case SupportedChainId.ARBITRUM_RINKEBY:
						return t("Arbitrum Bridge");
					case SupportedChainId.OPTIMISM:
					case SupportedChainId.OPTIMISTIC_KOVAN:
						return t("Optimism Gateway");
					case SupportedChainId.POLYGON:
					case SupportedChainId.POLYGON_MUMBAI:
						return t("Polygon Bridge");
					default:
						return t("Bridge");
				}
			});
			const ExplorerLabel = computed(() => {
				switch (chainId.value) {
                    case SupportedChainId.BINANCE:
					case SupportedChainId.BINANCE_TESTNET:
						return t("Bscscan");
					case SupportedChainId.ARBITRUM_ONE:
					case SupportedChainId.ARBITRUM_RINKEBY:
						return t("Arbiscan");
					case SupportedChainId.OPTIMISM:
					case SupportedChainId.OPTIMISTIC_KOVAN:
						return t("Optimistic Etherscan");
					case SupportedChainId.POLYGON:
					case SupportedChainId.POLYGON_MUMBAI:
						return t("Polygonscan");
					default:
						return t("Etherscan");
				}
			});
			return {
				ExplorerLabel,
				BridgeLabel,
				helpCenterUrl,
				explorer,
				bridge,
				label,
				logoUrl,
				active,
				t,
			};
		},
	};
</script>

<template>
	<ActiveRowWrapper v-if="active">
		<SelectRowItem
			:logo-url="logoUrl"
			:label="label"
			active
		/>
		<ActiveRowLinkList>
			<ExternalLink
				v-if="bridge"
				:href="bridge"
			>
				{{ BridgeLabel }}
				<LinkOutCircle />
			</ExternalLink>
			<ExternalLink
				v-if="explorer"
				:href="explorer"
			>
				{{ ExplorerLabel }}
				<LinkOutCircle />
			</ExternalLink>
			<ExternalLink
				v-if="helpCenterUrl"
				:href="helpCenterUrl"
			>
				{{ t("Help Center") }}
				<LinkOutCircle />
			</ExternalLink>
		</ActiveRowLinkList>
	</ActiveRowWrapper>
	<SelectRowItem
		v-else
		:logo-url="logoUrl"
		:label="label"
	/>
</template>
