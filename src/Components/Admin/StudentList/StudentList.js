import { Button, Card, Table } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import AdminBase from '../../../Base/AdminBase'

export default function StudentList({batch}) {
    const [students,setStudents] = useState([])
    const [error,setError] = useState("")
    const [tokenid,setTokenid]= useState("")
    const navigate = useNavigate()
useEffect(()=>{
    if(!localStorage.getItem("token"))
    {
        navigate("/login",{replace:true})
    }
    let token  = localStorage.getItem("token")
    setTokenid(token)
    const fetchAllstudents = async()=>{
        const response = await fetch(`https://capstone-backend-m4t7-praveenive.vercel.app/stu/allstudents`,{
            method:"GET",
            headers:{
                "x-auth-token":token
            }
        })
        const data = await response.json()
        if(!data.data){
            setError(data.message)
        }
        else{
            setError("")
            setStudents(data.data)
           
        }
    }
    fetchAllstudents()
},[])

    
  return (
    <AdminBase>
<h1>Students List</h1>
{students&& (
    <div className='card-container'>
        {students?.map((data,idx)=>(
      <Card classname="card" variant="outlined" key={data._id}>
        <p>Student ID :{data._id}</p>
        <h3>Student name:{data.firstname}</h3>
        <p>Student Email:{data.email}</p>
        <h5>Student Batch: {data.batch}</h5>
        <Button variant='contained' onClick={()=>navigate(`/assignbatch/${data._id}/${tokenid}`)}>Assign Batch</Button><br/>
      </Card>
        ))}
    </div>
)}
    </AdminBase>
  )
}
