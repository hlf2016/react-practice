import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import BillItem from './BillItem/BillItem';
import ActionBar from '../UI/ActionBar/ActionBar';
import { CloseOutlined } from '@ant-design/icons';
import classes from './Bill.module.css'
import ReactDOM from 'react-dom'

const BillRoot = document.getElementById('bill-root')
const Bill = (props) => {
    const cartCtx = useContext(CartContext)
    return ReactDOM.createPortal((
        <div className={classes.Bill} onClick={(e) => e.stopPropagation()}>
            <div className={classes.Close}>
                <CloseOutlined onClick={() => props.hiddenBill()} />
            </div>
            <div className={classes.BillBox}>
                <header className={classes.Header}>
                    <div className={classes.Title}>餐品详情</div>
                </header>
                <div className={classes.Meals}>
                    {
                        cartCtx.items.map(item => <BillItem key={item.id} meal={item} />)
                    }
                </div>
                <footer className={classes.Footer}>
                    <div className={classes.TotalPrice}>{cartCtx.totalPrice}</div>
                </footer>

            </div>
            <ActionBar buttonText="去支付" totalPriceDesc="合计" />
        </div>
    ), BillRoot)
}

export default Bill
