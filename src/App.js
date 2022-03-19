import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import './App.scss';  
import {Navbar, Home, Loader, VideoDetail} from "./components"; 
 
const App = () => {  

  return  ( 
     <Router>   
            <Navbar />
            {/* <Loader /> */}
            <Routes>              
              <Route path='/' element={<Home/>} /> 
              <Route path='/video-details/:id' element={<VideoDetail/>} />  
            </Routes>
          </Router>
  )
};

export default App;
