// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import './axios'
import store from './store'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import './permission'

Vue.use(Element)
Vue.use(mavonEditor)
Vue.config.productionTip = false
Vue.prototype.$axios=axios

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h=>h(App)
}).$mount('#app')
