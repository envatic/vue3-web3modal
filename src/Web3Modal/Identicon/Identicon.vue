<script >
	import Jazzicon from "vue3-jazzicon/src/components";
	import { useActiveWeb3Vue } from "../hooks";
	import styled from "vue3-styled-components";

	const StyledIdenticon = styled.div`
		height: 1rem;
		width: 1rem;
		border-radius: 1.125rem;
		background-color: ${({ theme }) => theme.bg4};
		font-size: initial;
	`;
	export default {
		components: {
			Jazzicon,
			StyledIdenticon,
		},
		setup() {
			const { account } = useActiveWeb3Vue();
			return {
				account,
			};
		},
	};
</script>
<template>
	<StyledIdenticon v-if="account">
		<Jazzicon
			:diameter="16"
			:address="account"
		/>
	</StyledIdenticon>
</template>