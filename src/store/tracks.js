import axios from 'axios';

const routes = {
  base: `https://api.soundcloud.com`,
  userId: `68436977`,
  clientId: `OgPiZDOMYXnoiMl3ugzdAB5jGBGtroyf`,
  userUrl() {
    return `${this.base}/users/${this.userId}?client_id=${this.clientId}`;
  },
  tracksUrl() {
    return `${this.base}/users/${this.userId}/tracks?client_id=${this.clientId}`;
  },
  test() {
    console.log(this);
  }
};

// initial state
const state = {
  all: []
};

// getters
const getters = {};

// actions
const actions = {
  getAllTracks({commit}) {
    axios
    .get(routes.tracksUrl())
    .then(response => {
      console.log(response);
      commit('setTracks', response);
    })
    .catch(err => {
      console.log('Err', err);
    });
  }
};

// mutations
const mutations = {
  setTracks(state, tracks) {
    state.all = tracks.data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
