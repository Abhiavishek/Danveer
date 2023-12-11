import React from 'react'
import Banner from './components/Banner'
import Nav from './components/Nav'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterHelper from './components/RegisterHelper'


const App = () => {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/registerhelper' element={<RegisterHelper/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App