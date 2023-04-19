import { useContext, useState, useEffect } from 'react'
import CartContext from '../../store/cart-context'
import CartDetail from '../CartDetail/CartDetail'
import Bill from '../Bill/Bill'
import ActionBar from '../UI/ActionBar/ActionBar'
// import classes from './Cart.module.css'
// import bag from '../../assets/bag.png'
const Cart = () => {
    const cartCtx = useContext(CartContext)
    // 控制 购物车详情 展示
    let [showCart, setShowCart] = useState(false)

    // 控制结账单页面展示
    let [showBill, setShowBill] = useState(false)

    const toggleShowCart = () => {

        if (cartCtx.totalAmount === 0) {
            setShowCart(false)
            return
        }
        setShowCart((prevShowCart) => !prevShowCart)

    }

    const toggleShowBill = () => {
        if (cartCtx.totalAmount === 0) {
            return
        }
        setShowBill(true)
    }

    const hiddenBill = () => {
        setShowBill(false)
    }

    // 如果发现 购物车中商品总数量变为 0 则直接将购物车详情页面隐藏
    // 这里会报错 caught Error: Too many re-renders. 
    // 因为 目前 每次刷新后 cartCtx.totalAmount 都是 0 会执行 setShowCart(false) 从而导致组件再次重新渲染 重新渲染时 cartCtx.totalAmount 依然是 0 会再次调用 setShowCart(false) 从而进入无限重新渲染的死循环
    // if (cartCtx.totalAmount === 0) {
    /*
     * 这里有疑问 不是说 在setState 执行的时候 会进行旧值和新值的比较 如果 新旧值相同 就不会触发 重新渲染吗？
        * 为什么这里会出现死循环呢？
        *   函数组件中 setState 的执行流程
        *    调用底层的 dispatchSetData 方法 组件共有两种状态 正在渲染状态 和 渲染完成状态
        *       会进行判断当前组件处于哪个状态 
        *        - 如果是 正在渲染 则不进行 新旧值的比较 直接进行重新渲染
        *        - 如果是 渲染完成 则会进行 新旧值的比较 如果 新旧值相同 则不会触发 重新渲染 如果不同才触发重新渲染
        * 此处函数组件的主体正式处于正在渲染组件的过程中 所以不会进行 新旧值的比较 直接进行重新渲染
        *       
        *   
    */
    //     setShowCart(false)
    // }
    // 所以不可以在 函数组件中 直接调用 useState 的 setter 方法 这样很危险 很容易造成循环渲染


    // 这里就要引入 useEffect 了
    useEffect(() => {
        if (cartCtx.totalAmount === 0) {
            setShowCart(false)
            setShowBill(false)
        }
    }, [cartCtx.totalAmount])


    return (
        <div onClick={toggleShowCart}>
            {
                // 这里会有问题 当在购物车详情中 一个个删除商品时 直到一个商品不剩时 会出现一个空的购物车详情 而不是直接隐藏购物车详情页面 粗略想法可以通过监听 cartCtx 中的 totalAmount 来解决 如果发现 cartCtx 中的 totalAmount 为 0 则隐藏购物车详情页面 因为每次 组件重新渲染 都会再次执行 整个函数组件 所以可以通过监听 cartCtx 中的 totalAmount 来尝试解决
                showCart && <CartDetail setShowCart={setShowCart} />
            }
            {showBill && <Bill hiddenBill={hiddenBill} />}
            {/* 原先硬编码的组件 改成 ActionBar 了 */}
            {/* <div className={classes.BagWrapper}>
                <img src={bag} alt='cart' className={classes.BagImg} />

                {
                    cartCtx.totalAmount === 0 ? <div className={classes.EmptyCart}>未选购商品</div> :
                        // Fragment 
                        <>
                            <div className={classes.TotalAmount}>{cartCtx.totalAmount}</div>
                            <div className={classes.TotalPrice}>{cartCtx.totalPrice}</div>
                        </>
                }

            </div>
            <div onClick={toggleShowBill} className={`${classes.GoPayBtn}  ${cartCtx.totalAmount === 0 ? classes.DisabledBtn : null}`}>
                去结算
            </div> */}
            <ActionBar clickHandler={toggleShowBill} />
        </div>
    )
}

export default Cart
