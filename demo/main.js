import { createApp } from 'vue';
import { createI18n } from "vue-i18n";
import { createWeb3 } from '@/createWeb3';
const infuraKey = process.env.VUE_APP_INFURA_KEY;
import { theme } from './theme';
import { providerOptions }  from './providers'
import messages from './messages';
import App from "./App"
const web3vue = createWeb3({
    infuraKey,
    providerOptions,
    theme,
    global:true
})

const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})
// To register individual components where they are used (serve.vue) instead of using the
const app = createApp(App);
app.use(i18n);
app.use(web3vue);
app.config.devtools = true
app.mount('#app');
