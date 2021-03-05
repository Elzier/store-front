<template>
  <div class="row">
    <div
      v-for="(product, key) in products"
      :key="key"
      class="col-xl-4 col-md-6 mb-4"
    >
      <product-card
        :title="product.title"
        :price="product.price"
        :imageUrl="product.imageUrl"
        @add-to-cart="addToCart(product)"
        :inCart="cartItemsIds.includes(product._id)"
        :description="product.description"
      ></product-card>
    </div>
  </div>

</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import ProductCard from '@/components/ProductCard'

export default {
  name: 'Home',
  components: {
    ProductCard
  },
  mounted() {
    this.fetchProducts()
  },
  computed: {
    ...mapGetters({
      products: 'products',
      cartItems: 'cartItems',
    }),
    cartItemsIds: ({ cartItems }) => cartItems.map(({ _id }) => _id),
  },
  methods: {
    ...mapActions(['fetchProducts', 'addToCart'])
  }
}
</script>

<style lang="scss" scoped>
.product-list {
  display: flex;
}

</style>
