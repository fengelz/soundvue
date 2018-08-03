<template>
  <div id="root">
    <aside-component></aside-component>
    <main>
      <band-component />
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
  computed: mapState({
    tracks: state => state.tracks.all
  }),
  created () {
    this.$store.dispatch('tracks/getAllTracks')
  },
  components: {
    'aside-component': Aside,
    'band-component': Band
  }
};
</script>
