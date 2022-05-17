import { Ether, NativeCurrency, Token } from "@uniswap/sdk-core";
import { computed } from "vue";
import { SupportedChainId } from "./chains";


export const useEther = (chainId) => computed(() => isMatic(chainId.value)
    ? new MaticNativeCurrency(chainId.value)
    : isBnb(chainId.value)
        ? new BnbNativeCurrency(chainId.value)
        : new Ether(chainId.value)) 


export const WRAPPED_NATIVE_CURRENCY = {

    [SupportedChainId.POLYGON]: new Token(
        SupportedChainId.POLYGON,
        "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
        18,
        "WMATIC",
        "Wrapped MATIC",
    ),
    [SupportedChainId.POLYGON_MUMBAI]: new Token(
        SupportedChainId.POLYGON_MUMBAI,
        "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",
        18,
        "WMATIC",
        "Wrapped MATIC",
    ),

    [SupportedChainId.BINANCE]: new Token(
        SupportedChainId.BINANCE,
        "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        18,
        "WBNB",
        "Wrapped BNC",
    ),
    [SupportedChainId.POLYGON_MUMBAI]: new Token(
        SupportedChainId.POLYGON_MUMBAI,
        "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        18,
        "WBNB",
        "Wrapped BNB",
    ),
};



export const isBnb = (chainId) => {
    return (
        chainId === SupportedChainId.BINANCE ||
        chainId === SupportedChainId.BINANCE_TESTNET
    );
}

export class BnbNativeCurrency extends NativeCurrency {
    equals(other) {
        return other.isNative && other.chainId === this.chainId;
    }

    get wrapped() {
        if (!isBnb(this.chainId)) throw new Error("Not BNB");
        return WRAPPED_NATIVE_CURRENCY[this.chainId];
    }

    constructor(chainId) {
        if (!isMatic(chainId)) throw new Error("Not BNB");
        super(chainId, 8, "BNB", "BNB");
    }
}


export const isMatic = (chainId) => {
    return (
        chainId === SupportedChainId.POLYGON_MUMBAI ||
        chainId === SupportedChainId.POLYGON
    );
}

export class MaticNativeCurrency extends NativeCurrency {
    equals(other) {
        return other.isNative && other.chainId === this.chainId;
    }

    get wrapped() {
        if (!isBnb(this.chainId)) throw new Error("Not BNB");
        return WRAPPED_NATIVE_CURRENCY[this.chainId];
    }
    constructor(chainId) {
        if (!isMatic(chainId)) throw new Error("Not matic");
        super(chainId, 18, "MATIC", "Polygon Matic");
    }
}
