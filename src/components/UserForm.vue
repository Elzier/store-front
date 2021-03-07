<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="formGroupExampleInput">Your name</label>
      <input
        v-model="formData.fullName"
        type="text"
        class="form-control"
        id="userFullName"
        placeholder="Name"
      />
    </div>
    <div class="form-group">
      <label for="formGroupExampleInput2">Your adress</label>
      <input
        v-model="formData.adress"
        type="text"
        class="form-control"
        id="userAdress"
        placeholder="Adress"
      />
    </div>
    <div class="form-group">
      <label for="formGroupExampleInput">Your telephone number</label>
      <input
        v-model="formData.phone"
        type="text"
        class="form-control"
        id="userTelephoneNumber"
        placeholder="Number"
      />
    </div>
    <div class="form-group">
      <label for="formGroupExampleInput2">Your email</label>
      <input
        v-model="formData.email"
        type="text"
        class="form-control"
        id="userEmail"
        placeholder="Email"
      />
    </div>
    <button class="btn btn-primary">Buy</button>
  </form>
</template>

<script>
export default {
  name: 'UserForm',
  data: () => ({
    formData: {
      fullName: '',
      adress: '',
      phone: '',
      email: '',
    },
  }),
  methods: {
    handleSubmit() {
      this.$emit('formSubmit', this.formData)
    },
  },
}
</script>
