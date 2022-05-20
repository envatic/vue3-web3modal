import { reactive, toRefs, computed } from "vue";
import { getProviderInfo } from "@envatic/web3modal-ts";
import { asyncComputed } from "@vueuse/core";
import { SupportedChainId } from "@/Web3Modal/constants/chains";


const state = reactive({
    provider: null,
    etherjs: null,
    web3: null,
    chainId: null,
    account: null,
    accounts: [],
    requesting:false, 
    active: null,
    error: "",
    etherBalance:null,
});

export const isValidNetwork = computed(() => {
    if (state.chainId == null) return false;
    return Object.values(SupportedChainId).includes(state.chainId);
});

const providerInfo = computed(() =>
    state.provider ? getProviderInfo(state.provider) : null,
);

export const useActiveWeb3Vue = () =>{
    return {
        ...toRefs(state),
        providerInfo,
        isValidNetwork,
        
    }
};

const useEtherBalance = () =>  asyncComputed(async () => {
    if (!state.chainId) return 0;
    if (!!state.account || !!state.web3 || !!state.chainId) {
        const bal = await state.web3.eth.getBalance(state.account);
        return state.web3.utils.fromWei(bal.toString());
    }
    return 0;
});

export const setBalance = () => state.etherBalance = useEtherBalance();
export const activate = () => (state.active = true);
export const deactivate = () =>{
    state.active = false
    state.address = null
};
export const setError = (error) => (state.error = error ?? "");
export const setProvider = (provider) => (state.provider = provider);
export const setLibrary = (etherjs) => (state.etherjs = etherjs);
export const setWeb3 = (web3) => (state.web3 = web3);
export const setChainId = (chainId) => (state.chainId = chainId);
export const setAccount = (account) => (state.account = account);
export const setAccounts = (accounts) => (state.accounts = accounts);
