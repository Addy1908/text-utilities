import React,{ useState } from 'react';
// import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import Navbar from './Navbar';
import Textform from './Textform';
import About from './About';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
  } from "react-router-dom";
  



function App() {
const [mode,setMode] = useState("light") // used for enabling the dark mode and light mode
const toggleMode = ()=>{
    if(mode=== "light"){
        setMode("dark");
        document.body.style.backgroundColor = "#042743"
    }
    else{
        setMode("light");
        document.body.style.backgroundColor = "white"
    }
}
return(
    <>
    <Router>
   <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
   <div className = "container"  my-3>
   <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/">
            <Textform heading="Enter your sentence" mode={mode}/>
          </Route>
        </Switch>
   </div>
   </Router>
    </>
)
}
export default App