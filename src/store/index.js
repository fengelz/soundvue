import Vue from 'vue';
import Vuex from 'vuex';
import tracks from './tracks';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    tracks
  },
  strict: debug
});
