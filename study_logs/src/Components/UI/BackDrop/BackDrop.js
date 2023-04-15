import ReactDOM from 'react-dom'
import './BackDrop.css'

const BackDrop = (props) => {
    /**
     * react 中 传送门 portal 的使用步骤
     *  1. 从 react-dom 中 引入 ReactDOM    
     *  2. 在 public/index.html 中 创建 跟 root.div 统计的元素 id 为 backdrop-root 这样 遮罩就不会影响主视图的布局了
     *  3. 在将要成为传送门的 组件中 获取挂载点 document.getElementById('backdrop-root')
     *  4. 使用 ReactDOM.createPortal() 创建一个 portal 元素 并进行挂载
     */
    const portalElement = document.getElementById('backdrop-root')
    return ReactDOM.createPortal(<div className="backdrop" >{props.children}</div>, portalElement)
}

export default BackDrop
