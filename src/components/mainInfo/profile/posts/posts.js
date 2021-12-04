import c from './posts.module.css'
import NewPost from "./new_post/new_post";
import Elem from "./post/elem";

const PostsPage = (obj) => {
    return (
        <div className={c.main}>
            <NewPost newPostText = {obj.newPostText}
                     dispatch = {obj.dispatch}
            />
            <Elem posts = {obj.posts}/>
        </div>
    )
}

export default PostsPage