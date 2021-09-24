import c from './about_me.module.css'
import Description from "./description/description";
import Photo from "./photo/photo";

const About_me = () => {
    return (
        <div className={c.about_me}>
            <Photo/>
            <Description/>
        </div>
    )
}

export default About_me