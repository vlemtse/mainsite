import c from './navbar.module.css'

const defLink = '#';

const Navbar = () => {
  return (
      <nav className={c.app_nav}>
          <div className={c.sections}>
              <a href={defLink}>Profile</a>
          </div>
          <div className={c.sections}>
              Message
          </div>
          <div className={c.sections}>
              New
          </div>
          <div className={c.sections}>
              Music
          </div>
          <div className={c.sections}>
              Settings
          </div>
      </nav>
  )
}

export default Navbar