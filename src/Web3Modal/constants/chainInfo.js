import ethereumLogoUrl from "../assets/images/ethereum-logo.svg";
import arbitrumLogoUrl from "../assets/svg/arbitrum_logo.svg";
import optimismLogoUrl from "../assets/svg/optimistic_ethereum.svg";
import polygonMaticLogo from "../assets/svg/polygon-matic-logo.svg";
import binanceLogo from "../assets/svg/binance-logo.svg";
import ms from "ms.macro";
import { SupportedChainId } from "./chains";
export const NetworkType = Object.freeze({
    L1: Symbol("l1"),
    L2: Symbol("l2"),
});

export const CHAIN_INFO = {
    [SupportedChainId.MAINNET]: {
        networkType: NetworkType.L1,
        docs: "https://docs.uniswap.org/",
        explorer: "https://etherscan.io/",
        infoLink: "https://info.uniswap.org/#/",
        label: "Ethereum",
        logoUrl: ethereumLogoUrl,
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    },
    [SupportedChainId.RINKEBY]: {
        networkType: NetworkType.L1,
        docs: "https://docs.uniswap.org/",
        explorer: "https://rinkeby.etherscan.io/",
        infoLink: "https://info.uniswap.org/#/",
        label: "Rinkeby",
        logoUrl: ethereumLogoUrl,
        nativeCurrency: { name: "Rinkeby Ether", symbol: "rETH", decimals: 18 },
    },
    [SupportedChainId.ROPSTEN]: {
        networkType: NetworkType.L1,
        docs: "https://docs.uniswap.org/",
        explorer: "https://ropsten.etherscan.io/",
        infoLink: "https://info.uniswap.org/#/",
        label: "Ropsten",
        logoUrl: ethereumLogoUrl,
        nativeCurrency: { name: "Ropsten Ether", symbol: "ropETH", decimals: 18 },
    },
    [SupportedChainId.KOVAN]: {
        networkType: NetworkType.L1,
        docs: "https://docs.uniswap.org/",
        explorer: "https://kovan.etherscan.io/",
        infoLink: "https://info.uniswap.org/#/",
        label: "Kovan",
        logoUrl: ethereumLogoUrl,
        nativeCurrency: { name: "Kovan Ether", symbol: "kovETH", decimals: 18 },
    },
    [SupportedChainId.GOERLI]: {
        networkType: NetworkType.L1,
        docs: "https://docs.uniswap.org/",
        explorer: "https://goerli.etherscan.io/",
        infoLink: "https://info.uniswap.org/#/",
        label: "Görli",
        logoUrl: ethereumLogoUrl,
        nativeCurrency: { name: "Görli Ether", symbol: "görETH", decimals: 18 },
    },
    [SupportedChainId.OPTIMISM]: {
        networkType: NetworkType.L2,
        blockWaitMsBeforeWarning: ms`25m`,
        bridge: "https://gateway.optimism.io/?chainId=1",
        docs: "https://optimism.io/",
        explorer: "https://optimistic.etherscan.io/",
        infoLink: "https://info.uniswap.org/#/optimism/",
        label: "Optimism",
        logoUrl: optimismLogoUrl,
        statusPage: "https://optimism.io/status",
        helpCenterUrl:
            "https://help.uniswap.org/en/collections/3137778-uniswap-on-optimistic-ethereum-oξ",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    },
    [SupportedChainId.OPTIMISTIC_KOVAN]: {
        networkType: NetworkType.L2,
        blockWaitMsBeforeWarning: ms`25m`,
        bridge: "https://gateway.optimism.io/",
        docs: "https://optimism.io/",
        explorer: "https://kovan-optimistic.etherscan.io/",
        infoLink: "https://info.uniswap.org/#/optimism/",
        label: "Optimistic Kovan",
        logoUrl: optimismLogoUrl,
        statusPage: "https://optimism.io/status",
        helpCenterUrl:
            "https://help.uniswap.org/en/collections/3137778-uniswap-on-optimistic-ethereum-oξ",
        nativeCurrency: {
            name: "Optimistic Kovan Ether",
            symbol: "kovOpETH",
            decimals: 18,
        },
    },
    [SupportedChainId.ARBITRUM_ONE]: {
        networkType: NetworkType.L2,
        blockWaitMsBeforeWarning: ms`10m`,
        bridge: "https://bridge.arbitrum.io/",
        docs: "https://offchainlabs.com/",
        explorer: "https://arbiscan.io/",
        infoLink: "https://info.uniswap.org/#/arbitrum",
        label: "Arbitrum",
        logoUrl: arbitrumLogoUrl,
        helpCenterUrl:
            "https://help.uniswap.org/en/collections/3137787-uniswap-on-arbitrum",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    },
    [SupportedChainId.ARBITRUM_RINKEBY]: {
        networkType: NetworkType.L2,
        blockWaitMsBeforeWarning: ms`10m`,
        bridge: "https://bridge.arbitrum.io/",
        docs: "https://offchainlabs.com/",
        explorer: "https://testnet.arbiscan.io/",
        infoLink: "https://info.uniswap.org/#/arbitrum/",
        label: "Arbitrum Rinkeby",
        logoUrl: arbitrumLogoUrl,
        helpCenterUrl:
            "https://help.uniswap.org/en/collections/3137787-uniswap-on-arbitrum",
        nativeCurrency: {
            name: "Rinkeby Arbitrum Ether",
            symbol: "rinkArbETH",
            decimals: 18,
        },
    },
    [SupportedChainId.POLYGON]: {
        networkType: NetworkType.L1,
        blockWaitMsBeforeWarning: ms`10m`,
        bridge: "https://wallet.polygon.technology/bridge",
        docs: "https://polygon.io/",
        explorer: "https://polygonscan.com/",
        infoLink: "https://info.uniswap.org/#/polygon/",
        label: "Polygon",
        logoUrl: polygonMaticLogo,
        nativeCurrency: { name: "Polygon Matic", symbol: "MATIC", decimals: 18 },
    },
    [SupportedChainId.POLYGON_MUMBAI]: {
        networkType: NetworkType.L1,
        blockWaitMsBeforeWarning: ms`10m`,
        bridge: "https://wallet.polygon.technology/bridge",
        docs: "https://polygon.io/",
        explorer: "https://mumbai.polygonscan.com/",
        infoLink: "https://info.uniswap.org/#/polygon/",
        label: "Polygon Mumbai",
        logoUrl: polygonMaticLogo,
        nativeCurrency: {
            name: "Polygon Mumbai Matic",
            symbol: "mMATIC",
            decimals: 18,
        },
    },
    [SupportedChainId.BINANCE]: {
        networkType: NetworkType.L1,
        blockWaitMsBeforeWarning: ms`10m`,
        docs: "https://www.binance.com",
        explorer: "https://www.bscscan.com/",
        infoLink: "https://www.binance.com",
        label: "Binance Smart Chain",
        logoUrl: binanceLogo,
        nativeCurrency: {
            name: "BNB",
            symbol: "BNB",
            decimals: 8,
        },
    },
    [SupportedChainId.BINANCE_TESTNET]: {
        networkType: NetworkType.L1,
        blockWaitMsBeforeWarning: ms`10m`,
        docs: "https://testnet.binance.org/en/",
        explorer: "https://testnet.bscscan.com/",
        infoLink: "https://testnet.binance.org/en/",
        label: "Binance Test Chain",
        logoUrl: binanceLogo,
        nativeCurrency: {
            name: "BNB",
            symbol: "TBNB",
            decimals: 8,
        },
    }
};
