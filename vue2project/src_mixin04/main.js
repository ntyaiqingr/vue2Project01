import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
// import { mixin1,mixin2 } from "./mixin"
// 全局引用mixin
// Vue.mixin(mixin1)
// Vue.mixin(mixin2)

new Vue({
    render: h => h(App)
}).$mount('#app')