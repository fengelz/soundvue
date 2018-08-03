<template>
  <div class="band">
    <ul :style="{
      width: `${tracks.length * 100}%`, 
      marginLeft: `-${selectedTrack.pos * 100}%`}">
      <li :style="{
        backgroundImage: `url(${track.artwork_url? track.artwork_url.replace('large', 'crop') : ''})`
        }" 
        v-bind:class="{selected:track.permalink === selectedTrack.track.permalink}"
        v-for="track in tracks" 
        v-bind:key="track.id">
        <router-link :to="{path: `/${track.permalink}`}">
          {{ track.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import './styles.scss';

export default {
  name: 'Band',
  computed: mapState({
    tracks: state => state.tracks.all,
    selectedTrack: state => state.tracks.selectedTrack
  }),
  updated() {
    console.log('updated')
  }
};
</script>
