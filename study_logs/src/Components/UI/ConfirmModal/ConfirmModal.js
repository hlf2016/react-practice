import Card from '../Card/Card'
import BackDrop from '../BackDrop/BackDrop'
import './ConfirmModal.css'

const ConfirmModal = (props) => {
    return (
        <BackDrop>
            <Card className="confirm-modal">
                <div className='confirm-title'>
                    提示
                </div>
                <div className="confirm-message">
                    <p>确定删除吗？</p>
                </div>
                <div className="confirm-btns">
                    <button onClick={() => props.confirmHandler()}>确定</button>
                    <button onClick={() => props.cancelHandler()}>取消</button>
                </div>
            </Card>
        </BackDrop>

    )
}

export default ConfirmModal
