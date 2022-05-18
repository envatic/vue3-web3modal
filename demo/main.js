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
import translations from './messages'; // translations
// 2. Create i18n instance with options
const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    translations, // set locale messages
})
// To register individual components where they are used (serve.vue) instead of using the
const app = createApp(DemoApp);
app.use(i18n);
app.use(web3vue);
app.config.devtools = true
app.mount('#app');
