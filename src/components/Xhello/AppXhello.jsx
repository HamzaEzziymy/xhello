import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginAndSignUpFrom from './LoginAndSignUpFrom';
import Xhello from './Xhello';

function AppHello() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginAndSignUpFrom/>}/>
          <Route path='Xhello'  element={<Xhello/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppHello;