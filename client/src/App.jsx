import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='signin' element={<SignIn/>}></Route>
      <Route path='signup' element={<SignUp/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='profile' element={<Profile/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App