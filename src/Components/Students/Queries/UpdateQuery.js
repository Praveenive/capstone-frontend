import { Autocomplete,Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Base from '../../../Base/Base'

const querystatus = ["Not Assigned","Resolved","Mentor assigned","Mentor not yet Connect" ]

export default function UpdateQuery() {
   const [Querystatus,setQueryStatus] = useState("Not Assigned")
   const navigate = useNavigate()
   const {id,token} = useParams()
   const updatestatus =async()=>{
    const updated = {Querystatus}
    const response =await fetch(`https://capstone-backend-m4t7-praveenive.vercel.app/query/editquery/${id}`,{
        method:"PUT",
        body:JSON.stringify(updated),
        headers:{
            "x-auth-token":token,
            "Content-type":"application/json"
        },
    });
    const data = await response.json()
   console.log(data,id)
   navigate("/stu-queries")
}
  return (
    <Base>
    <h1>Update Query status</h1>
    <div className='form'>
 <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={querystatus}
  value={Querystatus}
  onChange={(event, newValue) => setQueryStatus(newValue)}
  sx={{ width: 1250 }}
  renderInput={(params) => <TextField {...params} label="Querystatus" />}
/></div>
<Button type="submit" variant="contained"  onClick={updatestatus}>Submit</Button>
    </Base>
  )
}
