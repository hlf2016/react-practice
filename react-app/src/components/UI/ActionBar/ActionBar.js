import { useContext } from 'react'
import CartContext from '../../../store/cart-context'
import classes from './ActionBar.module.css'
import bag from '../../../assets/bag.png'

const ActionBar = (props) => {
    const cartCtx = useContext(CartContext)
    return (
        <>
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
            <div onClick={() => props.clickHandler()} className={`${classes.GoPayBtn}  ${cartCtx.totalAmount === 0 ? classes.DisabledBtn : null}`}>
                {props.buttonText ?? "去结算"}
            </div>
        </>
    )
}

export default ActionBar
