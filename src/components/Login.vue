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
import { Loading } from 'quasar'
export default {
  methods: {
    submitHandler () {
      console.log('heyyyy')
      this.$auth.signInWithEmailAndPassword(this.username, this.password)
      Loading.show()
      setTimeout(() => {
        Loading.hide()
      }, 3000)
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
