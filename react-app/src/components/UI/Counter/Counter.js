import { useContext } from 'react'
import CartContext from '../../../store/cart-context'
import classes from './Counter.module.css'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'


const Counter = (props) => {
    const cartCtx = useContext(CartContext)
    return (
        <div className={classes.Counter} >
            {
                (props.meal.amount && props.meal.amount !== 0) ?
                    // <> </>  React.Fragment 的使用
                    <>
                        <div onClick={() => cartCtx.cartDispatch({ type: 'REMOVE', meal: props.meal })} className={classes.Sub}>
                            <MinusOutlined />
                            {/* 解决不同字体的 - 号可能导致 位置无法天然居中  改用图标库*/}
                            {/* <span>-</span> */}
                        </div>
                        <div>
                            <span>{props.meal.amount}</span>
                        </div>
                    </>
                    : null
            }

            <div onClick={() => cartCtx.cartDispatch({ type: 'ADD', meal: props.meal })} className={classes.Add}>

                <PlusOutlined />
                {/* <span>+</span> */}
            </div>
        </div>
    )
}

export default Counter
