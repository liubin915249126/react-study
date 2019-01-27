const webpack = require('webpack')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

var proxy = require('http-proxy-middleware')
const isProd = process.env.NODE_ENV === 'production'
const cssLoader = isProd ? MiniCssExtractPlugin.loader:'style-loader'

const APP_PATH = path.resolve(__dirname,"Script") 
const config = {
    entry: {
        main: ['whatwg-fetch','babel-polyfill','./Script/main.jsx'],
        vandor:['jquery','react']
    },
    output:{
        publicPath:'',
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[hash].bundle.js',
        chunkFilename: 'js/[name][chunkhash].js',
    },
    mode: isProd ?'production':'development',
    // devtool: 'source-map',
    resolve: {
        // alias: {
        //     rootPath: path.resolve(__dirname),
        //     srcPath: path.resolve(__dirname, 'Scripts/src')
        // },
        //集成省略扩展名
        extensions: ['.js', '.json', '.jsx']
    },
    module:{
        rules:[
            {
                test: /\.(jsx|js)$/,
                exclude: /^node_modules$/,
                // use: [{loader:'babel-loader'}],
                use: ['babel-loader'],
                include: [APP_PATH]
            },
            {
                test:/\.less$/,
                //use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'less-loader' }],
                use: [ cssLoader, 'css-loader','less-loader'],
                exclude: [APP_PATH+'/src/Flow',APP_PATH+'/src/commonComponent/Table'],
            },
            {
                test:/\.less$/,
                //use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'less-loader' }],
                use: [ cssLoader, 'css-loader?modules','less-loader'],
                include: [APP_PATH+'/src/Flow',APP_PATH+'/src/commonComponent/Table'],
            },
            {
                test:/\.css$/,
                //use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'less-loader' }],
                use: [ cssLoader,'css-loader'],
            }            
        ]
    },
    devServer: {
        contentBase: "./Script",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,
        port:9099,
        proxy:{
            '/': { target: 'http://localhost:3000', secure: false }
        }
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
              cache: true,
              parallel: true,
              sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        runtimeChunk: {
          name: 'manifest'
        },
        // minimizer: true, // [new UglifyJsPlugin({...})]
        splitChunks:{
          chunks: 'async',
          minSize: 30000,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          name: false,
          cacheGroups: {
            vendor: {
              name: 'vendor',
              chunks: 'initial',
              priority: -10,
              reuseExistingChunk: false,
              test: /node_modules\/(.*)\.js/
            },
            styles: {
              name: 'styles',
              test: /\.(scss|css)$/,
              chunks: 'all',
              minChunks: 1,
              reuseExistingChunk: true,
              enforce: true
            }
          }
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'react 学习',
            inject:'body',
            filename:'index.html',
            template:path.resolve(__dirname, "index.html")
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
          })
    ]
};
module.exports = config;