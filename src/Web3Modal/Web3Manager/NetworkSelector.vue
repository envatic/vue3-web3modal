<script >
	import Row from "@/Web3Modal/Web3Manager/SelectRow.vue";
	import { onClickOutside, useUrlSearchParams } from "@vueuse/core";
	import { useI18n } from "vue-i18n";
	import { CHAIN_INFO } from "@/Web3Modal/constants/chainInfo";
	import { CHAIN_IDS_TO_NAMES, SupportedChainId } from "../constants/chains";
	import { useActiveWeb3Vue } from "@/Web3Modal/hooks";
	import { ChevronDownIcon as ChevronDown } from "@/Web3Modal/assets/icons";
	import styled from "vue3-styled-component";
	import { MEDIA_WIDTHS } from "@/Web3Modal/theme";
	import { switchToNetwork } from "@/Web3Modal/utils/switchToNetwork";
	import { computed, onUpdated, ref, watch } from "vue";
	const FlyoutHeader = styled.div`
		color: ${({ theme }) => theme.text2};
		font-weight: 400;
	`;
	const FlyoutMenu = styled.div`
		align-items: flex-start;
		background-color: ${({ theme }) => theme.bg0};
		border: 1px solid ${({ theme }) => theme.bd0};
		box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04),
			0px 16px 24px rgba(0, 0, 0, 0.04), 0px 24px 32px rgba(0, 0, 0, 0.01);
		border-radius: 20px;
		display: flex;
		flex-direction: column;
		font-size: 16px;
		overflow: auto;
		padding: 16px;
		position: absolute;
		top: 64px;
		width: 272px;
		z-index: 99;
		& > *:not(:last-child) {
			margin-bottom: 12px;
		}
		@media screen and (min-width: ${MEDIA_WIDTHS.upToSmall}px) {
			top: 50px;
		}
	`;
	const Logo = styled.img`
		height: 20px;
		width: 20px;
		margin-right: 8px;
	`;
	const NetworkLabel = styled.div`
		flex: 1 1 auto;
	`;

	const SelectorLabel = styled(NetworkLabel)`
		display: none;
		@media screen and (min-width: ${MEDIA_WIDTHS.upToMedium}px) {
			display: block;
			margin-right: 8px;
		}
	`;
	const SelectorControls = styled("div", { interactive: Boolean })`
		  align-items: center;
          background-color: ${({ theme }) => theme.bg0};
          border: 1px solid ${({ theme }) => theme.bd0};
          border-radius: 16px;
          color: ${({ theme }) => theme.text1};
          cursor: ${({ interactive }) => (interactive ? 'pointer' : 'auto')};
          display: flex;
          font-weight: 500;
          justify-content: space-between;
          padding: 6px 8px;
	`;
	const SelectorLogo = styled(Logo, { interactive: Boolean })`
		margin-right: ${({ interactive }) => (interactive ? 8 : 0)}px;
		@media screen and (min-width: ${MEDIA_WIDTHS.upToMedium}px) {
			margin-right: 8px;
		}
	`;
	const SelectorWrapper = styled.div`
		@media screen and (min-width: ${MEDIA_WIDTHS.upToMedium}px) {
			position: relative;
		}
	`;
	const StyledChevronDown = styled(ChevronDown)`
		width: 16px;
	`;

	export default {
		props: {
			infuraKey: {
				type: String,
				required: true,
			},
		},
		components: {
			StyledChevronDown,
			SelectorWrapper,
			SelectorLogo,
			SelectorControls,
			SelectorLabel,
			FlyoutMenu,
			FlyoutHeader,
			Row,
		},
		setup(props) {
			const { t } = useI18n();
			const getChainIdFromName = (name) => {
				const entry = Object.entries(CHAIN_IDS_TO_NAMES).find(
					([, n]) => n === name
				);
				const chainId = entry?.[0];
				return chainId ? parseInt(chainId) : undefined;
			};
			const getChainNameFromId = (id) => {
				// casting here may not be right but fine to return undefined if it's not a supported chain ID
				return CHAIN_IDS_TO_NAMES[id] || "";
			};
			const { chainId, web3 } = useActiveWeb3Vue();
			const node = ref(null);
			const isOpen = ref(false);
			const open = () => (isOpen.value = true);
			const close = () => (isOpen.value = false);
			onClickOutside(node, () => close());
			const toggle = () => (isOpen.value ? close() : open());
			const info = computed(() =>
				chainId.value ? CHAIN_INFO[chainId.value] : undefined
			);
			const params = useUrlSearchParams("history");
			const urlChain = computed(() => params.chain);
			const urlChainId = computed(() =>
				urlChain.value ? getChainIdFromName(urlChain.value) : null
			);

			const handleChainSwitch = ({ targetChain, skipToggle = false }) => {
				if (targetChain == chainId.value) return;
				switchToNetwork({
					provider: web3.value.currentProvider,
					chainId:targetChain,
					chainIdHex: web3.value.utils.numberToHex(targetChain),
					INFURA_KEY: props.infuraKey,
				})
					.then(() => {
						if (!skipToggle) toggle();
						params.chain = getChainNameFromId(targetChain);
					})
					.catch((error) => {
						console.error("Failed to switch networks", error);
						//request fails, revert the URL back to current chainId
						if (chainId.value) {
							params.chain = getChainNameFromId(chainId.value);
						}
						if (!skipToggle) {
							toggle();
						}
					});
			};
			watch([chainId, urlChainId], ([chainId, urlChainId], [oldChainId]) => {
				if (!chainId || !oldChainId) return;
				if (chainId !== oldChainId) {
					params.chain = getChainNameFromId(chainId);
					// otherwise assume network change originates from URL
				} else if (urlChainId && urlChainId !== chainId) {
					handleChainSwitch({
						targetChain: urlChainId,
						skipToggle: true,
					});
				}
			});
			onUpdated(() => {
				if (chainId.value && !urlChainId.value) {
					params.chain = getChainNameFromId(chainId.value);
				}
			});
			return {
				SupportedChainId,
				info,
				t,
				chainId,
				web3,
				node,
				isOpen,
				open,
				close,
				toggle,
				handleChainSwitch,
			};
		},
	};
</script>

<template>
	<SelectorWrapper ref="node">
		<SelectorControls
			interactive
			@click="toggle"
		>
			<SelectorLogo
				interactive
				:src="info.logoUrl"
			/>
			<SelectorLabel>{{info.label}}</SelectorLabel>
			<StyledChevronDown />
		</SelectorControls>
		<FlyoutMenu
			v-if="isOpen"
			:on-mouse-leave="toggle"
		>
			<FlyoutHeader>
				{{t('Select a network')}}
			</FlyoutHeader>
			<Row
				:target-chain="SupportedChainId.MAINNET"
				@click.prevent="handleChainSwitch({targetChain:SupportedChainId.MAINNET})"
			/>
			<Row
				:target-chain="SupportedChainId.POLYGON"
				@click.prevent="handleChainSwitch({targetChain:SupportedChainId.POLYGON})"
			/>
			<Row
				:target-chain="SupportedChainId.OPTIMISM"
				@click.prevent="handleChainSwitch({targetChain:SupportedChainId.OPTIMISM})"
			/>
			<Row
				:target-chain="SupportedChainId.ARBITRUM_ONE"
				@click.prevent="handleChainSwitch({targetChain:SupportedChainId.ARBITRUM_ONE})"
			/>
			<Row
				:target-chain="SupportedChainId.BINANCE"
				@click.prevent="handleChainSwitch({targetChain:SupportedChainId.BINANCE})"
			/>
		</FlyoutMenu>

	</SelectorWrapper>
</template>