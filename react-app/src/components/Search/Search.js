import { useState, useEffect } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import classes from './Search.module.css'
const Search = (props) => {
    // 使用 useEffect 优化搜索效果
    let [keyword, setKeyword] = useState('')
    const inputChangeHandler = (e) => {
        setKeyword(e.target.value.trim())
    }
    // 监听 keyword 的变化 只有当 keyword 发生变化时才会执行 search
    useEffect(() => {
        // 仅仅这样的话 会导致 每次输入都会触发搜索 真实项目中就是频繁请求接口
        // 降低数据搜索的次数，提高用户体验
        // 用户输入完了你在搜索，用户输入的过程中，不要搜索当用户停止输入动作1秒后，我们才做查询
        // 在开启一个定时器的同时，应该关掉上一次
        let timeoutId = setTimeout(() => {
            props.onSearch(keyword)
        }, 1000)
        // 清除上一次的定时器 保证用户连续输入的话 最后 只保留最后一个最新的计时器 拿到最新的keyword 搜索一次即可
        // useEffect 可以返回一个回调函数 且 返回的这个回调函数 总是在 useEffect 的下次调用之前先行调用
        // 这样就可以做到 生成新的定时器之前 总是能把之前的定时器给清除掉
        return () => {
            clearTimeout(timeoutId)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyword])

    // const inputChangeHandler = (e) => {
    //     const keyword = e.target.value.trim()
    //     props.onSearch(keyword)
    // }
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
