import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Alien from './pages/Alien'
import Atma from './pages/Atma'
import Bison from './pages/Bison'
import Triclyde from './pages/Triclyde'
import Golem from './pages/Golem'
import Mana from './pages/Mana'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Alien} />
          <Route path="/atma" component={Atma} />
          <Route path="/bison" component={Bison} />
          <Route path="/triclyde" exact component={Triclyde} />
          <Route path="/golem" component={Golem} />
          <Route path="/mana" component={Mana} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
