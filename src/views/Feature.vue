<template>
  <component v-bind:is="currentComponent"></component>
</template>

<script>
import FeatureHeader from '../components/FeatureHeader.vue';
import { features } from '../components/features';
import { bus } from '../main';
import { EVENTS } from '../utils/const';

export default {
  name: 'Feature',
  components: {
    FeatureHeader
  },
  beforeMount: function() {
    this.feature = features(this.$route.params.name);
    bus.$emit(EVENTS.CHANGE_NAV_HEADER, this.feature.title);
  },
  methods: {
    currentComponent() {
      return this.feature.component;
    }
  }
};
</script>
