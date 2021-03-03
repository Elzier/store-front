<template>
  <div class="container">
    <template v-if="cartCount">
      <ul class="list-group">
        <li class="list-group-item" v-for="(item, key) in cartItems" :key="key">
          {{ item.title }} - {{ item.price }}
        </li>
      </ul>
      <div class="panel">
        Quantity: {{ cartCount }} Total: {{ cartTotalPrice }}
      </div>
      <card
        class='stripe-card'
        :class='{ complete }'
        stripe='pk_test_51IQYXrDXAeuEaQrVQl1Vkk8XJCUicCWAQ2u94LuryJwtuCl8Tz7Sxu1Ev5JXbgCdjB2sZA2kjlZqY7gSKqW1g9Vn00zsxXwHg2'
        :options='stripeOptions'
        @change='complete = $event.complete'
      ></card>
    </template>
    <template v-else>
      <img
        class="empty-image"
        src="https://images.pexels.com/photos/21067/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <hr />
      Your cart is empty please add items to it
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Card } from 'vue-stripe-elements-plus'

export default {
  name: 'Cart',
  components: { Card },

  data: () => ({
    complete: false,
    stripeOptions: {
      // see https://stripe.com/docs/stripe.js#element-options for details
    }
  }),
  computed: {
    ...mapGetters({
      cartItems: 'cartItems',
      cartTotalPrice: 'cartTotalPrice',
      cartCount: 'cartCount',
    })
  }
}
</script>

<style scoped>
.empty-image {
  width: 400px;
}
.stripe-card {
  width: 300px;
  border: 1px solid grey;
}
.stripe-card.complete {
  border-color: green;
}
</style>
