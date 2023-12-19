import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './SideBar'
import LoginHelper from './LoginHelper'
import RegisterDonar from './RegisterDonar'

const DashBoard = () => {
  return (
    <div className='h-[100vh] w-[100vw] flex'>
      <div className='h-[100vh] w-[20vw]'>
      <Sidebar/>
      </div>
      <div className='h-[100vh] w-[80vw]'>
    <Routes>
        <Route path='/loginhelper' element={<LoginHelper/>}/>
        <Route path='/registerdonar' element={<RegisterDonar/>}/>
    </Routes>
    </div>
    </div>
  )
}

export default DashBoard