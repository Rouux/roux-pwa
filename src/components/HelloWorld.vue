<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <md-card md-with-hover class="isolate-card">
      <md-ripple>
        <md-card-header>
          <div class="md-title">{{ title }}</div>
          <div class="md-subhead">It also have a ripple</div>
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque
          ea, nostrum odio. Dolores, sed accusantium quasi non.
        </md-card-content>

        <md-card-actions>
          <md-button>Like</md-button>
          <md-button>Share</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.isolate-card {
  margin: 1em;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
