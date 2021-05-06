import React from "react";
import NavMain from './components/NavMain';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from "./components/Footer";
import Streetphoto from "./pages/Streetphoto";
import Portraits from "./pages/Portraits";
// import './styles/global.css';


function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/a-propos" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/photo-de-rue" component={Streetphoto} />
        <Route exact path="/portraits" component={Portraits} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
