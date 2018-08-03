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
  all: [],
  selectedTrack: {pos: 0, track: {permalink: ''}}
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
  },
  setTrack({commit}, track) {
    commit('setSelectedTrack', track);
  }
};

// mutations
const mutations = {
  setTracks(state, tracks) {
    state.all = tracks.data;
  },
  setSelectedTrack(state, route) {
    const track = state.all.find(item => item.permalink === route.params.track);
    const pos = state.all.map(item => {
      return item.permalink;
    }).indexOf(route.params.track);
    state.selectedTrack = {pos, track};
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
