import c from './mainInfo.module.css';
import Navbar from "./navbar/navbar";
import Profile from "./profile/profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./dialogs/dialogs";
import News from "./news/news";
import Music from "./music/music";
import Settings from "./settings/settings";

let settings = () => <Settings />

function MainInfo(obj) {
    return (
      <BrowserRouter>
          <div className={c.main}>
              <Navbar/>
              <div className={c.content}>
                  <Route path='/profile'
                         render={ () => <Profile
                             data = {obj.state.profilePage}
                             dispatch = {obj.dispatch}
                         />}
                  />
                  <Route path='/dialogs'
                         render={ () => <Dialogs
                             data = {obj.state.dialogsPage}
                             dispatch = {obj.dispatch}
                         />}
                  />
                  <Route path='/news'
                         render={ () => <News
                         />}
                  />
                  <Route path='/music'
                         render={ () => <Music
                         />}
                  />
                  <Route path='/settings'
                         component={ settings }
                  />
              </div>
          </div>
      </BrowserRouter>

  )
}

export default MainInfo;
