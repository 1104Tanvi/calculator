
import './App.css';
import { IconContext } from "react-icons";
import Universalcal from './basic/Universalcal'
import Navbar from './basic/Navbar'
import Bmical from './basic/Bmical'
import Distance from './basic/Distance'
import Birthday from './basic/Birthday'

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <IconContext.Provider value={{ color: "tomato", className: "global-class-name" }}>
      <Router>
    <div className="App">
      <Navbar/>
      
      <Switch>
      <Route path='/' exact component={Universalcal}/>  
      <Route path='/bmi' exact component={Bmical}/>
      <Route path='/distance' exact component={Distance}/>
      <Route path="/age" exact component={Birthday}/>
      </Switch>
    </div>
    </Router>
    </IconContext.Provider>
  );
}

export default App;
