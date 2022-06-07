<template>
	<TransactionWrapper>
		<TransactionState
			:href="link"
			:pending="pending"
			:success="success"
		>
			<RowFixed>
				<TransactionStatusText>{{tx.summary?tx.summary:tx.hash}} ↗</TransactionStatusText>
			</RowFixed>
			<IconWrapper
				:pending="pending"
				success="success"
			>
				<Loader v-if="pending"></Loader>
				<CheckCircleIcon
					v-else-if="success"
					:size="16"
				></CheckCircleIcon>
				<TriangleIcon
					v-else
					:size="16"
				></TriangleIcon>
			</IconWrapper>
		</TransactionState>
	</TransactionWrapper>
</template>

<script>
	import styled from "vue3-styled-component";
	import { CheckCircleIcon, TriangleIcon } from "@/Web3Modal/assets/icons";
	import ExternalLink from "@/Web3Modal/theme/ExternalLink";
	import Loader from "@/Web3Modal/components/Loader";
	import { RowFixed } from "@/Web3Modal/components/Row";
	const TransactionWrapper = styled.div``;
	const TransactionStatusText = styled.div`
		margin-right: 0.5rem;
		display: flex;
		align-items: center;
		:hover {
			text-decoration: underline;
		}
	`;

	const TransactionState = styled(ExternalLink, {
		pending: {
			type: Boolean,
		},
		success: {
			type: Boolean,
			required: false,
		},
	})`
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-decoration: none !important;
		border-radius: 0.5rem;
		padding: 0.25rem 0rem;
		font-weight: 500;
		font-size: 0.825rem;
		color: ${({ theme }) => theme.primary1};
	`;

	const IconWrapper = styled("div", {
		pending: {
			type: Boolean,
		},
		success: {
			type: Boolean,
			required: false,
		},
	})`
		color: ${({ pending, success, theme }) =>
			pending ? theme.primary1 : success ? theme.green1 : theme.red1};
	`;
	export default {
		components: {
			IconWrapper,
			TransactionState,
			TransactionStatusText,
			TransactionWrapper,
			RowFixed,
			Loader,
			CheckCircleIcon,
			TriangleIcon,
		},
		props: {
			tx: {
				type: Object,
				required: true,
			},
			link: {
				type: String,
				required: true,
			},
		},
		computed: {
			summary() {
				return this.tx.summary;
			},
			pending() {
				return !this.tx.receipt;
			},
			success() {
				return (
					!this.pending &&
					this.tx &&
					(this.tx.receipt.status === 1 ||
						typeof this.tx.receipt.status === "undefined")
				);
			},
		},
	};
</script>