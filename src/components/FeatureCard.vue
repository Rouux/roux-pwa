<template>
  <div @click="navigateTo(path)" class="unselectable">
    <md-card md-with-hover class="isolate-card">
      <md-card-header>
        <div class="md-title">{{ title }}</div>
      </md-card-header>
    </md-card>
  </div>
</template>

<script>
import { features } from './features';

export default {
  path: 'FeatureCard',
  props: {
    name: String
  },
  data: function() {
    const feature = features(this.name);
    return {
      path: feature.path,
      title: feature.title
    };
  },
  methods: {
    navigateTo(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss">
@import '@/style';

.isolate-card {
  margin: 1em;
  background-color: $element-color !important;
}

.md-title {
  color: $color;
}
</style>
