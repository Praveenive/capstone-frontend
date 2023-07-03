import { Button,Card } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AdminBase from '../../../Base/AdminBase'

export default function LeaveApproval({leaves,setLeaves}) {
    const navigate = useNavigate()
    let token = localStorage.getItem("token")
    useEffect(()=>{
        if(!localStorage.getItem("token"))
        {
            navigate("/login",{replace:"true"})
        }
        let token = localStorage.getItem("token")
        const fetchAllleaves = async()=>{
            const response = await fetch(`https://capstone-backend-m4t7-praveenive.vercel.app/leave/allleaves`,{
                method:"GET",
                headers:{
                    "x-auth-token":token
                }
            })
            const data = await response.json()
            setLeaves(data.data)
        }
        fetchAllleaves()
    },[])
 
  return (
   <AdminBase>
    <h1>All Students Leave Approval Request</h1>
    {leaves&& (
        <div className='card-container' >
            {leaves?.map((data,idx)=>(
                <Card classname="card" key={data._id}>
                  <h5>Student ID:{data.user}</h5>
                <p>Number Of Days :{data.NumberOfdays}</p>
                <p>From :{data.From}</p>
                <p>To:{data.To}</p>
                <p>Reason:{data.Reason}</p>
                <h4>Leave Status:{data.Leavestatus}</h4>
                <Button variant ="contained"color="success" 
                onClick={()=>navigate(`/leavestatus/${data._id}/${token}`)}>Update</Button>
                </Card>
            ))}
        </div>
    )}
   </AdminBase>
  )
}
