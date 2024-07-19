import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import AdminDashboard from '../components/admin/AdminDashboard'
import AdminContent from '../components/admin/AdminContent'

const Admin = () => {
  return (
    <>
    <Routes element={<AdminDashboard />} >
        <Route path='/content' element={<AdminContent/>}/>
    </Routes>
    </>
  )
}

export default Admin