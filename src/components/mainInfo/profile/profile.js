import c from './profile.module.css'
import ProfileHeader from "./profile_header/profile_header";
import AboutMe from "./about_me/about_me";
import PostsPage from "./posts/posts";

const Profile = (obj) => {

    return (
        <div className={c.profile}>
            <ProfileHeader/>
            <AboutMe/>
            <PostsPage posts = {obj.data.posts}
                       newPostText = {obj.data.newPostText}
                       dispatch = {obj.dispatch}
            />
        </div>
    )
}

export default Profile