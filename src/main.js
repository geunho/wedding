import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import LazyLoad from 'vue-lazyload'
import App from './App'

import Invite from './components/Invite'
import AboutUs from './components/AboutUs'
import Photos from './components/Photos'
import Location from './components/Location'
import Attendance from './components/Attendance'
import AttendanceList from './components/AttendeeList'

Vue.use(Router)
Vue.use(Resource)
Vue.use(LazyLoad)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/invite', component: Invite },
    { path: '/aboutus', component: AboutUs },
    { path: '/photos', component: Photos },
    { path: '/location', component: Location },
    { path: '/attendance', component: Attendance },
    { path: '/attendancelist', component: AttendanceList },
    { path: '*', redirect: '/invite'}
  ],
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
})

var app = new Vue({
  router,
  render: h => h(App)
})

app.$mount('#app')

// load assets
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('src/assets/photos/', true));