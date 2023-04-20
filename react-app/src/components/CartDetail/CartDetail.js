import { useContext, useState } from 'react'
import { DeleteOutlined } from '@ant-design/icons';
import Backdrop from '../UI/Backdrop/Backdrop';
import Meal from '../Meals/Meal/Meal';
import ConfirmModal from '../UI/ConfirmModal/ConfirmModal';
import CartContext from '../../store/cart-context';
import classes from './CartDetail.module.css';

const CartDetail = (props) => {
    const cartCtx = useContext(CartContext)
    // 控制 confirmModal 的显示隐藏
    const [showConfirm, setShowConfirm] = useState(false)
    const clearCart = () => {
        setShowConfirm(true)
    }

    const cancelHandler = () => {
        setShowConfirm(false)
    }

    const OKHandler = () => {
        cartCtx.cartDispatch({ type: 'CLEAR' })
        setShowConfirm(false)
        // 关闭 购物车详情
        props.setShowCart(false)
    }

    return (
        <Backdrop>
            {/* 购物车详情整块内容都阻止冒泡 */}
            <div className={classes.CartDetail} onClick={(e) => e.stopPropagation()}>
                {showConfirm && <ConfirmModal title='确认清空购物车？' cancelHandler={cancelHandler} OKHandler={OKHandler} />}
                <header className={classes.Header}>
                    <span className={classes.Title}>餐品详情</span>
                    <div className={classes.Clear}>
                        <DeleteOutlined />
                        <span onClick={clearCart}>清空购物车</span>
                    </div>
                </header>
                <div className={classes.MealsList}>
                    {cartCtx.items.map(item => <Meal key={item.id} size="sm" hiddenDesc={true} meal={item} />)}
                </div>
            </div>
        </Backdrop>
    )
}

export default CartDetail
