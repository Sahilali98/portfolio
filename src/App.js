
import './App.css';
import AboutMe from './Components/AboutMe';
import Studies from './Components/Studies';
import Skills from './Components/Skills';
import RecentProject from './Components/RecentProject';


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
           <RecentProject/>
        </Route>
        <Route path="/skills">
           <Skills/>
        </Route>
        <Route path="/studies">
           <Studies/>
        </Route>
        <Route path="/">
           <AboutMe/>
        </Route>

      </Switch>
  
      </Router>

    </>
  );
}

export default App;
