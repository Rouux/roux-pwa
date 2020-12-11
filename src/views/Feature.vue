<template>
  <div>
    <feature-header :title="title" />
    <component v-bind:is="currentComponent"></component>
  </div>
</template>

<script>
import FeatureHeader from '../components/FeatureHeader.vue';
import { features } from '../utils/features';

export default {
  name: 'Feature',
  components: {
    FeatureHeader
  },
  data() {
    const { name } = this.$route.params;
    return {
      name,
      ...features[name]
    };
  },
  methods: {
    currentComponent() {
      return features[this.name].component;
    }
  }
};
</script>
