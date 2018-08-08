import Vue from 'vue';
import Main from './app/Main/Main.vue';
import store from './store/';

import './index.scss';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueMq from 'vue-mq';
Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity
  }
});

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
  }
});
