import Counter from '../../UI/Counter/Counter';
import classes from './Meal.module.css';

const Meal = () => {
    return (
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img className={classes.Img} src="/img/meals/1.png" alt="meal" />
            </div>
            <div>
                <div className={classes.Title}>汉堡包</div>
                <p className={classes.Desc}>百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱径典滋味让你无法抵挡！</p>
                <div className={classes.PriceBox}>
                    <span className={classes.Price}>20</span>
                    <div><Counter amount={1} /></div>
                </div>
            </div>
        </div>
    );
}

export default Meal
