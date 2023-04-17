import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import classes from './Cart.module.css'
import bag from '../../assets/bag.png'
const Cart = () => {
    const cartCtx = useContext(CartContext)
    return (
        <div className={classes.Cart}>
            <div className={classes.BagWrapper}>
                <img src={bag} alt='cart' className={classes.BagImg} />
                <div className={classes.TotalAmount}>{cartCtx.totalAmount}</div>
                <div className={classes.TotalPrice}>{cartCtx.totalPrice}</div>
            </div>
            <div className={classes.GoPayBtn}>
                去结算
            </div>
        </div>
    )
}

export default Cart
