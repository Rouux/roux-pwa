<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div v-for="feature in features" v-bind:key="feature.id">
      <feature-card :name="feature.name" />
    </div>
  </div>
</template>

<script>
import FeatureCard from '../components/FeatureCard.vue';
import { features } from '../components/features';

export default {
  name: 'Home',
  components: {
    FeatureCard
  },
  data() {
    return {
      features
    };
  }
};
</script>
