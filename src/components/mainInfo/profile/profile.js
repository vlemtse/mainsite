import c from './profile.module.css'
import ProfileHeader from "./profile_header/profile_header";
import AboutMe from "./about_me/about_me";
import PostsPage from "./posts/posts";

const Profile = () => {
    return (
        <div className={c.profile}>
            <ProfileHeader/>
            <AboutMe/>
            <PostsPage/>
        </div>
    )
}

export default Profile