import './Card.css'
// 封装 统一的 卡片效果 圆角 阴影 等效果 方便后续使用
const Card = (props) => {
    return (
        // props.children 指的就是 当 card 作为 子组件使用时 <card></card> 标签中 嵌入的DOM元素内容
        // 也就是父组件 指定 子组件内部的显示内容
        // props.className 父组件传递给子组件的 className
        <div className={`card ${props.className}`} > {props.children}</div >
    )
}

export default Card
