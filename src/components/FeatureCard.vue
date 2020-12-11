<template>
  <md-card md-with-hover class="isolate-card">
    <div @click="onClickCard(path)">
      <md-card-header>
        <div class="md-title">{{ title }}</div>
      </md-card-header>
    </div>
  </md-card>
</template>

<script>
export default {
  path: 'FeatureCard',
  props: {
    title: String,
    path: String
  },
  methods: {
    onClickCard(path) {
      this.$router.push({ path });
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
