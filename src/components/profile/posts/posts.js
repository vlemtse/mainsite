import c from './posts.module.css'
import New_post from "./new_post/new_post";
import Post from "./post/post";

const Posts = () => {
    return (
        <div className={c.posts}>

            <New_post/>
            <Post/>
        </div>

    )
}

export default Posts