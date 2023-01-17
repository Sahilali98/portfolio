
import './App.css';
import AboutMe from './Components/AboutMe';
import Studies from './Components/Studies';
import Skills from './Components/Skills';
import RecentProject from './Components/RecentProject';
import profile from "./images/sahil.jpg";
import school from "./images/zilla school.png";
import reactIcon from "./images/React-icon.svg.png";
import portfolio from "./images/portfolio.png";
import srinix from "./images/srinix.png";


import Navbar from './Components/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import ContactMe from './Components/ContactMe';





function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Switch>
        <Route path="/contactMe">
           <ContactMe/>
        </Route>
        <Route path="/recentWork">
           <RecentProject  portfolio={portfolio}/>
        </Route>
        <Route path="/skills">
           <Skills reactIcon={reactIcon}/>
        </Route>
        <Route path="/studies">
           <Studies school={school} srinix={srinix}/>
        </Route>
        <Route path="/">
           <AboutMe image={profile}/>
        </Route>
      </Switch>
      </Router>
    </>
  );
}

export default App;
