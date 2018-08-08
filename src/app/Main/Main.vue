<template>
  <div id="root">
    <aside-component></aside-component>
    <main 
      @scroll="handleScroll">
      <band-component v-bind:scrollTop="this.scrollTop" />
    </main>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Aside from '../Aside/Aside.vue';
import Band from '../Band/Band.vue';
import './styles.scss';

export default {
  name: 'Main',
  timer: -1,
  data: function() {
    return { 
      scrollTop: 0
    }
  },
  computed: mapState({
    tracks: state => state.tracks.all
  }),
  watch: {
    $route(to, from) {
      this.$store.dispatch('tracks/setTrack', to)
    }
  },
  created () {
    this.$store.dispatch('tracks/getAllTracks')
  },
  methods: { 
    handleScroll(event) {
      if (this.timer != -1) clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.scrollTop = event.target.scrollTop
      }, 1);
    },
  },
  components: {
    'aside-component': Aside,
    'band-component': Band
  }
};
</script>
