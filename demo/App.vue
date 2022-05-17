<script>
	import { Web3Manager, useWeb3ModalToggle, useActiveWeb3Vue, toggleDark } from "@/index";
		export default {
		components: {
			Web3Manager,
		},
		setup() {
			const { account } = useActiveWeb3Vue();
			const { open} = useWeb3ModalToggle();
			return {
				showWeb3Modal: open,
                account,
                toggleDark
			};
		},
	};
</script>
<template>
	<div
		id="app"
		class="flex flex-col min-h-screen font-roboto dark:bg-gray-900"
	>
		<header class=" border-b dark:bg-gray-900 dark:border-gray-700 lg:fixed lg:w-full lg:top-0 lg:left-0 lg:z-30">
			<div class="container px-4 py-5 mx-auto space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between lg:space-x-10">
				<div class="flex justify-between">
					<a
						href="/"
						class="text-gray-800 dark:text-gray-200"
					>
						<div class="flex items-center">
							<svg
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 25 27"
								class="h-7 w-7 -mt-2 flex-shrink-0"
							>
								<path
									d="M22.487.658s5.03 13.072-1.822 22.171C16.476 28.39 9.84 27.26 5.484 25.68c1.513-3.391 3.441-6.067 5.784-8.03 1.176.623 3.186.792 6.03.51-2.535-.221-4.284-.654-5.246-1.3l.125.08c2.122-1.546 4.556-2.556 7.303-3.029-3.16-.285-6.026.315-8.598 1.804-.577-.742-1.157-1.748-1.74-3.018.07 1.534.339 2.734.809 3.6-2.64 1.797-4.953 4.58-6.94 8.351a7.583 7.583 0 01-.188-.088c-.802-.358-1.328-1.037-1.755-2.036C-1.9 13.366 4.645 8.273 11.123 7.989 23.046 7.465 22.487.658 22.487.658z"
									fill="#0ED3CF"
								></path>
							</svg>
							<p class="text-xl ml-2">
								Vue3 Web3<strong>modal</strong>
							</p>
						</div>
					</a>
					<div class="flex items-center space-x-2 lg:hidden">
						<button  class="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 focus:outline-none">
							<svg
								viewBox="0 0 20 20"
								fill="currentColor"
								class="w-6 h-6 text-gray-700 dark:text-gray-300"
							>
								<path
									fill-rule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clip-rule="evenodd"
								></path>
							</svg>
						</button>
					</div>
				</div>
				<div
					class="flex flex-col space-y-4 lg:hidden"
					style="display: none"
				>
					<div class="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-6 xl:space-x-8 lg:items-center">
						<a
							href="/"
							class="text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-400 transition-colors duration-300"
						>Home</a>
						<a
							href="https://github.com/zobitnet/vue3-web3-modal"
							class="text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-400 transition-colors duration-300"
						>Github</a>
					</div>
					<div class="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-4">
						<button
							type="button"
                            @click="toggleDark()"
							aria-label="Color Mode"
							class="flex justify-center p-2 text-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md lg:bg-white lg:dark:bg-gray-900 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"
						>
							<!---->
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="w-5 h-5 transform -rotate-90"
							>
								<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
							</svg>
						</button>
						
					</div>
				</div>
				<div class="hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:flex-1 lg:space-x-2">
					<div class="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-6 xl:space-x-8 lg:items-center">
						<a
							href="/"
							class="text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-400 transition-colors duration-300"
						>Home</a>

						<a
							href="https://github.com/zobitnet/vue3-web3-modal"
							class="text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-400 transition-colors duration-300"
						>Github</a>
					</div>
					<div class="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-4">
						<button
                             @click="toggleDark()"
							type="button"
							aria-label="Color Mode"
							class="flex justify-center p-2 text-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md lg:bg-white lg:dark:bg-gray-900 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"
						>
							<!---->
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="w-5 h-5 transform -rotate-90"
							>
								<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
							</svg>
						</button>
                        <Web3Manager />
					</div>
				</div>
			</div>
		</header>
		<main class="flex-1 lg:mt-20">
			<section class="container px-4 mx-auto mt-8">
				<div class="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between">
					<div class="flex flex-col w-full items-center">
						<span class="font-light text-gray-400">require vue3. </span>
						<div class="flex flex-col mt-2 space-y-1 sm:flex-row sm:space-y-0 sm:items-center sm:space-x-4">
							<h3 class="text-2xl font-semibold text-gray-800 dark:text-gray-200">
								Show on Button Click
							</h3>
							<a
								href="/u/tailwindcss"
								class="text-gray-400 hover:underline"
							>@click="showWeb3Modal()"</a>
						</div>
						<p class="mt-2 text-gray-500 dark:text-gray-400 lg:max-w-xl description-link">
							{{account??' ModalNot Connected'}}
						</p>
						<div class="mt-8 space-y-4 lg:flex lg:space-x-4 lg:space-y-0">
							<a
								@click.prevent="showWeb3Modal()"
								href="#"
								class="items-center hidden px-4 py-2 space-x-3 text-gray-600 transition-colors duration-300 transform border rounded-lg lg:flex dark:text-gray-200 dark:border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
							><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									class="w-5 h-5"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
									></path>
								</svg>
								<span>Click to Show Modal</span></a>
	
						</div>
					</div>
				</div>
			</section>
		</main>
		<div class="bg-gray-100 dark:bg-gray-800">
			<div class="container flex flex-col items-center px-4 py-6 mx-auto space-y-6 lg:space-y-0 lg:flex-row lg:justify-between">
				<div class="w-48 text-gray-700 dark:text-gray-200">
					<div class="flex items-center">
						<svg
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 25 27"
							class="h-7 w-7 -mt-2 flex-shrink-0"
						>
							<path
								d="M22.487.658s5.03 13.072-1.822 22.171C16.476 28.39 9.84 27.26 5.484 25.68c1.513-3.391 3.441-6.067 5.784-8.03 1.176.623 3.186.792 6.03.51-2.535-.221-4.284-.654-5.246-1.3l.125.08c2.122-1.546 4.556-2.556 7.303-3.029-3.16-.285-6.026.315-8.598 1.804-.577-.742-1.157-1.748-1.74-3.018.07 1.534.339 2.734.809 3.6-2.64 1.797-4.953 4.58-6.94 8.351a7.583 7.583 0 01-.188-.088c-.802-.358-1.328-1.037-1.755-2.036C-1.9 13.366 4.645 8.273 11.123 7.989 23.046 7.465 22.487.658 22.487.658z"
								fill="#0ED3CF"
							></path>
						</svg>
						<p class="text-xl ml-2">
							Vue3<strong> Web3 Modal</strong>
						</p>
					</div>
				</div>
				<p class="text-sm text-center text-gray-500 dark:text-gray-300">
					© 2022 zobit.net.
				</p>
				<div class="flex items-center space-x-6">
					<a
						href="https://zobit.net"
						class="text-sm text-gray-500 transition-colors duration-300 dark:text-gray-300 hover:underline hover:text-primary dark:hover:text-primary"
					>Zobit</a>
					<a
						href="https://github.com/zobitnet/vue3-web3-modal/licence.md"
						class="text-sm text-gray-500 transition-colors duration-300 dark:text-gray-300 hover:underline hover:text-primary dark:hover:text-primary"
					>MIT Licence</a>
					<a
						href="https://twitter.com/zobitchat"
						target="_blink"
						class="text-gray-500 transition-colors duration-300 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
					><svg
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="w-6 h-6 fill-current"
						>
							<path d="M19.995 6.68799C20.8914 6.15208 21.5622 5.30823 21.882 4.31399C21.0397 4.81379 20.118 5.16587 19.157 5.35499C17.8246 3.94552 15.7135 3.60251 14.0034 4.51764C12.2933 5.43277 11.4075 7.37948 11.841 9.26999C8.39062 9.09676 5.17598 7.4669 2.99702 4.78599C1.85986 6.74741 2.44097 9.25477 4.32502 10.516C3.64373 10.4941 2.97754 10.3096 2.38202 9.97799C2.38202 9.99599 2.38202 10.014 2.38202 10.032C2.38241 12.0751 3.82239 13.8351 5.82502 14.24C5.19308 14.4119 4.53022 14.4372 3.88702 14.314C4.45022 16.0613 6.06057 17.2583 7.89602 17.294C6.37585 18.4871 4.49849 19.1342 2.56602 19.131C2.22349 19.1315 1.88123 19.1118 1.54102 19.072C3.50341 20.333 5.78739 21.0023 8.12002 21C11.3653 21.0223 14.484 19.7429 16.7787 17.448C19.0734 15.1531 20.3526 12.0342 20.33 8.78899C20.33 8.60299 20.3257 8.41799 20.317 8.23399C21.1575 7.62659 21.8828 6.87414 22.459 6.01199C21.676 6.35905 20.8455 6.58691 19.995 6.68799Z"></path>
						</svg></a>
					<a
						href="https://github.com/zobitnet/vue3-web3-modal/"
						target="_blink"
						class="text-gray-500 transition-colors duration-300 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
					><svg
							viewBox="0 0 30 30"
							class="w-6 h-6 fill-current"
						>
							<path d="M15 1.875C7.75195 1.875 1.875 7.9043 1.875 15.334C1.875 21.2812 5.63672 26.3203 10.8516 28.1016C10.9247 28.1175 10.9994 28.1253 11.0742 28.125C11.5605 28.125 11.748 27.7676 11.748 27.457C11.748 27.1348 11.7363 26.291 11.7305 25.166C11.2963 25.2678 10.8522 25.3209 10.4062 25.3242C7.88086 25.3242 7.30664 23.3613 7.30664 23.3613C6.70898 21.8086 5.84766 21.3926 5.84766 21.3926C4.70508 20.5898 5.8418 20.5664 5.92969 20.5664H5.93555C7.25391 20.6836 7.94531 21.9609 7.94531 21.9609C8.60156 23.1094 9.48047 23.4316 10.2656 23.4316C10.7848 23.4213 11.2959 23.3015 11.7656 23.0801C11.8828 22.2129 12.2227 21.6211 12.5977 21.2812C9.68555 20.9414 6.62109 19.7871 6.62109 14.6309C6.62109 13.1602 7.13086 11.959 7.96875 11.0215C7.83398 10.6816 7.38281 9.31055 8.09766 7.45898C8.19354 7.43604 8.29209 7.42619 8.39062 7.42969C8.86523 7.42969 9.9375 7.61133 11.707 8.8418C13.8572 8.24022 16.1311 8.24022 18.2812 8.8418C20.0508 7.61133 21.123 7.42969 21.5977 7.42969C21.6962 7.42619 21.7947 7.43604 21.8906 7.45898C22.6055 9.31055 22.1543 10.6816 22.0195 11.0215C22.8574 11.9648 23.3672 13.166 23.3672 14.6309C23.3672 19.7988 20.2969 20.9355 17.373 21.2695C17.8418 21.6855 18.2637 22.5059 18.2637 23.7598C18.2637 25.5586 18.2461 27.0117 18.2461 27.4512C18.2461 27.7676 18.4277 28.125 18.9141 28.125C18.9928 28.1253 19.0713 28.1175 19.1484 28.1016C24.3691 26.3203 28.125 21.2754 28.125 15.334C28.125 7.9043 22.248 1.875 15 1.875Z"></path>
						</svg></a>
				</div>
			</div>
		</div>
	</div>
</template>
<style src="./assets/tailwind.css"> </style>
