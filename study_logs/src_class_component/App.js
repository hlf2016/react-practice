import React from 'react'

// 类组件 必须继承 React.Component
// 相比于函数组件也要更复杂一些
class App extends React.Component {
    // 类组件中必须实现 render 方法 render 方法 返回一个 jsx 节点
    render() {
        return <div>我是类组件</div>
    }
}

export default App
