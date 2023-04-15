import { useRef, useState } from 'react'
const App = () => {
    console.log('我渲染了一次')

    const titleRef = useRef()

    // useState 返回一个数组 第一个元素是初始值 第二个元是用来重新渲染组件的方法
    let [counter, setCounter] = useState(1)
    // let counter = 1
    // 递增的函数
    const addHandler = () => {
        // return counter++ // 这里虽然 counter 的值回发生变化 但是 并不会影响到 显示的 counter 值 因为自始至终 组件只被渲染了一次

        // 使用 setState 来对组件的显示内容做出更改 可以重新渲染组件
        // setCounter(counter + 1) 
        // setCounter 中也可以传入回调函数 回调函数的返回值回成为新的 counter 值 当然在这个场景下就显得有些多余
        // setCounter(() => counter + 1)
        // 上面的代码同样有问题 因为 setCounter 是异步调用的 当 点击的速度足够快时 可能导致两次更改时 使用的 counter 没有来得及变化 也就是说 两次点击实际上只成功触发一次变化
        // 下面是复现问题的代码 此时 若在一秒内连续几次点击 + 会触发事件 但是值只会变更一次
        // setTimeout(() => {
        //     setCounter(counter + 1) // 原因是 几次点击事件是放入队列中执行的 加了延时处理后 而这里的counter 是全局变量 导致几次塞进队列时候的counter 都是同一个counter 值 所以造成多次事件触发 值只变更一次的问题
        // }, 1000)

        // 解决方案就是每次调用的时候 在回调函数中获取最新的 当前 counter 的值
        // setCounter 中传入 回调函数函数时  可以从 回调函数的第一个参数 拿到最新的当前 counter 值
        setCounter(preCounter => preCounter + 1)

        // 可以测试下 是否好使
        // setTimeout(() => {
        //     setCounter(preCounter => preCounter + 1) //  肥肠好使
        // }, 1000)




    }
    // 递减的函数
    const minusHandler = () => {
        setCounter(preCounter => preCounter - 1)
    }

    return (
        <div style={{ backgroundColor: "#bfa", width: "200px", margin: "20px auto" }}>
            <h1 ref={titleRef}>test</h1>
            <h1 style={{ textAlign: "center" }}>{counter}</h1>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button style={{ width: "50px", height: "30px", fontSize: "16px" }} onClick={minusHandler}>-</button>
                <button style={{ width: "50px", height: "30px", fontSize: "16px" }} onClick={addHandler}>+</button>
            </div>
        </div>
    )

    console.log(titleRef.current.innerHTML)
    titleRef.current.innerHTML = 'test2'
}

export default App
