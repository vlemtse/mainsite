import c from './profile.module.css'
import Profile_header from "./profile_header/profile_header";
import About_me from "./about_me/about_me";
import Posts from "./posts/posts";

const Profile = () => {
    return (
        <div className={c.app_profile}>
            <Profile_header/>
            <About_me/>
            <Posts/>
        </div>
    )
}

export default Profile