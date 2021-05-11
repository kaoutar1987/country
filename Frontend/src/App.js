
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Capital from './components/page/Capital'
import Codes from './components/page/Codes'
import Langues from './components/page/Langues'
import PaysN from './components/page/PaysN'
import Navbar from './components/layout/Navbar'


function App() {
  return (
    <Router>
      <>
        <Navbar/>

        <Switch>

          <Route exact path="/capital" component={Capital}/>
          <Route  path="/codes" component={Codes}/>
          <Route  path="/langues" component={Langues} />
          <Route  path="/paysN" component={PaysN} />
          
         

        </Switch>
       
      </>
    </Router>
  )
}

export default App
