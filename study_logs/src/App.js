import Log from './Components/Log/Log'
import LogForm from './Components/LogForm/LogForm'
import { useState } from 'react'
import './App.css'

const App = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            date: new Date(2023, 3, 11, 12, 30),
            title: '学习 React',
            time: '40 分钟',
        },
        {
            id: 2,
            date: new Date(2023, 3, 10, 12, 30),
            title: '学习 666',
            time: '50 分钟',
        },
    ])

    // 向 items 中添加项目
    const addItem = (item) => {
        setItems([...items, item])
    }

    // 根据 index 删除 items 项目
    // const deleteItem = (index) => {
    //     // 传入的是一个闭包 闭包中总能获取 执行时 最新的 items
    //     setItems((prevItems) => {
    //         const newItems = [...prevItems]
    //         newItems.splice(index, 1)
    //         return newItems
    //     })
    // }

    const deleteItem = (id) => {
        // 传入的是一个闭包 闭包中总能获取 执行时 最新的 items
        setItems((prevItems) => {
            return prevItems.filter(item => item.id !== id)
        })
    }

    return (
        <div className="app">
            {/* 向子组件中传递添加item的回调函数 */}
            <LogForm addItem={addItem} />
            <Log deleteItem={deleteItem} items={items} />
        </div>
    )
}

export default App
