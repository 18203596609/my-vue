export default [
  {
    path: 'index',
    name: 'page/index',
    // component: () => import('@/views/layout.vue'),
    component: () => import('@/views/Home.vue')
    // children: [
    //   {
    //     path: '/index',
    //     name: 'index',
    //     component: () => import('@/views/Home.vue')
    //   }]
  },
]
