<template>
	<ContentWrapper>
		<option-grid>
			<ProviderComponent
				v-for="(provider , i) in providersArray"
				:id="`connect-${provider.name}`"
				:key="provider.name"
				:ref="'prvs_'+i"
				:provider="provider"
				@click.prevent="selectProvidex(provider)"
			></ProviderComponent>

		</option-grid>
		<Blurb>
			<span>New to Ethereum? &nbsp;</span>
			<ExternalLink href="https://ethereum.org/wallets/">Learn more about wallets</ExternalLink>
		</Blurb>
	</ContentWrapper>
</template>
<script>
	import styled from "vue3-styled-component";
	import Provider from "./Provider";
	import { ExternalLink, ContentWrapper } from "@/Web3Modal/theme";

	const Blurb = styled.div`
		${({ theme }) => theme.flexRowNoWrap}
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		margin-top: 2rem;
		${({ theme }) =>
			theme.mediaWidth.upToMedium`margin: 1 rem; font - size: 12 px;`};
	`;

	const OptionGrid = styled.div`
		display: grid;
		grid-gap: 10px;
		${({ theme }) =>
			theme.mediaWidth
				.upToMedium` grid - template - columns: 1 fr; grid - gap: 10 px;`};
	`;

	export default {
		components: {
			ExternalLink,
			OptionGrid,
			Blurb,
			ContentWrapper,
			ProviderComponent: Provider,
		},
		inject: ["selectProvider"],
		props: {
			providers: {
				type: [Array, Object],
				default: null,
			},
		},
		computed: {
			providersArray() {
				return Object.values(this.providers);
			},
		},

		mounted() {
			this.$nextTick(() => this.$refs?.prvs_0?.$el?.focus());
		},
		methods: {
			selectProvidex(provider) {
				this.selectProvider(provider);
			},
		},
	};
</script>