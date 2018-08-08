<template>
  <div class="band">
    <span style="position: absolute; top: 0; left: 0">{{this.$props.scrollTop}}</span>
    <ul
      :style="{
      width: `${tracks.length * 100}%`, 
      marginLeft: `-${selectedTrack.pos * 100}%`}">
      <li :style="{
        backgroundImage: `url(${track.artwork_url? track.artwork_url.replace('large', 'crop') : ''})`
        }" 
        :ref="`d${track.id}`"
        v-for="(track, index) in tracks"
        v-bind:class="{
          selected: $mq === 'desktop' ? track.permalink === selectedTrack.track.permalink : selected(`d${track.id}`),
          previous: $mq === 'desktop' ? tracks[index + 1] && tracks[index + 1].permalink === selectedTrack.track.permalink : previous(`d${track.id}`),
          next: $mq === 'desktop' ? tracks[index - 1] && tracks[index - 1].permalink === selectedTrack.track.permalink : next(`d${track.id}`),
        }"
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
  props: ['scrollTop'],
  computed: mapState({
    tracks: state => state.tracks.all,
    selectedTrack: state => state.tracks.selectedTrack
  }),
  methods: {
    getPositionInfo(ref) {
      const top = ref.getBoundingClientRect().top;
      const bottom = ref.getBoundingClientRect().bottom;
      const height = ref.getBoundingClientRect().height;
      const treshold = (window.innerHeight - height) / 2;
      return {
        top,
        bottom,
        height,
        treshold
      }
    },
    selected(ref) {
      if(this.$refs[ref]) {
        const {top, bottom, height, treshold} = this.getPositionInfo(this.$refs[ref][0]);
        return top >= treshold && top < treshold + height;
        return false;
      }
    },
    previous(ref) {
      if(this.$refs[ref]) {
        return this.$refs[ref][0].nextSibling ? this.$refs[ref][0].nextSibling.classList.contains('selected') : '';
      }
    }, 
    next(ref) {
      if(this.$refs[ref]) {
        return this.$refs[ref][0].previousSibling ? this.$refs[ref][0].previousSibling.classList.contains('selected') : '';
      }
    }
  }
};
</script>
