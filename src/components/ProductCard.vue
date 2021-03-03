<template>
  <div class="card">
    <div class="card__header">{{ title }} - {{ price }}$</div>
    <img :src="imageUrl" alt="card-image">
    <div class="card__footer">
      <button class="btn btn-info" @click="$emit('add-to-cart')" v-if="!inCart">
        Добавить в корзину
      </button>
      <button class="btn btn-danger" @click="$emit('add-to-cart')" v-else>
        Убрать из корзины
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    title: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      default: 0,
    },
    imageUrl: {
      type: String,
      default: '',
    },
    inCart: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 265px;
  height: 250px;
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
  border-radius: 12px;
  img {
    display: block;
    width: 70%;
    height: 66%;
    margin: 0 auto;
    margin-top: 10px;
  }
  &__footer {
    margin-top: 10px;
  }
}
</style>
