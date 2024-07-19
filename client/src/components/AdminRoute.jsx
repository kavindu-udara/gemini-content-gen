import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const AdminRoute = () => {
    const {currentUser} = useSelector(state => state.user)
  return currentUser.role === "admin" ? <Outlet/> : <Navigate to="/dashboard/content" />
}

export default AdminRoute