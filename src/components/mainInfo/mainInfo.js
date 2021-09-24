import c from './mainInfo.module.css';
import Navbar from "./navbar/navbar";
import Profile from "./profile/profile";

function MainInfo() {
  return (
      <div className={c.main}>
          <Navbar/>
          <Profile/>
      </div>
  )
}

export default MainInfo;
