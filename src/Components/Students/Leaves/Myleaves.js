import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Base from '../../../Base/Base'

export default function Myleaves() {
    const [leaves,setLeaves] = useState("")
    const [error,setError] =useState("")
    const navigate= useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem("token")){
        navigate("/login",{replace:true})
    }
let token = localStorage.getItem("token")
    const getMyLeaves = async()=>{
        const response = await fetch(`localhost:9090/leave/myleaves`,{
            method:"GET",
            headers:{
                "x-auth-token":token,
                "Content-type":"application/json"
            }
        })
        const data = await response.json();
        console.log(data)
        if(!data.data){
            setError(data.message)
        }
        setError(" ")
        setLeaves(...leaves,data.data)
    }
  })

  return (
    <Base>
  <h1>Leave Application</h1>
 

    </Base>
  )
}
