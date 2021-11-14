import Vue from 'vue'
import App from './App.vue'
import '../src/assets/styles/reset.css'
import '../src/assets/styles/border.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
