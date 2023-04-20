import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 设置移动端适配
// 这里要注意啊 会导致 默认的 font-size 很小 如果 引入图标库 图标显示不出来 大几率可能是默认字体大小太小了 
// 另外设置下字体大小即可
document.documentElement.style.fontSize = 100 / 750 + 'vw'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 严格模式下 总是会触发两次 先注释掉
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
