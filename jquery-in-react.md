## 在react里面使用jquery插件

#### 背景:
     虽然现在react,vue等框架开启了前端开发的新篇章，
     但对于一些比较复杂的页面，比如想在项目里面生成
     组织架构图，人员汇报关系等还是需要用到之前的
     jquery插件。比如：
[jsplumb](https://segmentfault.com/a/1190000011099455)
[spacetree](https://segmentfault.com/a/1190000011132218)
[lenchart](https://segmentfault.com/a/1190000010978444)  

#### 首先要在react里面引用jquery
```
     cnpm i --save-dev jquery
     修改webpack配置文件:
     plugins:[
        new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
        "window.jQuery":"jquery"
        })
      ]
``` 
将$变量挂载到window下面，可以在项目中直接使用$,不用再引用

#### 使用jquery插件的姿势
     首先用require(/your/path/jquery.plugin)引用jquery插件
     webpack支持ES6的import,requirejs.commonjs语法，可以用CMD,
     AMD的方式引用。

##### AMD写法：
```
     define(["jquery"],function($){
         ...
         var initialChart = function(data){
             //插件逻辑
         }
         ...
         $(function(){
             //页面逻辑
         })
         ...
         
         return{
            initialChart:initialChart //导出函数
         } 
     })
```     
##### CMD写法
```   function orgOrgChart(data){
          //插件逻辑
      }
      $(function(){
             //页面逻辑
      })
      module.exports.orgOrgChart = orgOrgChart //导出函数
```
#### 最后在react里面引用导出的函数并在生命周期函数里面调用
```
     import {initialChart} from '../../es5Components/emp-orgChart.js' 
     import {orgOrgChart} from '../../es5Components/emp-orgChart.js' 
     
     ...
     componentDidMount(){
         initialChart(this.state.data);
         orgOrgChart(this.state.data)
     }
     ....
```
#### [github](https://github.com/liubin915249126/react-study/tree/master/jquery%20in%20react)
