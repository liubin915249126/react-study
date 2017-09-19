const webpack = require('webpack')
const path = require('path');
const HtmlWebpackPlugin = require('webpack-html-plugin');

const APP_PATH = path.resolve(__dirname,"Script") 
module.exports = {
    entry: {
        main: ['whatwg-fetch','babel-polyfill','./Script/main.jsx'],
        vandor:['jquery','react']
    },
    output:{
        publicPath:'',
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[hash].bundle.js'
    },
    resolve: {
        // alias: {
        //     rootPath: path.resolve(__dirname),
        //     srcPath: path.resolve(__dirname, 'Scripts/src')
        // },
        //集成省略扩展名
        extensions: ['.js', '.json', '.jsx']
    },
    module:{
        loaders:[
            {
                test: /\.(jsx|js)$/,
                exclude: /^node_modules$/,
                use: [{loader:'babel-loader'}],
                include: [APP_PATH]
            },{
                test:/\.less$/,
                //use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'less-loader' }],
                use: ['style-loader', 'css-loader','less-loader'],
            }
        ]
    },
    devServer: {
        contentBase: "./Script",//本地服务器所加载的页面所在的目录
        historyApiFallback: true
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'react 学习',
            inject:'body',
            filename:'index.html',
            template:path.resolve(__dirname, "index.html")
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ["vandor", "manifest"]
        })
    ]
};