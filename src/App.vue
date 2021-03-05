<template>
  <div id="app">
    <mevn-header :categories="categories" :cartCount="cartCount"></mevn-header>
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <h1 class="my-4">Categories</h1>
          <div class="list-group">
            <router-link
              v-for="({_id, title}, key) in categories"
              :key="key"
              :to="`/category/${_id}`"
              class="list-group-item"
            >
              {{ title }}
            </router-link>
          </div>
        </div>
        <div class="col-lg-9 margin-s">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
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
body {
  padding-top: 56px;
}

.margin-s {
  margin-top: 95px;
}
</style>
