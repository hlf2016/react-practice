import MyDate from '../MyDate/MyDate'
import Card from '../UI/Card/Card'
import ConfirmModal from '../UI/ConfirmModal/ConfirmModal'
import { useState } from 'react'
import './LogItem.css'

const LogItem = (props) => {
    let [showModal, setShowModal] = useState(false)
    const { date, title, time } = props
    const removeItem = () => {
        // 不断点击 x 号按钮，弹窗会不断出现 因此需要一个全屏幕的遮罩层 随弹窗一起出来 
        setShowModal(true)
    }

    // 处理 弹窗 取消按钮点击事件
    const handleCancel = () => {
        setShowModal(false)
    }

    // 处理 弹窗 确定按钮点击事件
    const handlerConfirm = () => {
        // 调用删除 item 的回调函数
        props.onDeleteItem()
        setShowModal(false)
    }

    return (
        // 使用 Card 组件
        <Card className="log-item">
            {showModal && <ConfirmModal confirmHandler={handlerConfirm} cancelHandler={handleCancel} />}
            <MyDate date={date} />
            <div className="content">
                {/* <h2 className="title">学习 React</h2> */}
                <div className="title">{title}</div>
                <div className="time">{time}</div>
            </div>
            <div>
                <div onClick={removeItem} className='remove-btn'>×</div>
            </div>

        </Card>
    )
}

export default LogItem
