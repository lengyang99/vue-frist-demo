import Vue from 'vue'
import App from './App'
import { Button, Select, Input } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
Vue.use(Button)
Vue.use(Select)
Vue.use(Input)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
