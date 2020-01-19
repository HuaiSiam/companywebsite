import Vue from 'vue'
import App from './App.vue'
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

require('@/assets/style.css')
require('@/assets/css/pe-icon-7-stroke/dist/pe-icon-7-stroke.css')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
