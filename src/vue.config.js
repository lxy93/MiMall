module.exports={
    devServer:{
        host:'localhost',
        port:8686,//端口设置
        proxy:{
            '/api':{
                target:'https://www.imooc.com',
                changeOrigin: true,
                pathRewrite:{
                    '/api':''
                }
            }
        }
    }
}