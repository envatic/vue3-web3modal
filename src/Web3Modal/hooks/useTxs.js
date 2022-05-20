import { SupportedChainId as ChainId } from "../constants/chains";
import { reactive, computed, watch, ref } from "vue";
import { useActiveWeb3Vue } from "@/Web3Modal/hooks";
import { lastBlockNumber } from "@/Web3Modal/hooks/useBlockNumber";
import { useInfura } from "@/Web3Modal/hooks/useInfura";
import { useLocalStorage } from "@vueuse/core";
import { useEventBus } from "@vueuse/core";
const loading = reactive([]);
const { chainId: chain_id, account, isValidNetwork } = useActiveWeb3Vue();
export const txBus = useEventBus("transactions");
export const transactions = useLocalStorage("transactions", {
    [ChainId.MAINNET]: {},
    [ChainId.ROPSTEN]: {},
    [ChainId.RINKEBY]: {},
    [ChainId.GOERLI]: {},
    [ChainId.KOVAN]: {},
    [ChainId.ARBITRUM_ONE]: {},
    [ChainId.ARBITRUM_RINKEBY]: {},
    [ChainId.OPTIMISM]: {},
    [ChainId.OPTIMISTIC_KOVAN]: {},
    [ChainId.POLYGON]: {},
    [ChainId.POLYGON_MUMBAI]: {},
    [ChainId.BINANCE]: {},
    [ChainId.BINANCE_TESTNET]: {},
});
const isActive = ref(false);
export const addTransaction = ({
    hash,
    onSuccess,
    onError,
    summary,
    approval
}) => {
    if (transactions.value[chain_id.value]?.[hash]) {
        throw Error("Attempted to add existing transaction.");
    }
    const txs = transactions.value[chain_id.value] ?? {};

    txs[hash] = {
        onSuccess,
        onError,
        hash,
        summary,
        approval,
        from: account,
        lastCheckedBlockNumber: null,
        addedTime: new Date().getTime(),
        checked: new Date().getTime(),
        receipt: null,
        confirmedTime: null,
    };
    transactions.value[chain_id.value] = txs;
};

export const clearAllTransactions = () => {
    if (!transactions.value[chain_id.value]) return;
    transactions.value[chain_id.value ?? ChainId.MAINNET] = {};
};

export const checkedTransaction = ({ hash, blockNumber }) => {
    const tx = transactions.value[chain_id.value]?.[hash];
    if (!tx) return;
    tx.checked = new Date().getTime();
    if (!tx.lastCheckedBlockNumber)
        return (tx.lastCheckedBlockNumber = blockNumber);
    return (tx.lastCheckedBlockNumber = Math.max(
        blockNumber,
        tx.lastCheckedBlockNumber,
    ));
};

export const finalizeTransaction = ({ hash, receipt }) => {
    const tx = transactions.value[chain_id.value]?.[hash];
    if (!tx) return;
    tx.receipt = receipt;
    tx.confirmedTime = new Date().getTime();
    if (tx.onSuccess && tx.onSuccess instanceof Function) tx.onSuccess(receipt);
    txBus.emit(tx.hash,{
        ...tx,
        receipt,
        error:null,
    })
};

export const failTransaction = ({ hash, error }) => {
    const tx = transactions.value[chain_id.value]?.[hash];
    if (!tx) return;
    if (tx.onError && tx.onError instanceof Function) tx.onError(error);
    txBus.emit(tx.hash, {
        ...tx,
        error,
        receipt: null
    })
};

export const allTxs = computed(
    () => transactions.value[chain_id.value ?? ChainId.MAINNET],
);

export const pendingTxs = computed(() => {
    const txs = transactions.value[chain_id.value ?? ChainId.MAINNET];
    return Object.fromEntries(
        Object.entries(txs).filter(([, tx]) => !tx.receipt),
    );
})


export function useIsTransactionPending(hash) {
    return computed(() => {
        if (!hash || !allTxs.value[hash]) return false;
        return !allTxs.value[hash].receipt;
    });
}

/**
 * Returns whether a transaction happened in the last day (86400 seconds * 1000 milliseconds / second)
 * @param tx to check for recency
 */
export function isTransactionRecent(tx) {
    return new Date().getTime() - tx.addedTime < 86_400_000;
}



function shouldCheck(tx) {
    if (tx.receipt) return false;
    if (!tx.lastCheckedBlockNumber) return true;
    const blocksSinceCheck = lastBlockNumber.value - tx.lastCheckedBlockNumber;
    //if (blocksSinceCheck < 1) return false; 
    const waited = (new Date().getTime() - tx.checked) / 1000 / 60;
    if (waited > 5) return true;
    const minutesPending = (new Date().getTime() - tx.addedTime) / 1000 / 60;
    if (minutesPending > 10) {
        // every 10 blocks if pending for longer than an hour
        return blocksSinceCheck > 9;
    }
    if (minutesPending > 10) {
        // every 2 blocks if pending more than 20 minutes
        return blocksSinceCheck > 2;
    }
    return true;
}

export const checkTransaction = (hash) => {
    const { infuraWss: infura } = useInfura();
    let loadingIndex = loading.push(hash);
    infura.value.eth
        .getTransactionReceipt(hash)
        .then((receipt) => {
            loading.splice(loadingIndex - 1, 1);
            if (receipt) {
                finalizeTransaction({
                    hash: receipt.transactionHash,
                    receipt: receipt,
                });
            } else {
                checkedTransaction({
                    hash,
                    blockNumber: lastBlockNumber,
                });
            }
        })
        .catch((error) => {
            loading.splice(loadingIndex - 1, 1);
            failTransaction({
                hash,
                error,
            });
        });
};

export const Updater = () => {
    if (isActive.value) return;
    isActive.value = true;
    const { infuraWss: infura } = useInfura();
    watch(
        [lastBlockNumber, isValidNetwork],
        (lastBlockNumber, isValidNetwork) => {
            if (
                !isValidNetwork ||
                !chain_id.value ||
                !infura.value ||
                !lastBlockNumber
            ) {
                console.log(`check tx failed isValidNetwork: ${isValidNetwork}
				chain_id.value: ${chain_id.value} infura: ${infura.value} lastBlockNumber: ${lastBlockNumber}`);
                return;
            }
            Object.keys(pendingTxs.value)
                .filter((hash) => !loading.includes(hash))
                .filter((hash) => shouldCheck(pendingTxs.value[hash]))
                .forEach((hash) => {
                    checkTransaction(hash);
                });
        },
    );
    return null;
};

export const useTransactions = ()=>({
    transactions:allTxs,
    addTransaction,
    pending: pendingTxs,
    bus:txBus
})