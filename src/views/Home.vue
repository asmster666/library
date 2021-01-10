<template>
  <div class="home">
    <Form />
  </div>
</template>

<script>
import Form from '../components/sign_in_form.vue'

export default {
    name: 'Home',
    components: {
      Form
    }
}
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
    height: auto;
    margin: 10rem auto;
  }
</style>
