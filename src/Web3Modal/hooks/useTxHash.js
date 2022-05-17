import {
	truncateTx,
	shortenAddress,
} from "@/Web3Modal/utils";
import { ExplorerDataType, getExplorerLink} from "@/Web3Modal/utils/getExplorerLink";
import {useActiveWeb3Vue} from "@/Web3Modal/hooks";
import {computed} from "vue";
import {get} from "@vueuse/core";
export function useTxHash(txhash) {
	const {chainId} = useActiveWeb3Vue();
	const shortTx = computed(() => {
		if (get(txhash).length < 30) return "";
		return truncateTx(get(txhash));
	});

	const etherScanLink = computed(() => {
		if (get(txhash).length < 30) return "";
		return getExplorerLink(
			chainId.value,
			get(txhash),
			ExplorerDataType.TRANSACTION,
		);
	});
	return [shortTx, etherScanLink];
}

export function useAddress(txAddress) {
	const {chainId} = useActiveWeb3Vue();
	const shortTx = computed(() => {
		if (get(txAddress).length < 30) return "";
		return shortenAddress(get(txAddress));
	});

	const etherScanLink = computed(() => {
		if (get(txAddress).length < 30) return "";
		return getExplorerLink(chainId.value, get(txAddress), ExplorerDataType.ADDRESS);
	});
	return [shortTx, etherScanLink];
}
