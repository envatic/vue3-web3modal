<script>
	import styled from "vue3-styled-component";
	import { computed } from "vue";
	import { useWindowScroll } from "@vueuse/core";
	import { CHAIN_INFO } from "../constants/chainInfo";
	import { SupportedChainId } from "../constants/chains";
	import { useActiveWeb3Vue } from "../hooks";
	import {Box as Text} from "../Rebass/reflexbox";
	import Web3Status from "./Web3Status.vue";
	import WalletModal from "../components/web3Modal/Web3Modal";
	import NetworkSelector from "./NetworkSelector.vue";
	import { useEther } from "../constants";
    import {isOpen} from "../hooks/useModalsToggle"
import { useInfuraKey } from '../hooks/useProvider';
	const HeaderFrame = styled("div", { showBackground: Boolean })`
		/* display: grid; */
		grid-template-columns: 120px 1fr 120px;
		align-items: center;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
		width: 100%;
		top: 0;
		position: relative;
		z-index: 21;
		position: relative;
		/* Background slide effect on scroll. */
		background-image: ${({ theme }) =>
			`linear-gradient(to bottom, transparent 50%, ${theme.bg0} 50% )}}`};
		background-position: ${({ showBackground }) =>
			showBackground ? "0 -100%" : "0 0"};
		background-size: 100% 200%;
		box-shadow: 0px 0px 0px 1px
			${({ theme, showBackground }) =>
				showBackground ? theme.bg2 : "transparent;"};
		transition: background-position 0.1s, box-shadow 0.1s;
		background-blend-mode: hard-light;

		${({ theme }) => theme.mediaWidth.upToLarge`
			    grid-template-columns: 48px 1fr 1fr;
			  `};

		${({ theme }) => theme.mediaWidth.upToMedium`
			    padding:  1rem;
			    grid-template-columns: 1fr 1fr;
			  `};

		${({ theme }) => theme.mediaWidth.upToSmall`
			    padding:  1rem;
			    grid-template-columns: 36px 1fr;
			  `};
	`;

	const HeaderControls = styled.div`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-self: flex-end;
	`;

	const HeaderElement = styled.div`
		display: flex;
		align-items: center;

		&:not(:first-child) {
			margin-left: 0.5em;
		}

		/* addresses safari's lack of support for "gap" */
		& > *:not(:first-child) {
			margin-left: 8px;
		}

		${({ theme }) => theme.mediaWidth.upToMedium`
		    align-items: center;
		  `};
	`;

	const AccountElement = styled("div", { active: Boolean })`
		display: flex;
		flex-direction: row;
		align-items: center;
		border: 1px solid
			${({ theme, active }) => (!active ? theme.bd0 : theme.bd0)};
		background-color: ${({ theme, active }) =>
			!active ? theme.bg0 : theme.bg0};
		border-radius: 16px;
		white-space: nowrap;
		width: 100%;
		height: 40px;
		:focus {
			border: 1px solid blue;
		}
	`;

	const BalanceText = styled(Text, {
        tx:String
    })`
		${({ theme }) => theme.mediaWidth.upToMedium`display: none;`};
       
	`;
	export default {
		components: {
			BalanceText,
			AccountElement,
			HeaderElement,
			HeaderControls,
			HeaderFrame,
			NetworkSelector,
			Web3Status,
			WalletModal,
		},
		setup(props, { slots }) {
			const { account, chainId, active, isValidNetwork, etherBalance } =
				useActiveWeb3Vue();
			const ether = useEther(chainId);
            const infurakey = useInfuraKey()
			const { y: scrollY } = useWindowScroll();
			const nativeCurrencySymbol = computed(() => {
				const {
					nativeCurrency: { symbol: nativeSymbol },
				} = CHAIN_INFO[chainId.value ?? SupportedChainId.MAINNET];
				return nativeSymbol;
			});
			const hasDropDown = computed(() => !!slots.default && !!account.value);
			return {
				nativeCurrencySymbol,
				scrollY,
				etherBalance,
				ether,
				account,
				chainId,
				hasDropDown,
				active,
				isValidNetwork,
                isOpen,
                infurakey
			};
		},
	};
</script>
<template>
	<HeaderFrame :show-background="scrollY > 45">
		<HeaderControls>
			<HeaderElement v-if="active && !!account  && isValidNetwork">
				<NetworkSelector :infura-key="infurakey" />
			</HeaderElement>
			<HeaderElement>
				<AccountElement :active="!!account">
					<BalanceText
						v-if="active && !!account && isValidNetwork"
						:style="{flexShrink: 0, userSelect:'none'}"
						pl="1rem"
						pr="1rem"
                        tx="text"
                        color="text1"
						font-weight="500"
					>
						<slot name="balance">
							{{parseFloat(etherBalance).toPrecision(5)}}
							{{ether.symbol}}
						</slot>
					</BalanceText>
					<Web3Status />
				</AccountElement>
			</HeaderElement>
			<HeaderElement v-if="hasDropDown">
				<slot>

				</slot>
			</HeaderElement>
		</HeaderControls>
	</HeaderFrame>
	<Teleport to="body">
		<slot name="modal">
			<WalletModal v-show="isOpen" />
		</slot>
	</Teleport>
</template>