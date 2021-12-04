import Post from "./post";


const Elem = (obj) => {
    let postElems = obj.posts.map(p => <Post text={p.mess} countLikes={p.countLikes}/>)
    return (
        <div>
            {postElems}
        </div>
    )
}

export default Elem