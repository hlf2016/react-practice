import Counter from '../../UI/Counter/Counter'
import classes from './BillItem.module.css'
const BillItem = (props) => {
    const { img, title, price, amount } = props.meal
    return (
        <div className={classes.BillItem} onClick={(e) => e.stopPropagation()}>
            <div className={classes.ImgBox}>
                <img className={classes.Img} src={img} alt={title} />
            </div>
            <div className={classes.Desc}>
                <span className={classes.Title}>{title}</span>
                <div className={classes.PriceBox}>
                    <Counter meal={props.meal} />
                    <div className={classes.Price}>{price * amount}</div>
                </div>
            </div>
        </div>
    )
}

export default BillItem
