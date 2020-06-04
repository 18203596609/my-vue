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
          label: 'dom'
        }],
      },
      {
        label: 'css',
        children: [{
          label: 'sass'
        }],
      },
      {
        label: 'js',
        children: [{
          label: 'es6'
        }],
      },
      {
        label:'vue',
        children:[{
          label:'语法'
        },{
          label:'配置问题',
          name:'vueConfig',
        }]
      }
    ]
  }
]
