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

<style scoped>
.header-card {
  margin-bottom: 1em;
}
</style>
