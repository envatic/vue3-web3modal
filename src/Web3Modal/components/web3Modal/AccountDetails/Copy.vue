
<template>
	<CopyIcon @click.prevent="copyThis(toCopy)">
		<TransactionStatusText v-if='isCopied'>
			<CheckCircle size="16"></CheckCircle>
			<TransactionStatusText>{{t('Copied')}}</TransactionStatusText>
		</TransactionStatusText>
		<TransactionStatusText v-else>
			<Copy size="16"></Copy>
		</TransactionStatusText>
		<template v-if="!isCopied">
			<slot/>
		</template>
	</CopyIcon>
</template>
<script>
	import styled from "vue3-styled-components";
	import { LinkStyledButton } from "@/Web3Modal/theme";
	import {
		CheckCircleIcon as CheckCircle,
		CopyIcon as Copy,
	} from "vue3-feather";
	import copy from "copy-to-clipboard";
	const CopyIcon = styled(LinkStyledButton)`
		color: ${({ theme }) => theme.text3};
		flex-shrink: 0;
		display: flex;
		text-decoration: none;
		font-size: 0.825rem;
		:hover,
		:active,
		:focus {
			text-decoration: none;
			color: ${({ theme }) => theme.text2};
		}
	`;
	const TransactionStatusText = styled.span`
		margin-left: 0.25rem;
		font-size: 0.825rem;
		${({ theme }) => theme.flexRowNoWrap};
		align-items: center;
	`;
	export default {
		components: {
			TransactionStatusText,
			CopyIcon,
			CheckCircle,
			Copy,
		},
		props: {
			toCopy: String,
			timeout: {
				type: Number,
				required: false,
				default: 500,
			},
		},
		data() {
			return {
				isCopied: false,
			};
		},
		watch: {
			isCopied(isCopied) {
				if (isCopied) {
					setTimeout(() => {
						this.isCopied = false;
					}, this.timeout);
				}
			},
		},
		methods: {
			copyThis(text) {
				this.isCopied = copy(text);
			},
             t(text){
                if(this.$t instanceof Function)
                return this.$t(text);
                return text;
            },
        }
	};
</script>