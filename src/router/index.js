import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/Login.vue'
import Index from '../views/Index/Index.vue'
import Enroll from '../views/Enroll/Enroll.vue'
import Main from '../views/Index/Main.vue'
Vue.use(VueRouter)
var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/index', component: Index, children: [
        { path: '', redirect: '/index/main' },
        { path: '/index/main', component: Main }
      ]
    },
    { path: '/enroll', component: Enroll }
  ]
})
router.beforeEach((to, from, next) => {
  // console.log(to.path, from.path, next)
  next()
})
export default router