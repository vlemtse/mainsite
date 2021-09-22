import './App.css';
import Header from "./components/header";
import Navbar from "./components/navbar";
import Profile from "./components/profile/profile";

function App() {
  return (
      <div className="app">
          <Header/>
          <Navbar/>
          <Profile/>
      </div>
  )
}

export default App;
