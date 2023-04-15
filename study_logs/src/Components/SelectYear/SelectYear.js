import './SelectYear.css'
const selectYear = (props) => {
    const selectYear = (e) => {
        props.onSelectYear(+e.target.value)
    }
    return (
        <div>
            <label htmlFor='selectYear'>选择年份</label>
            <select id="selectYear" onChange={selectYear}>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
            </select>
        </div>
    )
}

export default selectYear
