export default [{
  path: 'front',
  name: 'front',
  component: () => import('@/views/front.vue'),
  children: [
    {
      path: 'html',
      name: 'html',
      component: () => import('@/components/front/html/index.vue')
    },
    {
      path: 'css',
      name: 'css',
      component: () => import('@/components/front/css/index.vue')
    },
    {
      path: 'js',
      name: 'js',
      redirect: 'js/es6',
      component: () => import('@/components/front/js/index.vue'),
      children: [
        {
          path: 'es6',
          name: 'es6',
          component:()=>import ('@/components/front/js/es6.vue')
        }
      ]
    },
    {
      path: 'vue',
      name: 'vue',
      component: () => import('@/components/front/vue/index.vue')
    }
  ]
}]
  // ]
// }
