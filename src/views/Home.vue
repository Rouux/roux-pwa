<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div v-for="feature in features" v-bind:key="feature.name">
      <feature-card :name="feature.name" />
    </div>
  </div>
</template>

<script>
import FeatureCard from '../components/FeatureCard.vue';
import { features } from '../components/features';
import { bus } from '../main';
import { events } from '../utils/const';

const DEFAULT_HEADER = 'Home';

export default {
  name: 'Home',
  components: {
    FeatureCard
  },
  data: function() {
    return {
      features: features()
    };
  },
  mounted: function() {
    bus.$emit(events.CHANGE_NAV_HEADER, DEFAULT_HEADER);
  }
};
</script>
