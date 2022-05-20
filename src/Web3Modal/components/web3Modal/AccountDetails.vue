<template>
	<UpperSection>
		<CloseIcon @click.prevent="toggleWeb3Modal">
			<CloseColor />
		</CloseIcon>
		<HeaderRow>{{t('Account')}}</HeaderRow>
		<AccountSection>
			<YourAccount>
				<InfoCard>
					<AccountGroupingRow>
						<WalletName>{{t('Connected with')}} {{ connector.name }}</WalletName>
						<div>
							<WalletAction
								v-if="connector.type !== 'injected'"
								:style="{
                                    fontSize: '.825rem',
                                    fontWeight: 400,
                                    marginRight: '8px',
                                }"
								@click.prevent="logOut()"
							>{{t('Disconnect')}}</WalletAction>
							<WalletAction
								:style="{
                                    fontSize: '.825rem',
                                    fontWeight: 400,
                                }"
								@click.prevent="setWalletView('options')"
							>{{t('Change')}}</WalletAction>
						</div>
					</AccountGroupingRow>
					<AccountGroupingRow id="web3-account-identifier-row">
						<AccountControl>
							<div>
								<IconWrapper size="16">
									<Jazzicon
										v-if="connector.type === 'injected'"
										:diameter="24"
										:address="address"
									></Jazzicon>
									<img
										v-else
										:src="connector.logo"
										alt="wallet connect logo"
									/>
									<MainWalletAction
										v-if="connector.id === 'portis'"
										@click="connector._portis.showPortis()"
									>
										{{t('Show Portis')}}
									</MainWalletAction>
								</IconWrapper>
								<p v-if="ENSName">{{ ENSName }}</p>
								<p v-else>
									{{ address && shortenAddress(address) }}
								</p>
							</div>
						</AccountControl>
					</AccountGroupingRow>

					<AccountGroupingRow>
						<AccountControl>
							<div v-if="address">
								<Copy :to-copy="address">
									<span :style="{ marginLeft: '4px' }">Copy Address</span>
								</Copy>
								<AddressLink
									v-if="ensName"
									:has-e-n-s="!!ensName"
									:is-e-n-s="true"
									:href="
                                        getEtherscanLink(
                                            chainId,
                                            ensName,
                                            'address'
                                        )
                                    "
								>
									<LinkIcon size="16" />
									<span :style="{ marginLeft: '4px' }">View on Etherscan</span>
								</AddressLink>
								<AddressLink
									:has-e-n-s="!!ensName"
									:is-e-n-s="false"
									:href="
                                        getEtherscanLink(
                                            chainId,
                                            address,
                                            'address'
                                        )
                                    "
								>
									<LinkIcon size="16" />
									<span :style="{ marginLeft: '4px' }">View on Etherscan</span>
								</AddressLink>
							</div>
						</AccountControl>
					</AccountGroupingRow>
				</InfoCard>
			</YourAccount>
		</AccountSection>
	</UpperSection>
	<LowerSection v-if="txs.length > 0">
		<AutoRow
			mb="1rem"
			:style="{ justifyContent: 'space-between' }"
		>
			<TextWrapper type="body">Recent Transactions</TextWrapper>
			<LinkStyledButton @click.prevent="clearAllTransactions">(clear all)</LinkStyledButton>
		</AutoRow>
		<TransactionListWrapper>
			<Transaction
				v-for="tx in txs"
				:key="tx.hash"
				:link="getEtherscanLink(chainId, hash, 'transaction')"
				:tx="tx"
			></Transaction>
		</TransactionListWrapper>
	</LowerSection>
	<LowerSection v-else>
		<TextWrapper
			type="body"
			:color="theme.text1"
		>Your transactions will appear here...</TextWrapper>
	</LowerSection>
</template>
<script>
	// mixins

	import styled from "vue3-styled-components";
	import { AutoRow } from "@/Web3Modal/components/Row";
	import Copy from "./AccountDetails/Copy";
	import Transaction from "./AccountDetails/TxDetail.vue";
	import { ButtonSecondary } from "@/Web3Modal/components/Buttons";
	import {
		ExternalLinkIcon as LinkIcon,
		XIcon as Close,
	} from "@/Web3Modal/assets/icons";
	import ExternalLink from "@/Web3Modal/theme/ExternalLink";
	import { LinkStyledButton } from "@/Web3Modal/theme";
	import TextWrapper from "@/Web3Modal/theme/TextWrapper";
	import { computed } from "vue";
	import { shortenAddress } from "@/Web3Modal/utils";
	import { getExplorerLink as getEtherscanLink } from "@/Web3Modal/utils/getExplorerLink";
	import { allTxs as transactions } from "@/Web3Modal/hooks/useTxs";
	import { useWeb3ModalToggle } from "@/Web3Modal/hooks/useModalsToggle";
	const HeaderRow = styled.div`
		${({ theme }) => theme.flexRowNoWrap};
		padding: 1rem 1rem;
		font-weight: 500;
		color: ${(props) =>
			props.color === "blue" ? ({ theme }) => theme.primary1 : "inherit"};
		${({ theme }) => theme.mediaWidth.upToMedium`
	                            													    padding: 1rem;
	                            													  `};
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

	const InfoCard = styled.div`
		padding: 1rem;
		border: 1px solid ${({ theme }) => theme.bg3};
		border-radius: 20px;
		position: relative;
		display: grid;
		grid-row-gap: 12px;
		margin-bottom: 20px;
	`;

	const AccountGroupingRow = styled.div`
		${({ theme }) => theme.flexRowNoWrap};
		justify-content: space-between;
		align-items: center;
		font-weight: 400;
		color: ${({ theme }) => theme.text1};

		div {
			${({ theme }) => theme.flexRowNoWrap}
			align-items: center;
		}
	`;

	const AccountSection = styled.div`
		background-color: ${({ theme }) => theme.bg1};
		padding: 0rem 1rem;
		${({ theme }) =>
			theme.mediaWidth.upToMedium`padding: 0rem 1rem 1.5rem 1rem;`};
	`;

	const YourAccount = styled.div`
		h5 {
			margin: 0 0 1rem 0;
			font-weight: 400;
		}

		h4 {
			margin: 0;
			font-weight: 500;
		}
	`;

	const LowerSection = styled.div`
		${({ theme }) => theme.flexColumnNoWrap}
		padding: 1.5rem;
		flex-grow: 1;
		overflow: auto;
		background-color: ${({ theme }) => theme.bg2};
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;

		h5 {
			margin: 0;
			font-weight: 400;
			color: ${({ theme }) => theme.text3};
		}
	`;

	const AccountControl = styled.div`
		display: flex;
		justify-content: space-between;
		min-width: 0;
		width: 100%;

		font-weight: 500;
		font-size: 1.25rem;

		a:hover {
			text-decoration: underline;
		}

		p {
			min-width: 0;
			margin: 0;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	`;

	const AddressLink = styled(ExternalLink)`
		font-size: 0.825rem;
		color: ${({ theme }) => theme.text3};
		margin-left: 1rem;
		font-size: 0.825rem;
		display: flex;
		:hover {
			color: ${({ theme }) => theme.text2};
		}
	`;

	const CloseIcon = styled.div`
		position: absolute;
		right: 1rem;
		top: 14px;
		&:hover {
			cursor: pointer;
			opacity: 0.6;
		}
	`;

	const CloseColor = styled(Close)`
		path {
			stroke: ${({ theme }) => theme.text4};
		}
	`;

	const WalletName = styled.div`
		width: initial;
		font-size: 0.825rem;
		font-weight: 500;
		color: ${({ theme }) => theme.text3};
	`;

	const IconWrapper = styled("div", {
		size: { type: [Number, String], required: false, default: 32 },
	})`
		${({ theme }) => theme.flexColumnNoWrap};
		align-items: center;
		justify-content: center;
		margin-right: 8px;
		& > img,
		span {
			height: ${({ size }) => size + "px"};
			width: ${({ size }) => size + "px"};
		}
		${({ theme }) => theme.mediaWidth.upToMedium`
	                            													    align-items: flex-end;
	                            													  `};
	`;

	const TransactionListWrapper = styled.div`
		${({ theme }) => theme.flexColumnNoWrap};
	`;

	const WalletAction = styled(ButtonSecondary)`
		width: fit-content;
		font-weight: 400;
		margin-left: 8px;
		font-size: 0.825rem;
		padding: 4px 6px;
		:hover {
			cursor: pointer;
			text-decoration: underline;
		}
	`;

	const MainWalletAction = styled(WalletAction)`
		color: ${({ theme }) => theme.primary1};
	`;
	
	import { clearAllTransactions } from "@/Web3Modal/hooks/useTxs";
	import Jazzicon from "vue3-jazzicon/src/components";
	export default {
		components: {
			Jazzicon,
			MainWalletAction,
			WalletAction,
			TransactionListWrapper,
			IconWrapper,
			HeaderRow,
			UpperSection,
			InfoCard,
			AccountGroupingRow,
			WalletName,
			CloseColor,
			CloseIcon,
			AddressLink,
			AccountControl,
			LowerSection,
			YourAccount,
			AccountSection,
			AutoRow,
			Copy,
			Transaction,
			LinkIcon,
			LinkStyledButton,
			TextWrapper,
		},
		inject: ["setWalletView", "theme"],
		props: {
			address: {
				type: String,
				required: true,
			},
			chainId: {
				type: [Number, String],
				required: true,
			},
			connector: {
				type: Object,
				required: true,
			},
			ensName: {
				type: String,
				required: false,
			},
		},
		setup() {
			const txs = computed(() => Object.values(transactions.value));
			const { close: toggleWeb3Modal } = useWeb3ModalToggle();
			return {
				txs,
				toggleWeb3Modal,
				clearAllTransactions,
			};
		},
		data() {
			return {
				getEtherscanLink,
				shortenAddress,
			};
		},
         methods:{
             t(text){
                if(this.$t instanceof Function)
                return this.$t(text);
                return text;
            },
        }
	};
</script>
