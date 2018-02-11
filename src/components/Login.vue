<template>
<div>
  <form @submit="submitHandler">
    <input v-model="username" type="text" />
    <input v-model="password" type="password"/> 
    <input type="submit" />
  </form>
YAY OKAY
</div>
</template>

<script>

export default {
  methods: {
    submitHandler () {
      console.log('heyyyy')
      this.$auth.signInWithEmailAndPassword(this.username, this.password)
    }
  },
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
