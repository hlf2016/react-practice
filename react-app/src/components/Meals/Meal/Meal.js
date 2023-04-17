import Counter from '../../UI/Counter/Counter';
import classes from './Meal.module.css';

const Meal = (props) => {
    let { title, img, desc, price } = props.meal
    return (
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img className={classes.Img} src={img} alt={title} />
            </div>
            <div>
                <div className={classes.Title}>{title}</div>
                <p className={classes.Desc}>{desc}</p>
                <div className={classes.PriceBox}>
                    <span className={classes.Price}>{price}</span>
                    <div><Counter meal={props.meal} /></div>
                </div>
            </div>
        </div>
    );
}

export default Meal
