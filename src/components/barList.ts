export const BarList = [
  {
    title: '首页',
    name: 'home',
    path:'/page/index',
    sidebar: [],
  },
  {
    title: '前端',
    name: 'front',
    path:'/page/front',
    sidebar: [{
      label: 'html',
      path: '/page/front/html',
    },
    {
      label: 'css',
      path: '/page/front/css',
      // children: [{
      //   label: 'sass',
      //   path: 'CssSass'
      // }],
    },
    {
      label: 'js',
      path: '/page/front/js',
      children: [{
        label: 'es6',
        path: '/page/front/js/es6'
      }],
    },
    {
      label: 'vue',
      path: '/page/front/vue',
      children: [{
        label: '配置',
        path: 'VueConfig',
      }]
    }]
  }]



// export const BarList = {
//   home: [],
//   front: [{
//     label: 'html',
//     path: 'front/html',
//     // children: [{
//     //   label: 'dom',
//     //   path:'HtmlDom'
//     // }],
//   },
//   {
//     label: 'css',
//     path: 'front/css',
//     children: [{
//       label: 'sass',
//       path: 'CssSass'
//     }],
//   },
//   {
//     label: 'js',
//     path: 'front/js',
//     children: [{
//       label: 'es6',
//       path: 'JsEs6'
//     }],
//   },
//   {
//     label: 'vue',
//     children: [{
//       label: '配置',
//       path: 'VueConfig',
//     }]
//   }]


// }
