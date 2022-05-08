import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Netflix_Show from "./pages/netflix-show/NetFlix-Show";
import Footer from "./components/footer/Footer";
import GoToTop from "./components/go-to-top/GO_To_Top";
import React from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='netflix-show' element={<Netflix_Show/>}/>
      </Routes>
      <Footer/>
      <GoToTop/>
    </div>
  );
}

export default App;
