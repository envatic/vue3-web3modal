import {useActiveWeb3Vue} from "@/Web3Modal/hooks";
import { SupportedChainId } from "../constants";
import {computed} from "vue";
import Web3 from "web3";
import {useInfuraUrls} from "@/Web3Modal/constants/infura";
const {chainId, isValidNetwork} = useActiveWeb3Vue();
export const useInfura = ()=>{
    const { INFURA_NETWORK_URLS, INFURA_WSS_URLS } = useInfuraUrls();
	const infura = computed(() => {
		if (!isValidNetwork.value) return null;
		if (chainId.value == null) return null;
        const rpc_url = INFURA_NETWORK_URLS[chainId.value ?? SupportedChainId.MAINNET];
		return new Web3(rpc_url);
	});
	const infuraWss = computed(() => {
		if(!isValidNetwork.value) return null;
        const wss_url = INFURA_WSS_URLS[chainId.value ?? SupportedChainId.MAINNET]??null;
		if(!wss_url) return infura.value
		return new Web3(new Web3.providers.WebsocketProvider(wss_url));
	});
	return {
		infuraWss,
		infura
	};
}
