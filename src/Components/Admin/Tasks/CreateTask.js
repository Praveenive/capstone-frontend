import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminBase from '../../../Base/AdminBase'
import Tasks from '../../Students/Tasks/Tasks'

export default function CreateTask({tasks,setTasks}) {
    const [taskLanguage,setTaskLanguage] = useState("")
    const [taskname,setTaskname] = useState("")
    const [deadline,setDeadline] = useState("")
    const navigate=useNavigate()
    const [error,setError] = useState("")
    let token= localStorage.getItem("token")
const handleTask =async()=>{
    const newtask = {
        taskLanguage,taskname,deadline
    }
    const response = await fetch(`https://capstone-backend-m4t7-praveenive.vercel.app/task/uploadtask`,{
        method:"POST",
        body:JSON.stringify(newtask),
        headers:{
            "x-auth-token":token,
            "Content-type":"application/json"
        }
    })
    const data = await response.json()
    console.log(data)
    if(!data.data){
setError(data.message)
    }
    setTasks(...tasks,data.data)
    navigate("/taskgen")
}

  return (
    <AdminBase>
        <h1>Create Task</h1>
        <form>
        <TextField   id="TaskLanguage" label="TaskLanguage" value={taskLanguage}
    type="text" onChange={(e)=>setTaskLanguage(e.target.value)}   variant="outlined" fullWidth sx={{ m: 1 } }  />
          <TextField   id="Taskname" label="TaskFile" value={taskname}
    type="text" onChange={(e)=>setTaskname(e.target.value)}   variant="outlined" fullWidth sx={{ m: 1 } } />
          <TextField   id="deadline" label="Deadline" value={deadline}
    type="text" onChange={(e)=>setDeadline(e.target.value)}   variant="outlined" fullWidth sx={{ m: 1 } }  />
    <Button variant='contained' type="submit" onClick={handleTask}>Submit</Button>
        </form>
        {error?<Typography>{error}</Typography>:" "}
    </AdminBase>
  )
}
