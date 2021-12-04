import c from './dialogs.module.css';
import DialogItem from './dialogsItem/dialogsItem'
import Message from './message/message'
import {sendMessageCreator, updateMessageTextCreator} from "../../../redux/state";


function Dialogs(obj) {


    let dialogsElems = obj.data.dialogsData.map(d => <DialogItem name = {d.name} id={d.id}/>)
    let messElem = obj.data.messData.map(m => <Message message = {m.text}/>)

    let messageText = obj.data.newMessageText
    let onSendMessageClick = () => {
        obj.dispatch(sendMessageCreator())
    }
    let onMessageTextChange = (e) => {
        let text = e.target.value
        obj.dispatch(updateMessageTextCreator(text))
    }

    return (
        <div className={c.main}>
            <div className={c.dialogs}>
                {dialogsElems}

            </div>
            <div className={c.messages}>
                <div> {messElem} </div>
                <div>
                    <div>
                        <textarea placeholder="Введи сообщение"
                                  onChange={onMessageTextChange}
                                  value={messageText}

                        ></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>
                            Отправить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;