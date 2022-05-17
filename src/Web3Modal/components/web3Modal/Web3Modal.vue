<template>
	<ModalOverlay :is-open="showing">
		<wrapper v-show="showing">
			<UpperSection v-if="error">
				<CloseIcon @click.prevent="closeWeb3Modal">
					<CloseColor />
				</CloseIcon>
				<HeaderRow> {{t('Error Connecting')}}</HeaderRow>
				<ContentWrapper>
					<h5> {{t('Error connecting. Try refreshing the page')}} </h5>
				</ContentWrapper>
			</UpperSection>
			<UpperSection v-if="!isValidNetwork">
				<CloseIcon @click.prevent="closeWeb3Modal">
					<CloseColor />
				</CloseIcon>
				<HeaderRow>{{t('Invalid Network')}}</HeaderRow>
				<ContentWrapper>
					<h5>{{t('Your Wallets Network is not supported')}}</h5>
				</ContentWrapper>
			</UpperSection>
			<AccountDetails
				v-else-if="isValidNetwork && connected && active && walletView === 'account'"
				:connector="provider"
				:ens-name="ENSName"
				:address="account"
				:chain-id="chainId"
			></AccountDetails>
			<UpperSection v-else>
				<CloseIcon @click.prevent="closeWeb3Modal">
					<CloseColor />
				</CloseIcon>
				<HeaderRow
					v-if="connected && active && walletView !== 'account'"
					color="blue"
				>
					<HoverText @click.prevent="goBAck()"> {{t('Back')}} </HoverText>
				</HeaderRow>
				<HeaderRow v-else>
					<HoverText>{{t('Connect to a wallet')}}</HoverText>
				</HeaderRow>
				<ContentWrapper v-if="walletView === 'pending'">
					<PendingView
						:connector="pendingWallet"
						:error="pendingError"
					></PendingView>
				</ContentWrapper>
				<ConnectModal
					v-else
					:provider="provider"
					:providers="providers"
				></ConnectModal>
			</UpperSection>
		</wrapper>
	</ModalOverlay>
</template>
<script>
	import { parseSendReturn } from "@/Web3Modal/utils/providerOptions";
	import _debounce from "lodash/debounce";
	import _find from "lodash/find";
	import styled from "vue3-styled-components";
	import { XIcon as Close } from "vue3-feather";
	import { ContentWrapper } from "@/Web3Modal/theme";
	import AccountDetails from "./AccountDetails";
	import ConnectModal from "./ConnectModal";
	import ModalOverlay from "@/Web3Modal/components/Modal.vue";
	import PendingView from "./PendingView";
	import Web3 from "web3";
	import { ref, reactive } from "vue";
	import { blockUpdater } from "@/Web3Modal/hooks/useBlockNumber";
	import { Updater as TxUpdater } from "@/Web3Modal/hooks/useTxs";
	import {
		useActiveWeb3Vue,
		activate,
		deactivate,
		setError,
		setProvider,
		setLibrary,
		setWeb3,
		setChainId,
		setAccount,
		setAccounts,
        setBalance,
	} from "@/Web3Modal/hooks";
	import { isMobile } from "mobile-device-detect";
	import { useWeb3ModalToggle } from "@/Web3Modal/hooks/useModalsToggle";
	import detectEthereumProvider from "@metamask/detect-provider";
	import {
		Web3WalletConnector,
		getInjectedProvider,
		getProviderInfoByName,
		getProviderInfo,
		CONNECT_EVENT,
		ERROR_EVENT,
	} from "@envatic/web3modal-ts";
	import { computed } from "vue";
	import { useProviderOptions } from "@/Web3Modal/hooks/useProvider";
	const CloseIcon = styled.div`
		position: absolute;
		right: 1rem;
		top: 14px;
		color: ${({ theme }) => theme.text4};
		&:hover {
			cursor: pointer;
			opacity: 0.6;
		}
	`;
	const CloseColor = styled(Close, {
		size: Number,
	})`
		path {
			stroke: ${({ theme }) => theme.text4};
		}
	`;
	const Wrapper = styled.div`
		${({ theme }) => theme.flexColumnNoWrap}
		margin: 0;
		padding: 0;
		width: 100%;
	`;

	const HeaderRow = styled.div`
		${({ theme }) => theme.flexRowNoWrap};
		padding: 1rem 1rem;
		font-weight: 500;
		color: ${(props) =>
			props.color === "blue" ? ({ theme }) => theme.primary1 : "inherit"};
		${({ theme }) => theme.mediaWidth.upToMedium` padding: 1 rem; `};
	`;

	const UpperSection = styled.div`
		position: relative;
		h5 {
			margin: 0;
			margin-bottom: 0.5rem;
			font-size: 1rem;
			font-weight: 400;
		}
		h5:last-child {
			margin-bottom: 0px;
		}
		h4 {
			margin-top: 0;
			font-weight: 500;
		}
	`;

	const HoverText = styled.div`
		:hover {
			cursor: pointer;
		}
	`;

	export default {
		components: {
			UpperSection,
			HoverText,
			ContentWrapper,
			HeaderRow,
			ModalOverlay,
			Wrapper,
			CloseIcon,
			ConnectModal,
			CloseColor,
			AccountDetails,
			PendingView,
		},
		provide() {
			return {
				retryConnection: this.retryConnection,
				selectProvider: this.selectProvider,
				onClose: this.closeWeb3Modal,
				onDismiss: this.closeWeb3Modal,
				setWalletView: this.setWalletView,
			};
		},
		setup() {
			const { isOpen: show, close: closeWeb3Modal } = useWeb3ModalToggle();
			const providerOptions = useProviderOptions();
			blockUpdater();
			TxUpdater();
			const options = reactive({
				cacheProvider: true,
				disableInjectedProvider: false,
				providerOptions,
				network: "",
			});
            setBalance();
			const {
				etherBalance,
				provider,
				etherjs,
				web3,
				chainId,
				account,
				active,
				error,
				isValidNetwork,
				accountEns: ENSName,
			} = useActiveWeb3Vue();
			const connected = computed(() => !!web3?.value ?? null);
			const walletView = ref(connected.value ? "account" : "options");
			return {
				connected,
				ENSName,
				account,
				walletView,
				chainId,
				show,
				isValidNetwork,
				closeWeb3Modal,
				isMobile,
				etherBalance,
				provider,
				etherjs,
				web3,
				active,
				error,
				activate,
				deactivate,
				setError,
				setProvider,
				setLibrary,
				setWeb3,
				setChainId,
				setAccount,
				setAccounts,
				options,
				useActiveWeb3Vue,
			};
		},
		data() {
			return {
				colors: {
					WalletConnect: "#4196FC",
					Coinbase: "#315CF5",
					Portis: "#4A6C9B",
					Fortmatic: "#6748FF",
					Squarelink: "#3964df",
					Torus: "#006be8",
					Arkane: "#b5289e",
					Authereum: "#252A68",
					"Burner Connect": "#c5a66d",
					UniLogin: "#0f0c4a",
					"MEW wallet": "#003945",
					"D'CENT": "#298a88",
					MetaMask: "#E8831D",
					Safe: "#282c34",
					Nifty: "#5B2DA7",
					Dapper: "#2F1D56",
					Opera: "#000",
					Trust: "#105baa",
					imToken: "#468BDF",
					Status: "#4360DF",
					Tokenary: "#2C7CF5",
				},
				availableProviders: [],
				pendingWallet: null,
				showing: false,
				web3walletConnector: {},
				providerController: {},
			};
		},
		computed: {
			providers() {
				return this.availableProviders.reduce((memo, provider) => {
					const providerInfo = getProviderInfoByName(provider.name);
                    console.log(this.providerInfo.name , providerInfo.name)
					memo[provider.name] = {
						...providerInfo,
						...provider,
						mobile: true,
						color: this.colors[provider.name] ?? "#000",
						active: this.providerInfo.id == providerInfo.id,
					};
					return memo;
				}, {});
			},

			cachedProvider() {
				return this.providerController.cachedProvider;
			},

			providerInfo() {
				return getProviderInfo(this.web3);
			},
			pendingError() {
				return this.error.length > 0;
			},
		},
		watch: {
			show(nowShowing, wasShown) {
				if (nowShowing && !wasShown) {
					this.showing = nowShowing;
					this.setError(null);
					this.providerIsAuthorized(this.web3).then((provider) => {
						if (provider && this.active && this.connected)
							this.walletView = "account";
						else this.walletView = "options";
					});
				} else {
					this.showing = nowShowing;
				}
			},
		},

		created() {
			this.web3walletConnector = new Web3WalletConnector(this.options);
			this.providerController = this.web3walletConnector.providerController;
			this.providerController.on(CONNECT_EVENT, (provider) =>
				this.onConnect(provider)
			);
			this.providerController.on(ERROR_EVENT, (error) => this.onError(error));
			this.availableProviders = this.providerController.getUserOptions();
			return this._onConnect(); // connect minus permissions
		},

		methods: {
			t(text) {
				if (this.$t instanceof Function) return this.$t(text);
				return text;
			},
			setWalletView(view) {
				this.walletView = view;
			},
			clearCachedProvider() {
				return this.providerController.clearCachedProvider();
			},
			async selectProvider(provider) {
				// user selected a provider
				if (provider.active && this.active) return false;
				this.pendingWallet = provider;
				this.walletView = "pending";
				return provider.onClick();
			},

			async retryConnection() {
				// user selected a provider
				this.setError(null);
				return this.pendingWallet.onClick();
			},

			async connect() {
				this.setError(null);
				this.walletView = this.connected ? "account" : "options";
				return await this.connectWeb3();
			},

			async connectWeb3() {
				if (this.cachedProvider) {
					this.pendingWallet = _find(
						this.providers,
						(p) => p.id == this.cachedProvider
					);
					await this.providerController.connectToCachedProvider();
					return;
				}

				if (
					// only one provider
					this.providers &&
					this.providers.length === 1 &&
					this.providers[0].name
				) {
					await this.providers[0].onClick();
					return;
				}
			},

			onError(error) {
				this.setError(error ?? "Connection Failed");
			},

			initWeb3(provider) {
				const web3 = new Web3(provider);
				web3.eth.extend({
					methods: [
						{
							name: "chainId",
							call: "eth_chainId",
							outputFormatter: web3.utils.hexToNumber,
						},
					],
				});
				return web3;
			},

			onConnect: _debounce(
				async function (provider) {
					const web3 = this.initWeb3(provider);
					this.setWeb3(web3);
					await this.subscribeProvider(provider);
					const accounts = await this.web3.eth.getAccounts();
					//this.networkId = await this.web3.eth.net.getId();
					const chainId = await this.web3.eth.chainId();
					this.setChainId(this.web3.utils.hexToNumber(chainId) ?? null);
					this.setProvider(this.pendingWallet);
					this.setAccount(accounts[0] ?? null);
					this.setAccounts(accounts ?? []);
					this.activate();
					if (this.showing) {
						this.closeWeb3Modal();
						this.walletView = "account";
					}
				},
				200,
				{ leading: true }
			),

			async _onConnect() {
				const ethereum = await detectEthereumProvider();
				if (!ethereum) return false;
				if (
					this.isMobile &&
					this.providers &&
					this.providers.length === 1 &&
					this.providers[0].name
				) {
					await this.providers[0].onClick();
					return;
				}
				const web3 = this.initWeb3(ethereum);
				const provider = await this.providerIsAuthorized(web3);
				if (provider && this.cachedProvider == "injected") {
					return this.connectWeb3(); // automatically login
				}
				this.setWeb3(web3);
				await this.subscribeProvider(ethereum);
				this.setProvider(getInjectedProvider());
				this.networkId = await this.web3.eth.net.getId();
				const chainId = await this.web3.eth.chainId();
				this.setChainId(this.web3.utils.hexToNumber(chainId) ?? null);
				this.deactivate(); //ensure nothing that requires user permission runs
			},

			async subscribeProvider(provider) {
				if (!provider.on || window.ethereum.isTrust) {
					return;
				}
				provider.on("accountsChanged", (accounts) => {
					this.setAccount(accounts[0] ?? null);
				});
				provider.on("chainChanged", async (chainId) => {
					let chainsNo = this.web3.utils.hexToNumber(chainId) ?? null;
					this.setChainId(chainsNo);
				});
			},
			goBAck() {
				this.walletView = "account";
			},

			async providerIsAuthorized(web3) {
				if (!web3) return undefined;
				try {
                    const response = await web3.currentProvider.request({ method: "eth_requestAccounts" });
                    if (parseSendReturn(response).length > 0) return true;
                    return false;
				} catch (e) {
					return false;
				}
			},
		},
	};
</script>
