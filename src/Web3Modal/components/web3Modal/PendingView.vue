
<template>
	<PendingSection>
		<LoadingMessage :error="error">
			<LoadingWrapper>
				<ErrorGroup
					v-if="error"
					@click.prevent="retryConnection()"
				>
					<div>{{t('Error connecting')}}.</div>
					<ErrorButton> {{t('Try Again ')}}</ErrorButton>
				</ErrorGroup>
				<template v-else>
					<StyledLoader></StyledLoader> {{t('Initializing...')}}
				</template>
			</LoadingWrapper>
		</LoadingMessage>
		<Provider
			:key="connector.name"
			:desc="true"
			:clickable="false"
			:provider="connector"
		></Provider>
	</PendingSection>
</template>
<script>
	import styled from "vue3-styled-components";
	import Provider from "./Provider";
	import darken from "polished/lib/color/darken";
	import Loader from "@/Web3Modal/components/Loader";

	const PendingSection = styled.div`
		${({theme}) => theme.flexColumnNoWrap};
		align-items: center;
		justify-content: center;
		width: 100%;
		& > * {
			width: 100%;
		}
	`;

	const StyledLoader = styled(Loader)`
		margin-right: 1rem;
	`;

	const LoadingMessage = styled("div", {
		error: {
			type: Boolean,
			required: false,
			default: false,
		},
	})`
		${({theme}) => theme.flexRowNoWrap};
		align-items: center;
		justify-content: flex-start;
		border-radius: 12px;
		margin-bottom: 20px;
		color: ${({theme, error}) => (error ? theme.red1 : "inherit")};
		border: 1px solid ${({theme, error}) => (error ? theme.red1 : theme.text4)};

		& > * {
			padding: 1rem;
		}
	`;

	const ErrorGroup = styled.div`
		${({theme}) => theme.flexRowNoWrap};
		align-items: center;
		justify-content: flex-start;
	`;

	const ErrorButton = styled.div`
		border-radius: 8px;
		font-size: 12px;
		color: ${({theme}) => theme.text1};
		background-color: ${({theme}) => theme.bg4};
		margin-left: 1rem;
		padding: 0.5rem;
		font-weight: 600;
		user-select: none;

		&:hover {
			cursor: pointer;
			background-color: ${({theme}) => darken(0.1, theme.text4)};
		}
	`;

	const LoadingWrapper = styled.div`
		${({theme}) => theme.flexRowNoWrap};
		align-items: center;
		justify-content: center;
	`;

	export default {
		components: {
			LoadingWrapper,
			ErrorButton,
			ErrorGroup,
			LoadingMessage,
			StyledLoader,
			PendingSection,
			Provider,
		},
		inject: ["retryConnection"],
		props: {
			connector: {
				type: Object,
				required: true,
			},
			error: {
				type: Boolean,
				required: false,
				default: false,
			},
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