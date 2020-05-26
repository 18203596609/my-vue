import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/sass/index.scss' // 样式
import './plugins/element'; // element的引用

declare module 'vue/types/vue'{
  interface Vue{
  }
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
