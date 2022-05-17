
<script >
	import { darken } from "polished";
	import { ActivityIcon as Activity } from "vue3-feather";
	import styled, { css } from "vue3-styled-components";
	import { useActiveWeb3Vue } from "../hooks";
	import { useWeb3ModalToggle } from "../hooks/useModalsToggle";
	import {
		isTransactionRecent,
		allTxs as allTransactions,
		pendingTxs as pending,
	} from "../hooks/useTxs";
	import { shortenAddress } from "../utils";
	import { ButtonSecondary } from "../components/Buttons";
	import StatusIcon from "../Identicon/StatusIcon.vue";
	import Loader from "../Loader.vue";
	import { RowBetween } from "../components/Row";
	import { computed } from "@vue/runtime-core";
	import { useMediaQuery } from "@vueuse/core";
	const PendingLoader = styled(Loader)`
		margin-top: 4px;
	`;
	const IconWrapper = styled("div", { size: Number })`
		${({ theme }) => theme.flexColumnNoWrap};
		align-items: center;
		justify-content: center;
		& > * {
			height: ${({ size }) => (size ? size + "px" : "32px")};
			width: ${({ size }) => (size ? size + "px" : "32px")};
		}
	`;
	const Web3StatusGeneric = styled(ButtonSecondary)`
		${({ theme }) => theme.flexRowNoWrap}
		width: 100%;
		align-items: center;
		padding: 0.5rem;
		border-radius: 14px;
		cursor: pointer;
		user-select: none;
		height: 36px;
		margin-right: 2px;
		margin-left: 1px;
		:focus {
			outline: none;
		}
	`;
	const Web3StatusError = styled(Web3StatusGeneric)`
		background-color: ${({ theme }) => theme.red1};
		border: 1px solid ${({ theme }) => theme.red1};
		color: ${({ theme }) => theme.white};
		font-weight: 500;
		:hover,
		:focus {
			background-color: ${({ theme }) => darken(0.1, theme.red1)};
		}
	`;

	const Web3StatusConnect = styled(Web3StatusGeneric, { faded: Boolean })`
		background-color: ${({ theme }) => theme.primary4};
		border: none;

		color: ${({ theme }) => theme.primaryText1};
		font-weight: 500;

		:hover,
		:focus {
			border: 1px solid ${({ theme }) => darken(0.05, theme.primary4)};
			color: ${({ theme }) => theme.primaryText1};
		}

		${({ faded }) =>
			faded &&
			css`
				background-color: ${({ theme }) => theme.primary5};
				border: 1px solid ${({ theme }) => theme.primary5};
				color: ${({ theme }) => theme.primaryText1};

				:hover,
				:focus {
					border: 1px solid ${({ theme }) => darken(0.05, theme.primary4)};
					color: ${({ theme }) => darken(0.05, theme.primaryText1)};
				}
			`}
	`;

	const Web3StatusConnected = styled(Web3StatusGeneric, { pending: Boolean })`
		background-color: ${({ pending, theme }) =>
			pending ? theme.primary1 : theme.bg1};
		border: 1px solid
			${({ pending, theme }) => (pending ? theme.primary1 : theme.bd1)};
		color: ${({ pending, theme }) => (pending ? theme.white : theme.text1)};
		font-weight: 600;
		:hover,
		:focus {
			border: 1px solid ${({ theme }) => darken(0.05, theme.bd3)};
			:focus {
				border: 1px solid
					${({ pending, theme }) =>
						pending
							? darken(0.1, theme.primary1)
							: darken(0.1, theme.bg2)};
			}
		}
	`;

	const Text = styled.p`
		flex: 1 1 auto;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin: 0 0.5rem 0 0.25rem;
		font-size: 1rem;
		width: fit-content;
		font-weight: 500;
	`;

	const NetworkIcon = styled(Activity)`
		margin-left: 0.25rem;
		margin-right: 0.5rem;
		width: 16px;
		height: 16px;
	`;

	export default {
		components: {
			Web3StatusError,
			IconWrapper,
			Web3StatusConnect,
			Web3StatusConnected,
			Text,
			NetworkIcon,
			StatusIcon,
			PendingLoader,
			RowBetween,
		},

		setup() {
			function newTransactionsFirst(a, b) {
				return b.addedTime - a.addedTime;
			}
			const {
				accountEns: ENSName,
				account,
				error,
				active,
				isValidNetwork,
			} = useActiveWeb3Vue();
			const sortedRecentTransactions = computed(() => {
				const txs = Object.values(allTransactions?.value ?? {});
				return txs.filter(isTransactionRecent).sort(newTransactionsFirst);
			});
			const hasPendingTransactions = computed(
				() => !!Object.keys(pending.value).length
			);
			const pendingLength = computed(() => Object.keys(pending.value).length);
			const { toggle: toggleWalletModal, isOpen } = useWeb3ModalToggle();
			const confirmed = computed(
				() =>
					sortedRecentTransactions?.value
						?.filter((tx) => tx.receipt)
						?.map((tx) => tx.hash) ?? []
			);
			const isMobileScreen = useMediaQuery("(min-width: 768)");
			return {
				confirmed,
				isOpen,
				isMobileScreen,
				toggleWalletModal,
				hasPendingTransactions,
				active,
				error,
				account,
				ENSName,
				isValidNetwork,
				shortenAddress,
				pending,
				pendingLength,
			};
		},
	};
</script>
<template>
	<Web3StatusError v-if="!isValidNetwork">
		<NetworkIcon />
		<Text>{{$t('Wrong Network')}}</Text>
	</Web3StatusError>
	<template v-else>

		<Web3StatusConnected
			v-if="active && !!account"
			id="web3-status-connected"
			:pending="hasPendingTransactions"
			@click="toggleWalletModal"
		>

			<RowBetween v-if="hasPendingTransactions">
				<Text>
					{{ pendingLength }} {{$$t('Pending')}}
				</Text>{{' '}}
				<PendingLoader stroke="white" />
			</RowBetween>
			<Text v-else>{{ENSName || shortenAddress(account)}}</Text>
			<IconWrapper
				v-if="!hasPendingTransactions && active"
				:size="16"
			>
				<StatusIcon />
			</IconWrapper>

		</Web3StatusConnected>
		<Web3StatusError
			v-else-if="error"
			@click="toggleWalletModal"
		>
			<NetworkIcon />
			<Text v-if="!!error">{{error}}</Text>
		</Web3StatusError>
		<Web3StatusConnect
			v-else
			id="connect-wallet"
			:faded="!account"
			@click="toggleWalletModal"
		>
			<Text>
				{{$t('Connect')}} <template v-if="!isMobileScreen">{{$t('Wallet')}}</template>
			</Text>
		</Web3StatusConnect>
	</template>
</template>