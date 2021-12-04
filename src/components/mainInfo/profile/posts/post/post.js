import c from './post.module.css'
import likeImg from '../img/like-64x64.png'

const Post = (obj) => {
    return (
        <div className={c.post}>
            <div className={c.avatarBox}>
                <img className={c.avatar}
                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkuII09aLJrGeHWyBWKMU0iXXoz6MgpitlFg&usqp=CAU'
                     alt=''/>
            </div>
            <div className={c.postBox}>
                <div className={c.textBox}>
                    <p className={c.text}>{obj.text}</p>
                </div>
                <div className={c.likesCountBox}>
                    <img className={c.likesCountBox_img} src={likeImg} alt=''/>
                    <p className={c.likesCountBox_count}>{obj.countLikes}</p>
                </div>
            </div>



        </div>
    )
}

export default Post