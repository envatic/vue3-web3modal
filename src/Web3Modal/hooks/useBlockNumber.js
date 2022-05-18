import {computed, reactive, ref, onUnmounted, watch} from "vue";
import { SupportedChainId } from "../constants";
import {useActiveWeb3Vue} from "@/Web3Modal/hooks";
import {useDebounceFn} from "@vueuse/core";
import {useInfura} from "@/Web3Modal/hooks/useInfura";
const {chainId, isValidNetwork} = useActiveWeb3Vue();
const blockNumber = reactive({
    [SupportedChainId.KOVAN]: null,
    [SupportedChainId.RINKEBY]: null,
    [SupportedChainId.ROPSTEN]: null,
    [SupportedChainId.GÖRLI]: null,
    [SupportedChainId.MAINNET]: null,
    [SupportedChainId.ARBITRUM_ONE]: null,
    [SupportedChainId.ARBITRUM_RINKEBY]: null,
    [SupportedChainId.OPTIMISM]: null,
    [SupportedChainId.OPTIMISTIC_KOVAN]: null,
    [SupportedChainId.POLYGON]: null,
    [SupportedChainId.POLYGON_MUMBAI]: null,
    [SupportedChainId.BINANCE]: null,
    [SupportedChainId.BINANCE_TESTNET]: null,
});
const blockTimestamp = reactive({
    [SupportedChainId.KOVAN]: null,
    [SupportedChainId.RINKEBY]: null,
    [SupportedChainId.ROPSTEN]: null,
    [SupportedChainId.GÖRLI]: null,
    [SupportedChainId.MAINNET]: null,
    [SupportedChainId.ARBITRUM_ONE]: null,
    [SupportedChainId.ARBITRUM_RINKEBY]: null,
    [SupportedChainId.OPTIMISM]: null,
    [SupportedChainId.OPTIMISTIC_KOVAN]: null,
    [SupportedChainId.POLYGON]: null,
    [SupportedChainId.POLYGON_MUMBAI]: null,
    [SupportedChainId.BINANCE]: null,
    [SupportedChainId.BINANCE_TESTNET]: null,
});
const subscription = ref(null);
const isActive = ref(false);
export const updateBlock = ({number, time}) => {
	if(!chainId.value) return;
	if (!blockNumber[chainId.value]) {
		blockNumber[chainId.value] = number;
	} else {
		blockNumber[chainId.value] = Math.max(number, blockNumber[chainId.value]);
	}
	if (!blockTimestamp[chainId.value]) {
		blockTimestamp[chainId.value] = time;
	} else {
		blockTimestamp[chainId.value] = Math.max(
			time,
			blockTimestamp[chainId.value],
		);
	}
};
export const useBlockNumber = ()=>{
	return computed(() => blockNumber[chainId.value]);
}
export const useBlockTime = () => {
	return computed(() => blockTimestamp[chainId.value]);
};
export const lastBlockNumber = computed(() => blockNumber[chainId.value]);
export const lastBlockTime = computed(
	() => blockTimestamp[chainId.value ?? SupportedChainId.MAINNET],
);
export const blockUpdater = () => {
	if (isActive.value) return; // run only once
	isActive.value = true;
    const { infuraWss: infura } = useInfura();
    // infuraWss is a web3 instance connected to infura websockets
    
	const debounceUpdateBlockNumber = useDebounceFn(updateBlock, 100);
	const blockNumberCallback = (block) => {
		const blockNum = parseInt(block.number);
		const number = Math.max(blockNum, lastBlockNumber.value);
		const blockTime = parseInt(block.number);
		const time = Math.max(blockTime, lastBlockTime.value);
		debounceUpdateBlockNumber({number, time});
	};
	const unSubscribe = () => {
		if (
			subscription.value != null &&
			typeof subscription.value == "function"
		) {
			subscription.value.unsubscribe(() => {
				subscription.value = null;
			});
		}
		isActive.value = false;
	};
	watch(
		[chainId,isValidNetwork],
		([chainId, isValidNetwork]) => {
			unSubscribe();
			if (!chainId || !isValidNetwork) return undefined;
				infura.value.eth
					.getBlock("latest")
					.then(blockNumberCallback)
					.catch((error) =>
						console.error(
							`Failed to get block number for chainId: ${chainId}`,
							error,
						),
					);
			subscription.value = infura.value.eth
				.subscribe("newBlockHeaders")
				.on("data", (block) => blockNumberCallback(block));
		},
		{immediate: true},
	);
	onUnmounted(unSubscribe);
};
