import c from './posts.module.css'
import NewPost from "./new_post/new_post";
import Post from "./post/post";

const PostsPage = () => {
    return (
        <div className={c.main}>
            <NewPost/>
            <Post/>
        </div>
    )
}

export default PostsPage