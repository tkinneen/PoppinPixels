import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Alien from './pages/Alien'
//import Atma from './pages/Atma'
//import Bison from './pages/Bison'
//import Triclyde from './pages/Triclyde'
//import Golem from './pages/Golem'
//import Mana from './pages/Mana'
import Alien from './pages/Alien'
import Jason from './pages/Jason'
import Hinox from './pages/Hinox'
import Ecto_One from './pages/Ecto_One'
import Fire_Mario from './pages/Fire_Mario'
import Mana_Beast from './pages/Mana_Beast'
import Pokey from './pages/Pokey'
import Samus_Aran from './pages/Samus_Aran'
import Slash from './pages/Slash'
import Venom from './pages/Venom'
import Walker from './pages/Walker'
import Wheel_Gator from './pages/Wheel_Gator'
import Wily_Castle from './pages/Wily_Castle'
import Zombie from './pages/Zombie'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/alien" component={Alien} />
          <Route path="/jason" component={Jason} />
          <Route path="/hinox" component={Hinox} />
          <Route path="/ecto_one" component={Ecto_One} />
          <Route path="/fire_mario" component={Fire_Mario} />
          <Route path="/mana_beast" component={Mana_Beast} />
          <Route path="/pokey" component={Pokey} />
          <Route path="/samus_aran" component={Samus_Aran} />
          <Route path="/slash" component={Slash} />
          <Route path="/venom" component={Venom} />
          <Route path="/walker" component={Walker} />
          <Route path="/wheel_gator" component={Wheel_Gator} />
          <Route path="/wily_castle" component={Wily_Castle} />
          <Route path="/zombie" component={Zombie} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
