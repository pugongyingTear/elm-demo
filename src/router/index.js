import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import index from './../components/index'
// import registration from './../components/registration'
// import login from './../components/login'
// import Search from './../components/search'
// import takeOut from './../components/take-out'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'index', component: index },
    // { path: '/registration', name: 'registration', component: registration},
    // { path: '/login', name: 'login', component: login},
    // { path: '/search', name: 'search', component: Search},
    // { path: '/takeOut', name: 'take-out', component: takeOut}
  ]
})
