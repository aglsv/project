import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
// import axios from 'axios'
// import VueAxios from 'vue-axios'

import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
// vue.use(axios,VueAxios)

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (sessionStorage.getItem('username')) {
      next()
    } else {
      next({ path: '/login' })
    }
  } else {
    next();
  }
})

