import classes from './Counter.module.css'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'


const Counter = (props) => {
    return (
        <div className={classes.Counter}>
            {
                (props.amount && props.amount !== 0) ?
                    // <> </>  React.Fragment 的使用
                    <>
                        <div className={classes.Sub}>
                            <MinusOutlined />
                            {/* 解决不同字体的 - 号可能导致 位置无法天然居中  改用图标库*/}
                            {/* <span>-</span> */}
                        </div>
                        <div>
                            <span>{props.amount}</span>
                        </div>
                    </>
                    : null
            }

            <div className={classes.Add}>

                <PlusOutlined />
                {/* <span>+</span> */}
            </div>
        </div>
    )
}

export default Counter
