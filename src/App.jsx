import React from 'react'
import Banner from './components/Banner'
import Nav from './components/Nav'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from './components/RegistrationForm'
import Donate from './components/Donate'
import DashBoard from './components/DashBoard'


const App = () => {
  return (
    <BrowserRouter>
      <Nav/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
         <Route path='/registrationform' element={<RegistrationForm/>}/>
         <Route path='/donate' element={<Donate/>}/>
         <Route path='/dashboard/*' element={<DashBoard/>}/>
      </Routes>
      {/* <ValidatePin/> */}
    </BrowserRouter>
  )
}

export default App