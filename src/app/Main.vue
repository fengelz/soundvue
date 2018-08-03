<template>
  <div id="root">
    <aside-component></aside-component>
    <main>
      
    </main>
  </div>
</template>

<script>
import Aside from './Aside/Aside.vue';

export default {
  name: 'Main',
  components: {
    'aside-component': Aside
  }
};
</script>
