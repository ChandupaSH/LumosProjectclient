import React from 'react'
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Home from './scenes/Home';
import Item from './scenes/Item';
import './App.css';

const App = () => {

  


  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/items' element={<Item/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  )
}




export default App