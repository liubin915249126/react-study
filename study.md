## getDerivedStateFromProps getSnapshotBeforeUpdate
#### getDerivedStateFromProps
>
  这一生命周期方法是静态的，它在组件实例化或接收到新的 props 时被触发
  组件创建时和更新时的render方法之前调用，它应该返回一个对象来更新状态，或者返回null来不更新任何内容
  ```js
    static getDerivedStateFromProps(nextProps, prevState) {
        const {type} = nextProps;
        // 当传入的type发生变化的时候，更新state
        if (type !== prevState.type) {
            return {
                type,
            };
        }
        // 否则，对于state不进行任何操作
        return null;
    }
  ``` 
>
#### getSnapshotBeforeUpdate() 
>
  被调用于render之后，可以读取但无法使用DOM的时候。它使您的组件可以在可能更改之前从DOM捕获一些信息（例如滚动位置）。此生命周期返回的任何值都将作为参数传递给componentDidUpdate（）
  ```js
     getSnapshotBeforeUpdate(prevProps, prevState) {
    //我们是否要添加新的 items 到列表?
    // 捕捉滚动位置，以便我们可以稍后调整滚动.
    if (prevProps.list.length < this.props.list.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  } 
  ```
>
## React Hook
#### State Hook
#### Effect Hook 
>
  useEffect方法接收传入两个参数：
  1.回调函数：在第组件一次render和之后的每次update后运行，React保证在DOM已经更新完成之后才会运行回调。
  2.状态依赖(数组)：当配置了状态依赖项后，只有检测到配置的状态变化时，才会调用回调函数。
  useEffect的第一个参数可以返回一个函数，当页面渲染了下一次更新的结果后，执行下一次useEffect之前，会调用这个函数。这个函数常常用来对上一次调用useEffect进行清理。
>

## HOC
#### 反向继承
```js
   function styleHOC(WrappedComponent) {
    return class extends WrappedComponent {
        render() {
        return <div>
            <div className="title">{this.props.title}</div>
            {super.render()}
        </div>
        }
    }
    } 
```
compose函数返回一个所有函数组合后的函数，compose(f, g, h) 和 (...args) => f(g(h(...args)))是一样的。
很多第三方库都提供了类似compose的函数，例如lodash.flowRight，Redux提供的combineReducers函数等。

+