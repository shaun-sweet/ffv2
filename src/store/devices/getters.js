export default {
  isLoading (state) {
    return state.isLoading
  },

  watchLoading (state) {
    return () => state.isLoading
  }
}
