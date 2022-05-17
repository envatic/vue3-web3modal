<script>
	import styled from "vue3-styled-components";
	const FlyoutRow = styled("div", { active: Boolean })`
		align-items: center;
		background-color: ${({ active, theme }) =>
			active ? theme.bg1 : "transparent"};
		border-radius: 8px;
		cursor: pointer;
		display: flex;
		font-weight: 500;
		justify-content: space-between;
		padding: 6px 8px;
		text-align: left;
		width: 100%;
	`;
	const FlyoutRowActiveIndicator = styled.div`
		background-color: ${({ theme }) => theme.green1};
		border-radius: 50%;
		height: 9px;
		width: 9px;
	`;

	const Logo = styled.img`
		height: 20px;
		width: 20px;
		margin-right: 8px;
	`;
	const NetworkLabel = styled.div`
		flex: 1 1 auto;
	`;
	export default {
		components: {
			NetworkLabel,
			Logo,
			FlyoutRowActiveIndicator,
			FlyoutRow,
		},
		props: {
			active: { type: Boolean, default: false },
			logoUrl: { type: String, required: true },
			label: { type: String, required: true },
		},
	};
</script>

<template>
	<FlyoutRow :active="active">
		<Logo :src="logoUrl" />
		<NetworkLabel>{{label}}</NetworkLabel>
		<FlyoutRowActiveIndicator v-if="active" />
	</FlyoutRow>
</template>