import './LogForm.css'
import Card from '../UI/Card/Card'
import { useState } from 'react'

const LogForm = (props) => {
    let [inputDate, setDate] = useState('')
    let [inputTitle, setTitle] = useState('')
    let [inputTime, setTime] = useState('')

    const handleDate = (e) => {
        // onchange事件中获取当前输入框输入内容的 几种方式
        //     - 直接使用 document 原生api 获取当前输入的值
        //     - 使用 useRef 进行DOM元素绑定 然后通过绑定后的 ref.current 获取当前 DOM 元素的 input 值
        //     - 使用回调函数中的 e 传参 通过 e.target.value 获取当前的元素值
        setDate(e.target.value)

    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleTime = (e) => {
        setTime(e.target.value)
    }

    const handleSubmit = (e) => {
        // 阻止默认事件
        e.preventDefault()
        const formData = {
            id: Date.now(),
            date: new Date(inputDate),
            title: inputTitle,
            time: inputTime + '分钟'
        }
        props.addItem(formData)
        // 清空表单
        setDate('')
        setTitle('')
        setTime('')
    }

    return (
        <Card className="log-form">
            <form onSubmit={handleSubmit}>
                <div className="form-item">
                    <label htmlFor='date'>日期</label>
                    <input type='date' name='date' value={inputDate} id='date' onChange={handleDate} />
                </div>

                <div className="form-item">
                    <label htmlFor='title'>标题</label>
                    <input type='text' name='title' value={inputTitle} id='title' onChange={handleTitle} />
                </div>
                <div className="form-item">
                    <label htmlFor='time'>时间</label>
                    <input type='number' min='5' name='time' value={inputTime} id='time' onChange={handleTime} />
                </div>
                <div className="btn-wrapper">
                    <button className="submit-btn">提交</button>
                </div>

            </form>
        </Card>
    )
}

export default LogForm
