<template>
  <div class="container">
    <h2>Cart <font-awesome-icon icon="shopping-cart" /></h2>
    <template v-if="cartCount">
      <template v-if="!paymentIntent">
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(item, key) in cartItems"
            :key="key"
          >
            {{item.title}} - {{item.price}}$
          </li>
        </ul>
        <div class="panel text-right">
          Items: {{cartCount}}
          <br />
          Subtotal: {{cartTotalPrice}}$
          <hr />
        </div>
      </template>

      <div v-if="!paymentIntent" class="btn_buy">
        <button class="btn btn-primary" @click="getHandleBuyIntent">Buy</button>
      </div>

      <template v-if="paymentIntent">
        <card
          ref="card"
          class="stripe-card"
          :class="{complete}"
          stripe="pk_test_51IQYXrDXAeuEaQrVQl1Vkk8XJCUicCWAQ2u94LuryJwtuCl8Tz7Sxu1Ev5JXbgCdjB2sZA2kjlZqY7gSKqW1g9Vn00zsxXwHg2"
          :options="stripeOptions"
          @change="complete = $event.complete"
        />
        <button class="btn btn-success btn_pay" @click="pay" :disabled="!complete">
          Pay with credit card
        </button>
      </template>


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
import {mapGetters, mapActions, mapMutations} from 'vuex'
import {Card, handleCardPayment} from 'vue-stripe-elements-plus'

export default {
  name: 'Cart',
  components: { Card },

  data: () => ({
    complete: false,
    paymentIntent: null,
    stripeOptions: {
      // see https://stripe.com/docs/stripe.js#element-options for details
    }
  }),
  computed: {
    ...mapGetters(['cartItems', 'cartTotalPrice', 'cartCount']),
  },
  methods: {
    ...mapActions(['handleBuy']),
    ...mapMutations(['clearCart']),
    async getHandleBuyIntent () {
      const intent = await this.handleBuy()
      this.paymentIntent = intent.client_secret
    },
    async pay() {
      await handleCardPayment(this.paymentIntent)
      this.clearCart()
    }
  }
}
</script>

<style scoped>
.empty-image {
  width: 400px;
}
.btn_buy {
  display: flex;
  justify-content: flex-end;
}
.btn_pay {
  margin-top: 10px;
}
.panel {
  margin-top: 11px;
}
</style>
