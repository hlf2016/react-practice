import Backdrop from '../Backdrop/Backdrop';
import classes from './ConfirmModal.module.css';

const ConfirmModal = (props) => {
    return (
        <Backdrop className={classes.ConfirmBackdrop}>
            <div className={classes.Confirm}>
                <span className={classes.Title}> {props.title} </span>
                <div className={classes.BtnBox}>
                    <button onClick={(e) => props.cancelHandler(e)} className={classes.Cancel}>取消</button>
                    <button onClick={(e) => props.OKHandler(e)} className={classes.OK}>确定</button>
                </div>
            </div>
        </Backdrop>
    )
}

export default ConfirmModal
