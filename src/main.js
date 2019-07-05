import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import infiniteScroll from 'vue-infinite-scroll'
import './assets/iconfont/iconfont.css'

Vue.use(ElementUI, infiniteScroll)
Vue.config.productionTip = false
require('./mock');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
