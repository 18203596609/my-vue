import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routerList';
import { getToken } from '../utils/auth';
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to, from, next);
  if (!getToken()) {
    next();
    console.log('没有token存在 1111');
  } else{
    next();
  }
  console.log('3333');
})



export default router
