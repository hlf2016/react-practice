import MyDate from '../MyDate/MyDate'
import './LogItem.css'

const LogItem = (props) => {
    const { date, title, time } = props
    return (
        <div className="log-item">
            <MyDate date={date} />
            <div className="content">
                {/* <h2 className="title">学习 React</h2> */}
                <div className="title">{title}</div>
                <div className="time">{time}</div>
            </div>
        </div>
    )
}

export default LogItem
