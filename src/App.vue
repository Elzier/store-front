<template>
  <div id="app">
    <mevn-header :categories="categories" :cartCount="cartCount"></mevn-header>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MevnHeader from '@/components/layouts/Header'

export default {
  name: 'App',
  components: {
    MevnHeader,
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    ...mapActions(['fetchCategories']),
  },
  computed: {
    ...mapGetters(['categories', 'cartCount'])
  }
};
</script>

<style lang="scss">
body,
html {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
