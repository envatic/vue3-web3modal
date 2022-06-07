import flatten from 'vue3-styled-component/src/utils/flatten'
import styleSheet from 'vue3-styled-component/src/models/StyleSheet'
import stylis from 'stylis'
import css from 'vue3-styled-component/src/constructors/css'
class GlobalStyle {
    constructor(rules, theme) {
        this.rules = rules
        this.theme = theme
    }

    generateAndInject() {
        if (!styleSheet.injected) styleSheet.inject()
        const flatCSS = flatten(this.rules, this.theme).join('')
        const css = stylis('', flatCSS, false, false)
        styleSheet.insert(css, { global: true })
    }
}


const injectGlobal=(theme)=>{
    const inject = (strings, ...interpolations) => {
        const globalStyle = new GlobalStyle(css(strings, ...interpolations), theme)
        globalStyle.generateAndInject()
    }
    return inject;
}
export default injectGlobal