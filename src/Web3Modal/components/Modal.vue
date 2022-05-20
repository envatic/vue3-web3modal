<template>
	<transition
		name="fade"
		appear
	>
		<StyledDialogOverlay
			v-show="isOpen"
			@click.prevent="onDismiss"
		>
			<DialogContent
				v-if="isMobile"
				ref="target"
				aria-label="dialog content"
				:min-height="minHeight"
				:max-height="maxHeight"
				:mobile="isMobile"
				:style="{transform: `translateY(${sprung > 0 ? sprung : 0}px)`}"
				@click.stop
			>

				<slot/>

			</DialogContent>

			<DialogContent
				v-else
				aria-label="dialog content"
				:min-height="minHeight"
				:max-height="maxHeight"
				:mobile="isMobile"
				@click.stop
			>
				<slot/>
			</DialogContent>
		</StyledDialogOverlay>
	</transition>
</template>

<script>
	import styled, { css } from "vue3-styled-components";
	import { isMobile } from "mobile-device-detect";
	import transparentize from "polished/lib/color/transparentize";
	import { spring } from "vue3-spring";
	import { ref, computed, inject } from "vue";
	import { useSwipe } from "@vueuse/core";
	const StyledDialogOverlay = styled.div`
		 {
			background: rgba(0, 0, 0, 0.33);
			opacity: 1;
			position: fixed;
			top: 0;
			right: 0;
			bottom: 0;
			top: 0;
			overflow: auto;
			z-index: 1002;
			width: 100%;
			height: 100%;
			background-color: transparent;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: ${({ theme }) => theme.modalBG};
		}
	`;
	const DialogContent = styled("div", {
		minHeight: Number,
		maxHeight: Number,
		mobile: Boolean,
		isOpen: Boolean,
	})`
		 {
			overflow-y: ${({ mobile }) => (mobile ? "scroll" : "hidden")};
			background: #fff;
			outline: none;
			margin: 0 0 2rem 0;
			background-color: ${({ theme }) => theme.bg1};
			box-shadow: 0 4px 8px 0
				${({ theme }) => transparentize(0.95, theme.shadow1)};
			padding: 0px;
			width: 50vw;
			overflow-y: ${({ mobile }) => (mobile ? "scroll" : "hidden")};
			overflow-x: hidden;
			align-self: ${({ mobile }) => (mobile ? "flex-end" : "center")};
			max-width: 420px;
			${({ maxHeight }) =>
				maxHeight &&
				css`
					max-height: ${maxHeight}vh;
				`}
			${({ minHeight }) =>
				minHeight &&
				css`
					min-height: ${minHeight}vh;
				`}
																																						    display: flex;
			border-radius: 20px;
			${({ theme }) => theme.mediaWidth.upToMedium` width: 65vw; margin: 0;`}
			${({ theme, mobile }) =>
				theme.mediaWidth.upToSmall`width: 85vw; ${mobile &&
					css`
						width: 100vw;
						border-radius: 20px;
						border-bottom-top-radius: 0;
						border-bottom-right-radius: 0;
					`
				}`}
		}
	`;

	export default {
		components: {
			StyledDialogOverlay,
			DialogContent,
		},
		props: {
			isOpen: {
				type: Boolean,
				required: true,
			},
			minHeight: {
				type: Number,
				required: false,
			},
			maxHeight: {
				type: Number,
				required: false,
				default: 90,
			},
		},
		setup() {
			const top = ref(0);
			const sprung = spring(top, {
				stiffness: 210,
				damping: 20,
				mass: 1,
			});
			const onDismiss = inject("onDismiss");
			const target = ref(null);
			const targetHtml = computed(() => target.value?.$el ?? null);
			if (isMobile) {
				const { lengthY } = useSwipe(targetHtml, {
					passive: true,
					onSwipe() {
						if (lengthY.value < 0) {
							const length = Math.abs(lengthY.value);
							top.value = length;
						} else {
							top.value = 0;
						}
					},
					onSwipeEnd() {
						if (lengthY.value < 0 && Math.abs(lengthY.value) > 200) {
							onDismiss();
							return (top.value = 0);
						} else {
							top.value = 0;
						}
					},
				});
			}
			return { sprung, top, target, isMobile, targetHtml, onDismiss };
		},
		data() {
			return {
				lastPosY: 0,
				isDragging: false,
			};
		},
		methods: {
			onDrag(ev) {
				if (!this.isDragging) {
					this.isDragging = true;
				}
				this.positionY = ev.direction == 16 ? ev.deltaY : 0;
				if (ev.isFinal) {
					this.isDragging = false;
					if (
						ev.deltaY > 300 ||
						(ev.velocity > 0.3 && ev.direction == 16)
					) {
						return this.onDismiss();
					}
					this.positionY = 0; // reset it back to zero
				}
			},
		},
	};
</script>
<style>
	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.4s linear;
	}
</style>