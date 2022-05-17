export { default as Web3Manager } from './Web3Modal/Web3Manager/Web3Manager.vue'
export { default as Web3Modal } from './Web3Modal/components/web3Modal/Web3Modal.vue'
export {createWeb3} from './createWeb3';
export {
    useActiveWeb3Vue,
    useWeb3ModalToggle,
    useTxHash as useTxLink,
    useAddress,
    addTransaction,
    useBlockNumber,
    useBlockTime,
    useTransactions,
} from './Web3Modal/hooks'
export {
    useEther,
} from './Web3Modal/constants'
export { toggleDark, setDarkMode, darkMode} from './Web3Modal/theme/index'