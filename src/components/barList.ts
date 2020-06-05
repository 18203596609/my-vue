export const barList: any = [
  {
    title: '首页'
  },
  {
    title: '前端',
    sidebar: [
      {
        label: 'html',
        children: [{
          label: 'dom',
          component:'HtmlDom'
        }],
      },
      {
        label: 'css',
        children: [{
          label: 'sass',
          component:'CssSass'
        }],
      },
      {
        label: 'js',
        children: [{
          label: 'es6',
          component:'JsEs6'
        }],
      },
      {
        label:'vue',
        children:[{
          label:'配置',
          component:'VueConfig',
        }]
      }
    ]
  }
]
