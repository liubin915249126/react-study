 ## 目录说明：
 >
 [webpack配置](https://github.com/liubin915249126/react-study#webpack配置)
 >
 >
 [安装react](https://github.com/liubin915249126/react-study#安装react)
 >
 >
 [使用路由](https://github.com/liubin915249126/react-study#使用路由)
 >
 >
 [安装-antd](https://github.com/liubin915249126/react-study#7安装-antd)
 >
 >
 [nodejskoa2提供后台接口](https://github.com/liubin915249126/react-study#10使用nodejskoa2提供后台接口)
 >
 >
 [使用fetch](https://github.com/liubin915249126/react-study#9使用新的ajax模型--fetch)
 >

>
技术栈：webpack3.5.6+react+react-router-dom4.0+fetch+koa2


>



# webpack与react
## webpack配置

#### 0.初始化项目
     cd 'your/path/' npm init;  
#### 1.安装webpack
     安装cnpm镜像
     npm install -g cnpm --registry=https://registry.npm.taobao.org
     全局安装：cnpm install webpack -g;
     项目内安装：cnpm install webpack --only=dev --save;
#### 2.配置webpack.config.js文件
```
     const path = require('path');

     module.exports = {
         entry: './Script/main.js', //项目入口文件
         output:{                    //输出编译后文件地址及文件名
             path: path.resolve(__dirname, 'dist'),
             filename: 'bundle.js'
         }
     };
```          
命令行里面执行 webpack 命令即可看到编译后的文件
#### 3安装webpack-html-plugin
npm install html-webpack-plugin --save-dev
```
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    ...
    plugins:[
        ...
        new HtmlWebpackPlugin({
            title:'react 学习',
            inject:'body',
            filename:'index.html',
            template:path.resolve(__dirname, "index.html")
        }),
        ...
    ]
```          
>
再次执行webpack命令可看到多了一个index.html文件
这个文件是根据模板生成的并自动引入打包生成的js文件
运行打包后的index.html即可看到效果。
>

## 安装react
#### 4.安装 react react-dom babel

npm install react react-dom --save

配置laoder
```
...
module:{
        loaders:[
            {
                test: /\.jsx$/,
                exclude: /^node_modules$/,
                use: [{loader:'babel-loader'}],
                include: [APP_PATH]
            }
        ]
    }
    ...
```
```
    npm install babel-preset-react --save-dev
    npm install babel-loader babel-core babel-preset-env --save-dev
    npm install babel-preset-stage-0 babel-preset-stage-1 babel-preset-stage-3 --save-dev
```
>
配置 .babelrc
创建一个文件.babelrc。Babel是一个工具你可以转换ES6到现在的Javascript。React需要配置env和stage-0：
>
```
   {
    "presets": [
        "react",
        "env",
        "stage-0",
    ]
    ...
}
```
更改main.js为main.jsx修改代码为
```
    import React from 'react';
    import ReactDOM from 'react-dom';

    class MainView extends React.Component{
        constructor(props){
            super(props)
        }
        render(){
            return (<div>
                测试
            </div>)
        }
    }
    ReactDOM.render(
        <MainView/>,
        document.getElementById('main')

    )
```
打开打包生成的页面即可看到
打包时出错
(npm install --save bluebird)
![index1](https://github.com/liubin915249126/react-study/blob/master/images/index1.png)

#### 5.使用webpack-dev-server
npm install webpack-dev-server --save-dev
配置webpack.config.js
```
    ...
    devServer: {
        historyApiFallback: true,
    },
    ...
```  
配置package.json里面命令
```
    "start":"webpack-dev-server --hot --inline --progress --open"
```
执行 npm start 浏览器自动打开页面，更改文件后即可看到页面实时更新
![index2](https://github.com/liubin915249126/react-study/blob/master/images/index2.png)

## 使用路由
#### 6.react-router4.2.0
     npm install --save react-router
     npm install --save react-router-dom
react-router4.0相对于之前版本变化比较大:
>
路由配置文件：
>
```
const routes =[
    { path: '/', component: LoginView, exact:true},
    { path: '/login', component: LoginView},
    { path: '/main', component: Main ,routes:[
        { path: '/main', component: Home, exact:true},
        // { path: '/main/home', component: Home},
        { path: '/main/about', component: About},
        { path: '/main/timeline/:status', component: TimeLine}
    ]}
]
```
>
递归生成路由
```
const RouteWithSubRoutes = (route) => (
    route.exact?<Route path={route.path} exact render={props => (
        <route.component {...props} routes={route.routes}>
            <Switch>
            {route.routes&&route.routes.map((route,i)=>{
                return <RouteWithSubRoutes key={i} {...route} />
            })}
            </Switch>
        </route.component>    
    )} />:<Route path={route.path} render={props => (
        <route.component {...props} routes={route.routes}>
           <Switch>
            {route.routes&&route.routes.map((route,i)=>{
                return <RouteWithSubRoutes key={i} {...route} />
            })}
          </Switch> 
        </route.component>    
    )} />
)
```
>
>
加载路由：
>
```
     ...
     import { Route, Link, Switch, BrowserRouter, HashRouter } from 'react-router-dom';
     ...
     render(){
        return(
             <HashRouter>
                <Switch>
                {routes.map((route,i)=>{
                    return <RouteWithSubRoutes key={i} {...route} />
                })}
                </Switch>
            </HashRouter>
        )
    }

``` 
>
 BrowserRouter和HashRouter 这里遇到两个坑(坑4),使用BrowserRouter的话，子路由页面刷新的时候，
 会加载不到打包的资源文件(加载路径变化),打包后的页面打开后是空白的。
>
>    
参考文献[react.config](https://reacttraining.com/react-router/web/example/route-config)
[github](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/migrating.md)地址
>
## 7.安装 antd
npm install antd --save
按需加载组件 npm install babel-plugin-import --save-dev
配置 .babelrc
```
    ...
   "plugins": [["import", {
    "libraryName": "antd",
    "style": true
  }]]
```
#### 8.配置webpack.config.js加载less/css文件
npm install less-loader css-loader style-loader less --save -dev
(坑3忘了安装less)
参考文献[less-loader](https://github.com/webpack-contrib/less-loader)
```{
    test:/\.less$/,
    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'less-loader' }]
   }
```
加载less文件加载组件
```
   ...
   import 'antd/dist/antd.less';
   import {DatePicker,message} from 'antd';
   ...
   render() {
        return (<div>
            <DatePicker onChange={value => this.handleChange(value)} />
        </div>)
```
效果图![效果图](https://github.com/liubin915249126/react-study/blob/master/images/antd1.png)
#### 9.使用新的ajax模型--fetch
>
参照官方文档[github/fetch](https://github.com/github/fetch)
可以自己封装一个request函数：
>
```
  function request(url,options){
    return fetch(url,{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        ...options
    })
        .then(checkStatus)
        .then(parseJSON)
        .catch(e=>{
            console.log(e)
        })
  }
```
>
在使用async await关键字时报错，安装 babel-polyfill 并引入
参考[babel-polyfill](http://babeljs.io/docs/usage/polyfill/)
```
    npm install babel-polyfill --save 
``` 

>
## 10.使用nodejs+koa2提供后台接口
npm install koa koa-router --save-dev
>
在根目录下下新建server/index.js文件index.js:
>
```
    const Koa = require('koa');
    const router = require('koa-router')();
    const app = new Koa();
    router.get('/', (ctx, next)=> {
        ctx.response.body = '111'
    });

    app
        .use(router.routes())
        .use(router.allowedMethods());

    app.listen(3000,()=>{
       console.log('server is start at port 3000')
    });
    
```
>
package.json里面设置命令:"server":"node server index.js"
启动服务:npm run server
浏览器里面访问localhost/3000可看到返回值
>
#### 11.设置koa允许前端跨域访问
>
使用[koa2-cors](https://github.com/zadzbw/koa2-cors)设置跨域
安装npm install koa2-cors --save-dev
```
   ...
    app.use(cors({
        origin: function (ctx) {
            if (ctx.url === '/test') {
                return false;
            }
            return '*';
        },
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
        maxAge: 5,
        credentials: true,
        allowMethods: ['GET', 'POST', 'DELETE'],
        allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
    }));
    ...
```
>
#### 6.分离公共代码
webpack配置
```
    module.exports = {
        entry: {
            main: './Script/main.js',
            vandor:['jquery']
        },
        output:{
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[hash].bundle.js'
        },
        plugins:[
            ...
            new webpack.optimize.CommonsChunkPlugin({
                names: ["vandor", "manifest"]
            })
        ]
    }
```
### 路由级别的按需加载
webpack配置
```
   output:{
        publicPath:'',
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[hash].bundle.js',
        chunkFilename: 'js/[name][chunkhash].js',
    },
```
>
安装 react-loadable 
```
   npm install react-loadable --save-dev
```
使用：
```
   const HomeComponent = Loadable({
    loader: () => import('./home/HomeView'),
    loading: LoadingPage
    })
    function LoadingPage(){
        return <div>loading...</div>
    }
```
参考文献[github](https://github.com/thejameskyle/react-loadable)
[github](https://github.com/thejameskyle/react-loadable-example.git)
[react-router](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/code-splitting.md)
>

#### 使用mobx
>
安装：cnpm install mobx mobx-react --save;
>
plugins:['transform-decorators-legacy']
npm install babel-plugin-transform-decorators-legacy --save-dev