<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    
    <header></header>
    <main>
      <router-view></router-view>
      <q-spinner :size="30"/>
    </main>
  </div>
</template>

<script>

export default {
  mounted () {
    this.$q.events.$on('app:loading', state => {
      console.log(`Loading has become ${state ? 'visible' : 'hidden'}`)
    })
  }
}
</script>

<style lang="stylus">
@import '~variables'

</style>
