import React from "react";
import c from './new_post.module.css'
import { Alert, AlertTitle } from '@material-ui/lab'
import {addPostActionCreator, onPostChangeActionCreator} from "../../../../../redux/state";

let infoAlert = (text) => <Alert severity="info">
                        <AlertTitle>Info</AlertTitle>
                            {text}
                        </Alert>

let newPostElem = React.createRef()




const NewPost = (obj) => {
    let addPost = () => {

        obj.dispatch(addPostActionCreator())

    }

    let onPostChange = () => {
        let text = newPostElem.current.value

        obj.dispatch(onPostChangeActionCreator(text))

    }

    return (
        <div className={c.newPost}>
            <div className={c.textBox} >
                <input className={c.text}
                       name='login'
                       type='text'
                       onChange={onPostChange}
                       value={obj.newPostText}
                       placeholder='Введите сообщения'
                       ref={newPostElem}/>
            </div>
            <div className={c.submitBox}>
                <input className={c.submit}
                       onClick={addPost}
                       type='submit'
                       value='Опубликовать'/>
            </div>
            <div id='1'>
                {infoAlert("Получилось!")}
            </div>
        </div>
    )
}

export default NewPost

