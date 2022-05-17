import {asyncComputed} from "@vueuse/core";
import {useActiveWeb3Vue} from "./index";
const {account, web3, chainId} = useActiveWeb3Vue();
import JSBI from 'jsbi'
import { useEther } from "../constants/ETHER";
import { CurrencyAmount } from "@uniswap/sdk-core";
export const BIG_INT_ZERO = JSBI.BigInt(0);
export const etherBalance = asyncComputed(async () => {
    const ETHER = useEther(chainId.value);
	if(chainId.value == 0 ||chainId.value == null ) return CurrencyAmount.ether(BIG_INT_ZERO);
	if (!!account.value || !!web3.value || !!chainId.value){
		const bal = await web3.value.eth.getBalance(account.value);
        return CurrencyAmount.fromRawAmount(ETHER.value, JSBI.BigInt(bal.toString()));
	}
    return null;
});

export const useEtherBalance = () => ({etherBalance})
