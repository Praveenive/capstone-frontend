import { Button, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminBase from '../../../Base/AdminBase'

export default function TaskGen({tasks,setTasks}) {
    const navigate =useNavigate()
    const [error,setError] = useState("")
   
    
    useEffect(()=>{
        if(!localStorage.getItem("token")){
            navigate("/login",{replace:true})
        }
        let token =localStorage.getItem("token")
        const fetchAlltasks = async()=>{
          const response = await fetch(`https://capstone-backend-m4t7-praveenive.vercel.app/task/viewtasks`,{
            method:"GET",
            headers:{
                "x-auth-token":token
            }
          })
          const data = await response.json()
          console.log(data)
          if(!data.data){
           setError(data.message)
          }
          setTasks(data.data)
        }
        fetchAlltasks()
    },[])
  return (
    <AdminBase>
       <h1>Task Details</h1>
       <div className='ref'>
        <Button variant='contained' 
        onClick={()=>navigate("/createtask")}>Create Task</Button></div><br/>
{tasks&&(
    <div>
        {tasks?.map((data,idx)=>(
            <Paper    elevation={5} key = {data._id}>
                <p>Task Language:{data.taskLanguage}</p>
                <p>Task File:{data.taskname}</p>
                <p>Deadline:{data.deadline}</p>
            </Paper>
        ))}
        {error?<Typography>{error}</Typography>:" "}
    </div>
)}
    </AdminBase>
  )
}
