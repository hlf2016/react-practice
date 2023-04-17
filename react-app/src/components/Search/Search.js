import { SearchOutlined } from '@ant-design/icons'
import classes from './Search.module.css'
const Search = (props) => {
    const inputChangeHandler = (e) => {
        const keyword = e.target.value
        props.onSearch(keyword)
    }
    return (
        <div className={classes.Search}>
            <div className={classes.SearchBox}>
                <SearchOutlined className={classes.SearchImg} />
                <input onChange={inputChangeHandler} className={classes.KeywordInput} type="text" placeholder="请输入关键词" />
            </div>
        </div>
    )
}

export default Search
