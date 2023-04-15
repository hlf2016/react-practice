import { Component, createRef } from 'react'

class User extends Component {
    // 类组件中 什么都离不开 this
    // this.props
    //      - 类组件接受的父组件的传值都存储在 this.props 中
    // 类组件中 也不存在 useState 的用法 所有的 state 都是聚集类组件实例的 state 属性中
    //      - 修改 this.state 中的值 要使用 this.setState 方法
    //      - 修改 this.state 时 如果修改的是 this.state 本身 那么 变动后 只有 在 this.setState 方法中设置的值 才会发生改变 未设置的则保持原样 不会改变  可如果修改的是 this.state 本身 属性 的 对象 那么 只有设置的存在 未设置的会直接消失掉 

    state = {
        count: 0,
    }

    // 类组件中 替代 useRef 的用法是  createRef()
    currentRef = createRef()

    clickHandler = () => {
        // this.setState({ count: this.state.count + 1 }) // 因为是异步触发 所以存在跟 函数式组件 一样的问题 当点击足够快时 会导致 多次点击 跟预期结果不一致
        this.setState((preState) => {
            // preState 即为当前回调函数执行时 获取到的 最新的 state 
            return { count: preState.count + 1 }
        })

        // 输出currentRef 的 current 属性 也就是所绑定的 dom 元素
        console.log(this.currentRef.current)
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.clickHandler}>+</button>
                {/* 使用 ref */}
                <ul ref={this.currentRef}>
                    <li>Name: {this.props.name}</li>
                    <li>Age: {this.props.age}</li>
                </ul>
            </div>

        )
    }
}

export default User
