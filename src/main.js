import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import App from './App'

import Invite from './components/Invite'
import AboutUs from './components/AboutUs'
import Photos from './components/Photos'
import Location from './components/Location'
import Attendance from './components/Attendance'
import ProjectList from './components/ProjectList'

Vue.use(Router)
Vue.use(Resource)

const router = new Router({
  routes: [
    { path: '/invite', component: Invite },
    { path: '/aboutus', component: AboutUs },
    { path: '/photos', component: Photos },
    { path: '/location', component: Location },
    { path: '/attendance', component: Attendance },
    { path: '/projectlist', component: ProjectList },
    { path: '*', redirect: '/invite'}
  ]
})

var app = new Vue({
  router,
  render: h => h(App)
})

app.$mount('#app')