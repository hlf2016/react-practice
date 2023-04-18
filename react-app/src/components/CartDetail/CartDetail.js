import { useContext } from 'react'
import { DeleteOutlined } from '@ant-design/icons';
import Backdrop from '../UI/Backdrop/Backdrop';
import Meal from '../Meals/Meal/Meal';
import CartContext from '../../store/cart-context';
import classes from './CartDetail.module.css';

const CartDetail = (props) => {
    const cartCtx = useContext(CartContext)
    return (
        <Backdrop>
            <div className={classes.CartDetail} onClick={(e) => e.stopPropagation()}>
                <header className={classes.Header}>
                    <span className={classes.Title}>餐品详情</span>
                    <div className={classes.Clear}>
                        <DeleteOutlined />
                        <span onClick={() => console.log(cartCtx.items)}>清空购物车</span>
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
