import React from 'react'
import { Button } from '@mui/material'
import {  useNavigate } from 'react-router-dom'

export default function Homepage() {
  const navigate =useNavigate()
  return (
    <div className='app'>
    <h1>Welcome to Zen classes</h1>
    <Button variant="contained" onClick={()=>navigate("/login")}>Admin login</Button>{" "}
    <Button variant="contained" onClick={()=>navigate("/login")}>Student Login</Button></div>
  )
}
