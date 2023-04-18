import { useContext, useState } from 'react'
import CartContext from '../../store/cart-context'
import CartDetail from '../CartDetail/CartDetail'
import classes from './Cart.module.css'
import bag from '../../assets/bag.png'
const Cart = () => {
    const cartCtx = useContext(CartContext)
    // 控制 购物车详情 展示
    let [showCart, setShowCart] = useState(false)

    const toggleShowCart = () => {

        if (cartCtx.totalAmount === 0) {
            setShowCart(false)
            return
        }
        setShowCart((prevShowCart) => !prevShowCart)

    }

    return (
        <div onClick={toggleShowCart} className={classes.Cart}>
            {showCart && <CartDetail setShowCart={setShowCart} />}
            <div className={classes.BagWrapper}>
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
            <div className={`${classes.GoPayBtn}  ${cartCtx.totalAmount === 0 ? classes.DisabledBtn : null}`}>
                去结算
            </div>
        </div>
    )
}

export default Cart
