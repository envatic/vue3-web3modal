
import { provideInfuraKey, provideOptions } from "./Web3Modal/hooks/useProvider";
import Web3Manager from '@/Web3Modal/Web3Manager/Web3Manager.vue'
import Web3Modal  from '@/Web3Modal/components/web3Modal/Web3Modal.vue'
import { theme as defaultTheme } from "@/Web3Modal/theme";
import {  reactive, toRefs } from "vue";
export function createWeb3({
    infuraKey, 
    providerOptions,
    theme = reactive({}),
    global= false
}){
    console.log(providerOptions);
    const plugin = {
        install(app){
            const mergedTheme = Object.assign(defaultTheme, toRefs(theme))
            mergedTheme.colors = mergedTheme;
            console.log(mergedTheme, theme)
            app.provide('theme', defaultTheme);
            provideOptions(app, providerOptions);
            provideInfuraKey(app, infuraKey);
            if(global){
                app.component('Web3Manager', Web3Manager);
                app.component('Web3Modal', Web3Modal);
            }
        }
    }
    return plugin;
} 
