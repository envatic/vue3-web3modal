import { createApp } from 'vue';
import { createI18n } from "vue-i18n";
import { createWeb3 } from '@/createWeb3';
const infuraKey = process.env.VUE_APP_INFURA_KEY;
import './assets/tailwind.css'
import { theme } from './theme';
import {providerOptions}  from './providers'
const web3vue = createWeb3({
    infuraKey,
    providerOptions,
    theme,
    global:true
})
import DemoApp from './App.vue';
const messages = {
    en: {
        "Account": "Account",
        "Arbiscan": "Arbiscan",
        "Arbitrum Bridge": "Arbitrum Bridge",
        "Bridge": "Bridge",
        "Bscscan": "Bscscan",
        "Change": "Change",
        "Check network status": "Check network status",
        "close": "close",
        "Connect": "Connect",
        "Connect to a wallet": "Connect to a wallet",
        "Connected with": "Connected with",
        "Copied": "Copied",
        "dashboard": "dashboard",
        "Disconnect": "Disconnect",
        "Error connecting": "Error connecting",
        "Error Connecting": "Error Connecting",
        "Error connecting. Try refreshing the page": "Error connecting. Try refreshing the page",
        "Etherscan": "Etherscan",
        "Help Center": "Help Center",
        "here.": "here.",
        "Initializing...": "Initializing...",
        "Invalid Network": "Invalid Network",
        "Network Warning": "Network Warning",
        "onDismiss": "onDismiss",
        "Optimism Gateway": "Optimism Gateway",
        "Optimistic Etherscan": "Optimistic Etherscan",
        "Pending": "Pending",
        "Polygon Bridge": "Polygon Bridge",
        "Polygonscan": "Polygonscan",
        "Select a network": "Select a network",
        "Show Portis": "Show Portis",
        "Try Again ": "Try Again ",
        "Wallet": "Wallet",
        "Wrong Network": "Wrong Network",
        "You may have lost your network connection, or {label} might be down right now.": "You may have lost your network connection, or {label} might be down right now.",
        "You may have lost your network connection.": "You may have lost your network connection.",
        "Your Wallets Network is not supported": "Your Wallets Network is not supported"
    }
}
// 2. Create i18n instance with options
const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})
// To register individual components where they are used (serve.vue) instead of using the
const app = createApp(DemoApp);
app.use(i18n);
app.use(web3vue);
app.config.devtools = true
app.mount('#app');
