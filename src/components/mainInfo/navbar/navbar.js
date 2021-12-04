import c from './navbar.module.css'
import {NavLink} from "react-router-dom";

const profileLink   = '/profile';
const messageLink   = '/dialogs';
const newsLink       = '/news';
const musicLink     = '/music';
const settingsLink  = '/settings';

const Navbar = () => {
  return (
      <nav className={c.app_nav}>
          <div className={c.sections}>
              <NavLink to={profileLink} activeClassName={c.activeLink}>Profile</NavLink>
          </div>
          <div className={c.sections}>
              <NavLink to={messageLink} activeClassName={c.activeLink}>Message</NavLink>
          </div>
          <div className={c.sections}>
              <NavLink to={newsLink} activeClassName={c.activeLink}>News</NavLink>
          </div>
          <div className={c.sections}>
              <NavLink to={musicLink} activeClassName={c.activeLink}>Music</NavLink>
          </div>
          <div className={c.sections}>
              <NavLink to={settingsLink} activeClassName={c.activeLink}>Settings</NavLink>

          </div>
      </nav>
  )
}

export default Navbar