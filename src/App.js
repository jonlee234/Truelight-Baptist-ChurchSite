import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import AboutUs from './components/pages/AboutUs';
import Home from './components/pages/Home'
import ContactUs from './components/pages/ContactUs';
import Events from './components/pages/Events'
import Giving from './components/pages/Giving'
import History from './components/pages/History'
import Ministries from './components/pages/Ministries'
import WatchLive from './components/pages/WatchLive';
import Mission from './components/pages/Mission'
import Resources from './components/pages/Resources'
import WhatWeBelieve from './components/pages/WhatWeBelieve'
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path= '/' component= {Home}></Route>
        <Route exact path= '/about-us' component= {AboutUs}></Route>
        <Route exact path= '/contact-us' component= {ContactUs}></Route>
        <Route exact path= '/events' component= {Events}></Route>
        <Route exact path= '/giving' component= {Giving}></Route>
        <Route exact path= '/history' component= {History}></Route>
        <Route exact path= '/ministries' component= {Ministries}></Route>
        <Route exact path= '/mission' component= {Mission}></Route>
        <Route exact path= '/resources' component= {Resources}></Route>
        <Route exact path= '/watch-live' component= {WatchLive}></Route>
        <Route exact path= '/what-we-believe' component= {WhatWeBelieve}></Route>



      </Switch>
    </Router>
  );
}

export default App;
