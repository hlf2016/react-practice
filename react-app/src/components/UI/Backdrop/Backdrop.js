import classes from './Backdrop.module.css'
// 注意这里不是 react-dom/client 而是 react-dom ！！！
import ReactDOM from 'react-dom'

const portalRoot = document.getElementById('backdrop-root')
const Backdrop = (props) => {
    return ReactDOM.createPortal(<div className={`${classes.Backdrop} ${props.className}`}>{props.children}</div>, portalRoot)
}

export default Backdrop
