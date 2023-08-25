import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const [firstname,setFirstname] = useState("")
  const [lastname,setLastname ] = useState("")
  const [email,setEmail ] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")
  const navigate = useNavigate()
  async function handleSignup(){
    const newStudent = {
      firstname,lastname,email,password
    }
    const response = await fetch(`https://capstone-backend-m4t7-praveenive.vercel.app/user/signup`,{
      method:"POST",
      body:JSON.stringify(newStudent),
      headers:{
        "Content-type":"application/json"
      }

    });
      const data = await response.json();
      if(!data.data){
        setError(data.message)
      }
      else{
      navigate("/login")
  }}

  return (
    <div className='loginpage'>
    <h4>Zen Classes</h4> 
    <h5>Welcome</h5>
    <p>Please enter your  details</p>
    <TextField id="firstname" label="Enter your First name" variant="filled" value={firstname} onChange={(e)=>setFirstname(e.target.value)}/><br/><br/>
    <TextField id="lastname" label="Enter your Last name" variant="filled"value={lastname} onChange={(e)=>setLastname(e.target.value)} /><br/><br/>
    <TextField id="email" label="Enter your email" variant="filled" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
    <TextField id="password" type="password" label="Enter Password" variant="filled" value={password} onChange={(e)=>setPassword(e.target.value)}/>  <br/><br/>
    <Button variant="contained" onClick={handleSignup}>Signup</Button>
    <p>Already have an account?</p>
    <Button variant="text"  onClick={()=>navigate("/login")}>Login</Button>
    {error?<Typography variant="body1" color="error">{error}</Typography>:" "}
    </div>
  )
}
