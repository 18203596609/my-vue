import { RouteConfig } from 'vue-router'
import LoginComponent from '../views/login.vue'
export const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'login',
    component: LoginComponent
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
    children:[{
      path:'/home/foreEnd',
      name:'foreEnd',
      children:[{
        path:'/home/foreEnd/html',
        name:'foreEndHtml'
      }]
    }]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }
]
