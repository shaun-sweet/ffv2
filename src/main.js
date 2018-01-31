// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'
import Quasar, * as All from 'quasar'

import router from './router'
import store from './store'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: 'AIzaSyCguxzjPs-2ky4lDUeHszynWFWC2WqqYl4',
  authDomain: 'firefly-beta-cdb9d.firebaseapp.com',
  databaseURL: 'https://firefly-beta-cdb9d.firebaseio.com',
  projectId: 'firefly-beta-cdb9d',
  storageBucket: 'firefly-beta-cdb9d.appspot.com',
  messagingSenderId: '893008059151'
}
firebase.initializeApp(config)

firebase.auth().onAuthStateChanged((user) => {
  console.log('LOADED!')
  console.log(user)
})

Vue.config.productionTip = false
Vue.use(Quasar, {
  components: All,
  directives: All
})
Vue.use({
  install (Vue, options) {
    Vue.prototype.$auth = firebase.auth()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#q-app',
  router,
  store,
  render: h => h(require('./App').default)
})

if (__THEME === 'mat') {
  // require('quasar-extras/roboto-font')
}
// import 'quasar-extras/material-icons'
// import 'quasar-extras/ionicons'
// import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'
