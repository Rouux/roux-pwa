<template>
  <transition path="translate">
    <md-card md-with-hover class="isolate-card">
      <div @click="onClickCard(path)" ref="card">
        <md-card-header>
          <div class="md-title">{{ title }}</div>
        </md-card-header>
      </div>
    </md-card>
  </transition>
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

<style scoped>
.isolate-card {
  margin: 1em;
}
.active {
  background-color: red !important;
}
</style>
