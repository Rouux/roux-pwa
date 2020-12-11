<template>
  <md-card class="header-card">
    <div @click="onClickHeader">
      <md-card-header>
        <div class="md-title">{{ title }}</div>
      </md-card-header>
    </div>
  </md-card>
</template>

<script>
export default {
  name: 'FeatureHeader',
  props: {
    title: String
  },
  methods: {
    onClickHeader() {
      this.$router.push({ path: '/' });
    }
  }
};
</script>

<style lang="scss">
@import '@/style';

.header-card {
  margin-bottom: 1em;
  background-color: $element-color !important;
}

.md-title {
  color: $color;
}
</style>
