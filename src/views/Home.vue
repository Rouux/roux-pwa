<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div v-for="user in users" v-bind:key="user.id">
      <span>{{ user }}</span>
    </div>
    <div v-for="feature in features" v-bind:key="feature.name">
      <feature-card :name="feature.name" />
    </div>
  </div>
</template>

<script>
import FeatureCard from '../components/FeatureCard.vue';
import { features } from '../components/features';
import { bus } from '../main';
import { EVENTS } from '../utils/const';

const DEFAULT_HEADER = 'Home';

export default {
  name: 'Home',
  components: {
    FeatureCard
  },
  data: function() {
    return {
      users: [],
      features: features()
    };
  },
  mounted: function() {
    bus.$emit(EVENTS.CHANGE_NAV_HEADER, DEFAULT_HEADER);
  }
};
</script>
