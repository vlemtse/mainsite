import './App.css';

import MainInfo from "./components/mainInfo/mainInfo";
import Header from "./components/header/header";



function App(obj) {
    let state = obj.state
    return (
      <div className="app">
          <Header/>
          <MainInfo state = {state}
                    dispatch = {obj.dispatch}
          />
      </div>
  )
}

export default App;
