module.exports={
    publicPath:'./', // 部署应用包的路径
    outputDir:'dist', // 打包构建时的输出目录,
    lintOnSave: false, // 关闭eslint检查

    devServer:{
        open:true,
        port:1111,
    }
}