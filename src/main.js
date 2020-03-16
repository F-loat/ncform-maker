import Vue from 'vue'
import vueNcform from '@f-loat/ncform'
import VueI18n from 'vue-i18n'
import { NcmakerMessages } from 'ncform-maker'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ncformStdComps from '@f-loat/ncform-theme-elementui'
import { controlComps, layoutComps, businessComps } from '@f-loat/ncform-comps'

import App from './App.vue'
import lang from './locale'

Vue.use(Element)
Vue.use(VueI18n)
Vue.use(vueNcform, {
  extComponents: Object.assign(ncformStdComps, layoutComps, controlComps, businessComps),
  lang
})
Vue.config.productionTip = false

const i18n = new VueI18n({ locale: lang, messages: NcmakerMessages })

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
