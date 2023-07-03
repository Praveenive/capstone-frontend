import { Autocomplete, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AdminBase from '../../../Base/AdminBase'

const batchname = ["WeekDay","Weekend","Evening","Special"]
export default function AssignBatch({batch,setBatch}) {
    const {token,id} = useParams()
    
    const navigate = useNavigate()
    const batchAssign = async()=>{
        const assign = {batch}
        const response = await fetch(`https://capstone-backend-m4t7-praveenive.vercel.app/stu/assign-batch${id}`,{
            method:"PUT",
            body:JSON.stringify(assign),
            headers:{
                "x-auth-token":token,
                "Content-type":"application/json"
            }
        })
        const data = await response.json()
        console.log(data)
        navigate("/studentlist")
    }
  return (
    <AdminBase>
       <h1>Hello Admin Assign batch</h1>
      <div className='form'>
 <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={batchname}
  value={batch}
  onChange={(event, newValue) => setBatch(newValue)}
  sx={{ width: 1250 }}
  renderInput={(params) => <TextField {...params} label="Batch" />}
/></div>
<Button variant='contained' onClick={batchAssign}>Assign Batch</Button>
    </AdminBase>
  )
}
