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
import GetDetails from './components/GetDetails'
import DonarProfile from './components/DonarProfile'
import GetRecipient from './components/GetRecipient'
import RecipientProfile from './components/RecipientProfile'


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
         <Route path='/getdetails' element={<GetDetails/>}/>
         <Route path='/getrecipient' element={<GetRecipient/>}/>
         <Route path='/donarprofiles/:index' element={<DonarProfile/>}/>
         <Route path='/recipientprofile/:index' element={<RecipientProfile/>}/>
      </Routes>
      {/* <ValidatePin/> */}
    </BrowserRouter>
  )
}

export default App