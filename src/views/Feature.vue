<template>
  <div>
    <!-- <feature-header :title="title" /> -->
    <component v-bind:is="currentComponent"></component>
  </div>
</template>

<script>
import FeatureHeader from '../components/FeatureHeader.vue';
import { features } from '../components/features';

export default {
  name: 'Feature',
  components: {
    FeatureHeader
  },
  data() {
    const { name } = this.$route.params;
    const feature = features[name];
    return {
      name,
      feature,
      ...feature
    };
  },
  methods: {
    currentComponent() {
      return this.component;
    }
  }
};
</script>
