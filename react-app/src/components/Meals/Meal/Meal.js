import Counter from '../../UI/Counter/Counter';
import classes from './Meal.module.css';

const Meal = (props) => {
    let { title, img, desc, price } = props.meal
    return (
        <div className={classes.Meal}>
            <div className={(props.size && props.size === 'sm') ? classes.ImgBoxSM : classes.ImgBox}>
                <img className={classes.Img} src={img} alt={title} />
            </div>
            <div className={classes.Main}>
                <div className={classes.Title}>{title}</div>
                {
                    props.hiddenDesc ? null : <p className={classes.Desc}>{desc}</p>
                }
                <div className={classes.PriceBox}>
                    <span className={classes.Price}>{price}</span>
                    <div><Counter meal={props.meal} /></div>
                </div>
            </div>
        </div>
    );
}

export default Meal
