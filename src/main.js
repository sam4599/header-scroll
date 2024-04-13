import Vue from 'vue'
import App from './App.vue'
import '/src/components/resource/css/global.css'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')