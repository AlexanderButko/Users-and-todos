import React from 'react';

import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./routes/routes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">

     <BrowserRouter>
       <Navbar/>
       <AppRouter/>
     </BrowserRouter>
    </div>
  );
}

export default App;
