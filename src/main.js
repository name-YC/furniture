import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
// echart
import * as echarts from "echarts"
Vue.prototype.$echarts = echarts

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
