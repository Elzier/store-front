<template>
  <div class="card h-100">
    <a href="#"><img class="card-img-top" :src="imageUrl" alt=""/></a>
    <div class="card-body">
      <h4 class="card-title">
        <a href="#">{{ title }}</a>
      </h4>
      <h5>{{ price }}$</h5>
    </div>
    <div class="card-footer">
      <button class="btn btn-info" @click="$emit('add-to-cart')" v-if="!inCart">
        Add to cart
      </button>
       <button class="btn btn-danger" @click="$emit('add-to-cart')" v-else>
        Remove
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
// .card {
//   width: 265px;
//   height: 250px;
//   padding: 10px;
//   margin: 10px;
//   border: 1px solid black;
//   border-radius: 12px;
//   img {
//     display: block;
//     width: 70%;
//     height: 66%;
//     margin: 0 auto;
//     margin-top: 10px;
//   }
//   &__footer {
//     margin-top: 10px;
//   }
// }
// </style>
