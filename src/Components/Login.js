import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")
  const navigate = useNavigate()
  const handleLogin = async()=>{
    const loginDetails = {email,password}
    const response = await fetch(`https://capstone-backend-m4t7-praveenive.vercel.app/user/login`,{
      method:"POST",
      body:JSON.stringify(loginDetails),
      headers:{
        "Content-type":"application/json"
      }
    })
    const data = await response.json();
    console.log(data)
    if(!data.token){
      setError(data.message)
    }
    else{
      const role = data.role;
      console.log(role)
      localStorage.setItem("id", data.id)
      if(role==="admin"){
    setError(" ")
    localStorage.setItem("token",data.token)
    navigate("/admin-dashboard")
    }
    else {
      setError(" ")
    localStorage.setItem("token",data.token)
    navigate("/stu-onlinecourse")}}
  }
  return (
    <div className='App'>
        <h3>Welcome to Zen Classes</h3>
        <TextField id="email" label="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}  variant="filled" /><br/><br/>
      <TextField type="password"  label="Enter Password" variant="filled" value={password} onChange={(e)=>setPassword(e.target.value)}/>  <br/><br/>
      <Button variant="contained" onClick={handleLogin}>Login</Button>
      <p>Don't have an  account yet?</p>
      <Button variant="text" onClick={()=>navigate("/signup")}>Signup</Button>
      {error?<Typography variant="body1" color="error">{error}</Typography>:" "}
    </div>
   
  )
}
