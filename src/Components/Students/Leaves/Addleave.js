import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Base from '../../../Base/Base'

export default function Addleave({leaves,setLeaves}) {
    const [numberofdays,setNumberofdays] = useState("")
    const [from,setFrom] = useState("")
    const [to,setTo] = useState("")
    const [reason,setReason] = useState("")
    const navigate = useNavigate()
    const [error,setError ] =useState("") 
    const handleAddingLeave = async()=>{
        let token  = localStorage.getItem("token")
        if(!token){
            navigate("/login",{replace:true})
        }
        const newleave = {
            NumberOfdays:numberofdays,
            From:from,
            To:to,
            Reason:reason
        }
        const response = await fetch(`http://localhost:9090/leave/add`,{
            method:"POST",
            body:JSON.stringify(newleave),
            headers:{
                "x-auth-token":token,
                "Content-type":"application/json"
            }
        })
        const data = await response.json()
        if(!data.data){
            setError(data.message)
        }
        setError(" ")
        setLeaves([...leaves,data.data])
        
    }
  return (
    <Base>
    <h1>Leave Request Form</h1>
    <form>
    <TextField   id="numberofdays" label="NumberofDays" value={numberofdays}
    type="text" onChange={(e)=>setNumberofdays(e.target.value)}   variant="outlined" fullWidth sx={{ m: 1 } }  />
    <TextField   id="from" label="From" value={from}
    type="text" onChange={(e)=>setFrom(e.target.value)}   variant="outlined" fullWidth sx={{ m: 1 } }  />
    <TextField   id="to" label="to" value={to}
    type="text" onChange={(e)=>setTo(e.target.value)}   variant="outlined" fullWidth sx={{ m: 1 } }  />
    <TextField   id="reason" label="Reason" value={reason}
    type="text" onChange={(e)=>setReason(e.target.value)}   variant="outlined" fullWidth sx={{ m: 1 } }  />
     <Button variant='contained' type='submit' onClick={handleAddingLeave}>Add Leave</Button>
    </form>
    {error?<Typography>{error}</Typography>:" "}
    </Base>
  )
}
