import c from './../dialogs.module.css';


const Message = (obj) => {
    return (
        <div className={c.message}>
            {obj.message}
        </div>
    )
}

export default Message;