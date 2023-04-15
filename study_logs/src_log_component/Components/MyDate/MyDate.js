import './MyDate.css'

const MyDate = (props) => {
    return (
        <div className="date">
            <div className="month">{props.date.toLocaleString('zh-CN', { month: 'long' })}</div>
            <div className="day">{props.date.getDate()}</div>
        </div>
    )
}

export default MyDate
