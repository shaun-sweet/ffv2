<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <div class="entry">
      <header></header>
      <main>
        <button @click="handleClick">HANDLE ME</button>
        <router-view v-if="!isLoading"></router-view>
        <q-spinner :size="30"/>
      </main>

    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import {Loading} from 'quasar'
export default {
  mounted () {
    this.$store.watch(this.$store.getters.watchLoading, (loading) => {
      loading ? Loading.show() : Loading.hide()
    })
  },
  methods: {
    handleClick (e) {
      this.toggleLoading(true)
    },
    ...mapActions({
      toggleLoading: 'isLoading'
    })
  },
  computed: {
    ...mapGetters([
      'isLoading'
    ])
  }
}
</script>

<style lang="stylus">
@import '~variables'

</style>
