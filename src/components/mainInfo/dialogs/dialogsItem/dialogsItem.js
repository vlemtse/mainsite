import c from './../dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (obj) => {
    let path = '/dialogs/' + obj.id
    return (
        <div className={c.dialog + " " + c.action}>
            <NavLink to={path} activeClassName={c.action}>{obj.name}</NavLink>
        </div>
    )
}


export default DialogItem;