import c from './about_me.module.css'
import Description from "./description/description";
import Photo from "./photo/photo";

const AboutMe = () => {
    return (
        <div className={c.aboutMe}>
            <Photo/>
            <Description/>
        </div>
    )
}

export default AboutMe