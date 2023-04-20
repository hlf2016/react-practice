import { useState, useReducer } from 'react'
import Meals from './components/Meals/Meals';
import Search from './components/Search/Search';
import Cart from './components/Cart/Cart';
// 引入 context
import CartContext from './store/cart-context'
import './App.css';

const MEALS_DATA = [
  {
    id: '1',
    title: '汉堡包',
    desc: '百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
    price: 12,
    img: '/img/meals/1.png'
  },
  {
    id: '2',
    title: '双层吉士汉堡',
    desc: '百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！',
    price: 20,
    img: '/img/meals/2.png'
  },
  {
    id: '3',
    title: '巨无霸',
    desc: '两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！',
    price: 24,
    img: '/img/meals/3.png'
  }, {
    id: '4',
    title: '麦辣鸡腿汉堡',
    desc: '金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！',
    price: 21,
    img: '/img/meals/4.png'
  }, {
    id: '5',
    title: '板烧鸡腿堡',
    desc: '原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！',
    price: 22,
    img: '/img/meals/5.png'
  }, {
    id: '6',
    title: '麦香鸡',
    desc: '清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！',
    price: 14,
    img: '/img/meals/6.png'
  }, {
    id: '7',
    title: '吉士汉堡包',
    desc: '百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！',
    price: 12,
    img: '/img/meals/7.png'
  }
]

const cartReducer = (state, action) => {
  const { type, meal } = action
  let newCartData = { ...state }
  // 最后一定要对修改后的 state 进行 return 否则下次调用时 会导致 传入的 state 为 undefined
  switch (type) {
    case 'ADD':
      // 判断购物车中是否已经存在该商品
      const isExist = newCartData.items.find(item => item.id === meal.id)
      if (isExist) {
        // 如果存在，就更新购物车中的数据
        // 更新商品列表
        meal.amount += 1
      } else {
        // 更新商品列表
        meal.amount = 1
        // 如果不存在，就添加商品到购物车
        newCartData.items.push(meal)
      }
      // 1.更新商品总数
      newCartData.totalAmount += 1
      // 2.更新商品总价
      newCartData.totalPrice += meal.price
      return newCartData

    case 'REMOVE':
      // 如果显示删除按钮 那么就是存在该商品
      // 1.更新商品总数
      newCartData.totalAmount -= 1
      // 2.更新商品总价
      newCartData.totalPrice -= meal.price
      // 3.更新商品列表
      meal.amount -= 1
      // 如果减了之后数量为0，就从购物车中移除该商品
      if (meal.amount === 0) {
        newCartData.items = newCartData.items.filter(item => item.id !== meal.id)
      }
      return newCartData
    case 'CLEAR':
      newCartData.items.forEach(item => delete item.amount)
      return {
        items: [],
        totalAmount: 0,
        totalPrice: 0
      }
    default:
      return state
  }
}

function App() {
  const [mealsData, setMealsData] = useState(MEALS_DATA)

  // 创建一个state，用来存储购物车的数据
  /*
  *   1.商品 [] items
  *   2.商品总数（totalAmount）
  *   3.商品总价（totalPrice）
  * */

  // 使用 React.reducer 简化 App.js 代码
  const [cartData, cartDispatch] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
    totalPrice: 0
  })


  /***********************从useState改为useReducer 暂时注释***************************/
  /*const [cartData, setCartData] = useState({
    items: [],
    totalAmount: 0,
    totalPrice: 0
  })

  // 添加商品到购物车
  const addItem = (meal) => {
    // 判断购物车中是否已经存在该商品
    const isExist = cartData.items.find(item => item.id === meal.id)
    let newCartData = { ...cartData }
    if (isExist) {
      // 如果存在，就更新购物车中的数据
      // 更新商品列表
      meal.amount += 1
    } else {
      // 更新商品列表
      meal.amount = 1
      // 如果不存在，就添加商品到购物车
      newCartData.items.push(meal)
    }
    // 1.更新商品总数
    newCartData.totalAmount += 1
    // 2.更新商品总价
    newCartData.totalPrice += meal.price
    setCartData(newCartData)
  }

  // 从购物车中移除商品
  const removeItem = (meal) => {
    let newCartData = { ...cartData }
    // 如果显示删除按钮 那么就是存在该商品
    // 1.更新商品总数
    newCartData.totalAmount -= 1
    // 2.更新商品总价
    newCartData.totalPrice -= meal.price
    // 3.更新商品列表
    meal.amount -= 1
    // 如果减了之后数量为0，就从购物车中移除该商品
    if (meal.amount === 0) {
      newCartData.items = newCartData.items.filter(item => item.id !== meal.id)
    }
    setCartData(newCartData)

  }

  const clearCart = () => {
    cartData.items.forEach(item => delete item.amount)
    setCartData({
      items: [],
      totalAmount: 0,
      totalPrice: 0
    })
  }*/

  const searchHandler = (keyword) => {
    // 根据关键词搜索商品
    const newMealsData = MEALS_DATA.filter(meal => meal.title.includes(keyword))
    setMealsData(newMealsData)
  }

  return (
    <CartContext.Provider value={{ ...cartData, cartDispatch }}>
      <div className="App">
        <Search onSearch={searchHandler} />
        <Meals mealsData={mealsData} />
        <Cart />
      </div>
    </CartContext.Provider>
  );
}

export default App;
