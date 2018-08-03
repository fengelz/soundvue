<template>
  <aside>
     <ul>
    <li v-for="track in tracks" v-bind:key="track.id">
      <router-link :to="{path: `/${track.permalink}`}">
        {{ track.title }}
      </router-link>
    </li>
  </ul>
  </aside>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import './styles.scss';

export default {
  name: 'Aside',
  computed: mapState({
    tracks: state => state.tracks.all
  })
};
</script>
