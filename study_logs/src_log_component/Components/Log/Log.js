import LogItem from '../LogItem/LogItem'
import './Log.css'

const Log = () => {
    const items = [
        {
            id: 1,
            date: new Date(2023, 4, 11, 12, 30),
            title: '学习 React',
            time: '40 分钟',
        },
        {
            id: 2,
            date: new Date(2023, 4, 10, 12, 30),
            title: '学习 666',
            time: '50 分钟',
        },
    ]
    const itemList = items.map(item => <LogItem key={item.id} date={item.date} title={item.title} time={item.time} />)
    return (
        <div className="log" >
            {itemList}
        </div>
    )
}

export default Log
