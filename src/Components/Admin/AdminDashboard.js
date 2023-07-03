import { Paper } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminBase from '../../Base/AdminBase'

export default function AdminDashboard() {
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem("token")){
    navigate("/login",{replae:true})
    }
  })
  return (
    <AdminBase>
      <h1>Welcome Admin</h1>
      <Paper>
        <h3>Total students:233</h3>
        <h3>Total Courses:12</h3>
        <h3>Pending Leave applications:5</h3>
        <h3>Not assigned Queries:2</h3>
      </Paper>
    </AdminBase>
  )
}
