import getInitialState from './initialState'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = getInitialState()

export default {
  state,
  mutations,
  actions,
  getters
}
