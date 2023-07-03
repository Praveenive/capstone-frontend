import { Button, Card, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Base from '../../../Base/Base'

export default function Myleaves({leaves,setLeaves}) {
    const [error,setError] =useState("")
    const [tokenId,setTokenId] = useState("")
    const navigate= useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem("token")){
        navigate("/login",{replace:true})
    }
let token = localStorage.getItem("token")
setTokenId(token)
    const getMyLeaves = async()=>{
      const res = await fetch(`https://capstone-backend-m4t7-praveenive.vercel.app/leave/myleaves`,{
        method:"GET",
        headers:{
          "x-auth-token":token
        }
      })
      const data = await res.json()
      console.log("data",data)
      if(!data.data){
        setError(data.message)
        console.log(error)
      }
      setLeaves(data.data)
    }
    getMyLeaves()
  },[])

  return (
    <Base>
  <h1>Leave Application</h1>
  <div className='ref'><Button variant='contained'onClick={()=>navigate(`/addleave/${tokenId}`)}>Leave Request</Button></div>
  {leaves&&(
    <div className='card-container'>
        {leaves?.map((data,idx)=>(
            <Paper className="card" elevation={5} key ={data._id}>
              <p>Student ID:{data.user}</p>
                <p>Number Of Days :{data.NumberOfdays}</p>
                <p>From :{data.From}</p>
                <p>To:{data.To}</p>
                <p>Reason:{data.Reason}</p>
                <h4>Leave Status:{data.Leavestatus}</h4>
            </Paper>
    ))}
    
    </div>
  )}
 
 {error?<Typography>{error}</Typography>:" "}
    </Base>
  )
}
