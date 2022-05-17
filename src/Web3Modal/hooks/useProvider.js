import {inject} from 'vue';
const ProviderSymbol = Symbol();
const InfuraSymbol = Symbol();

export function provideOptions(app, options) {
    app.provide(ProviderSymbol, options);
}

export function useProviderOptions() {
    const providerOptions = inject(ProviderSymbol);
    if (!providerOptions) {
        throw 'error, no providerOptions provided'
    }
    return providerOptions
}

export function provideInfuraKey(app, key) {
    app.provide(InfuraSymbol, key);
}

export function useInfuraKey() {
    const InfuraKey = inject(InfuraSymbol);
    if (!InfuraKey) {
        throw 'error, no providerOptions provided'
    }
    return InfuraKey
}