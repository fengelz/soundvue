import Vue from 'vue';
import Main from './app/Main.vue';
import store from './store/';

import './index.scss';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: Main
      }
    },
    {
      path: '/:track',
      components: {
        default: Main
      }
    }
  ]
});

export default new Vue({
  el: '#root',
  router,
  store,
  render: h => h('router-view'),
  created() {
    // `this` points to the vm instance
    console.log('a is: fukt');
  }
});
