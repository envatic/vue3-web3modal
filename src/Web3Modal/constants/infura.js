
import { useInfuraKey } from "../hooks/useProvider";
import {SupportedChainId} from "./chains";
/**
 * These are the network URLs used by the interface when there is not another available source of chain data
 */
export const useInfuraUrls = () =>{
    const INFURA_KEY = useInfuraKey();
    const INFURA_NETWORK_URLS =  {
        [SupportedChainId.MAINNET]: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
        [SupportedChainId.RINKEBY]: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
        [SupportedChainId.ROPSTEN]: `https://ropsten.infura.io/v3/${INFURA_KEY}`,
        [SupportedChainId.GOERLI]: `https://goerli.infura.io/v3/${INFURA_KEY}`,
        [SupportedChainId.KOVAN]: `https://kovan.infura.io/v3/${INFURA_KEY}`,
        [SupportedChainId.OPTIMISM]: `https://optimism-mainnet.infura.io/v3/${INFURA_KEY}`,
        [SupportedChainId.OPTIMISTIC_KOVAN]: `https://optimism-kovan.infura.io/v3/${INFURA_KEY}`,
        [SupportedChainId.ARBITRUM_ONE]: `https://arbitrum-mainnet.infura.io/v3/${INFURA_KEY}`,
        [SupportedChainId.ARBITRUM_RINKEBY]: `https://arbitrum-rinkeby.infura.io/v3/${INFURA_KEY}`,
        [SupportedChainId.POLYGON]: `https://polygon-mainnet.infura.io/v3/${INFURA_KEY}`,
        [SupportedChainId.POLYGON_MUMBAI]: `https://polygon-mumbai.infura.io/v3/${INFURA_KEY}`,
        [SupportedChainId.BINANCE]: `https://bsc-dataseed1.defibit.io/`,
        [SupportedChainId.BINANCE_TESTNET]: `https://data-seed-prebsc-2-s1.binance.org:8545`,
    };

    const INFURA_WSS_URLS =  {
        [SupportedChainId.MAINNET]: `wss://mainnet.infura.io/ws/v3/${INFURA_KEY}`,
        [SupportedChainId.RINKEBY]: `wss://rinkeby.infura.io/ws/v3/${INFURA_KEY}`,
        [SupportedChainId.ROPSTEN]: `wss://ropsten.infura.io/v3/${INFURA_KEY}`,
        [SupportedChainId.GOERLI]: `wss://goerli.infura.io/v3/${INFURA_KEY}`,
        [SupportedChainId.KOVAN]: `wss://kovan.infura.io/v3/${INFURA_KEY}`,
    } ;

    return{
        INFURA_WSS_URLS,
        INFURA_NETWORK_URLS
    }

}
