import ReactDOM from 'react-dom/client'
import './index.css'

const App = <div className="container">
    <div className="item">
        <div className="date">
            <div className="month">四月</div>
            <div className="day">19</div>
        </div>
        <div className="content">
            {/* <h2 className="title">学习 React</h2> */}
            <div className="title">学习 React</div>
            <div className="time">40 分钟</div>
        </div>
    </div>
</div>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(App)
