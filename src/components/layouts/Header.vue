<template>
  <header class="header">
    <div class="header__left">
      LOGO
    </div>
    <div class="header__right">
      <router-link to="/cart"> Cart {{ cartCount }} </router-link>
      <ul class="nav">
        <li
          class="nav__link"
          v-for="({ id, title }, key) in categories"
          :key="key"
        >
          <router-link :to="`category/${id}`">{{ title }}</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MevnHeader',
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
    cartCount: {
      type: Number,
      default: 0,
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

.nav {
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  width: 100%;
  padding-inline-start: 0;

  &__link {
    margin-right: 10px;
    a {
      cursor: pointer;
      text-decoration: none;
      color: black;
      &:hover {
        color: olive;
      }
    }
  }
}
</style>
