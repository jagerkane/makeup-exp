// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Main from './main.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import methods from './config/methods'
// ES6模块方式
import Es6Promise from 'es6-promise'
Es6Promise.polyfill()
Vue.config.productionTip = false
//方法挂靠全局
Object.keys(methods).forEach((key) => {
	Vue.prototype[key] = methods[key];
});
// document.cookie="uid=2018051709362170110";
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { Main },
  template: '<Main/>'
})
