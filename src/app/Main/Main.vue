<template>
  <div id="root">
    <aside-component></aside-component>
    <main 
      @scroll="handleScroll">
      <band-component v-bind:scrollTop="this.scrollTop" v-bind:scrollStop="this.scrollStop" />
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
  isScrolling: false,
  data: function() {
    return { 
      scrollTop: 0,
      scrollStop() {
        console.log('FU')
      }
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
      this.scrollTop = event.target.scrollTop
      
      window.clearTimeout( this.isScrolling );

      // Set a timeout to run after scrolling ends
      this.isScrolling = setTimeout(() => {
        this.scrollStop();

      }, 66);
    },
  },
  components: {
    'aside-component': Aside,
    'band-component': Band
  }
};
</script>
