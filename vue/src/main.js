/*
 * @Descripttion: 
 * @version: 1.1.0
 * @Author: wqq
 * @Date: 2020-08-24 12:10:38
 * @LastEditors: wqq
 * @LastEditTime: 2020-08-24 12:26:16
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store'



import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './assets/common.less'

import $http from './utils/http.js';

Vue.config.productionTip = false

Vue.prototype.$http = $http;
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
