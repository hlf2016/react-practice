// 引入 react-dom
import ReactDOM from 'react-dom/client'

// jsx
const App = <div>
    <h1>React App</h1>
    <div>Just For Test</div>
</div>

// 创建 根 dom
// 基于 public/index.html 中的 id 为 root 的 div 创建 根 dom
const root = ReactDOM.createRoot(document.getElementById('root'))

// 挂在 App 到 root 上
root.render(App)
