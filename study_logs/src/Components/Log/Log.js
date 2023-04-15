import LogItem from '../LogItem/LogItem'
import Card from '../UI/Card/Card'
import SelectYear from '../SelectYear/SelectYear'
import { useState } from 'react'
import './Log.css'

const Log = (props) => {
    // 年份的 state
    let [year, setYear] = useState(2023)
    const handleSelecYear = (selectedYear) => {
        setYear(selectedYear)
    }
    let filteredItems = props.items.filter(item => item.date.getFullYear() === year)


    // 因为这里要删除指定index的item 所以传入删除函数时 传入的是一个 闭包 直接将 当前元素的 index 值传入其中 避免单独为了传入index 增加组件复杂度
    // const itemList = props.items.map((item, index) => <LogItem onDeleteItem={() => props.deleteItem(index)} key={item.id} date={item.date} title={item.title} time={item.time} />)


    // 这里使用 filter 方法过滤出符合条件的元素 每次都会重新计算 index 值 这时会导致根据 index 值删除元素时 删除的是原数组相应 index 的元素 导致误删 故需要采用 id 作为删除的依据
    const itemList = filteredItems.map(item => <LogItem onDeleteItem={() => props.deleteItem(item.id)} key={item.id} date={item.date} title={item.title} time={item.time} />)

    return (
        // 使用 Card 组件
        <Card className="log" >
            <SelectYear onSelectYear={handleSelecYear} />
            {itemList.length !== 0 ? itemList : <div className="empty">暂无数据</div>}
        </Card>
    )
}

export default Log
