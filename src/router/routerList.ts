import { RouteConfig } from 'vue-router'
import LoginComponent from '../views/login.vue'
import Home from './modules/home';
import Front from './modules/front';
export const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'login',
    component: LoginComponent
  },
  {
    path: '/page',
    name: 'page',
    component: () => import('@/views/layout.vue'),
    children: [
      ...Home,
      ...Front
      // {
      //   path: 'home',
      //   name: 'page/home',
      //   // component: () => import('@/views/layout.vue'),
      //   component: () => import('@/views/Home.vue')
      // }
    ]
  }
]
