import React from "react";
import Home from "./pages/Home";
import Products from './pages/Products';
import Projects from './pages/Projects'
import Contacts from "./pages/Contact"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/products" element={ <Products/>}/>
        <Route path="/projects" element={ <Projects/>}/>
        <Route path="/contacts" element={ <Contacts/>}/>
       
       
       
       
      </Routes>
      </Router>
    </div>
  );
}

export default App;
