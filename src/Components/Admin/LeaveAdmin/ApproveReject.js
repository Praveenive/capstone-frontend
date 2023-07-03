import { Autocomplete, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AdminBase from '../../../Base/AdminBase'

const leavestatus =["Approved ", "Rejected"]


export default function ApproveReject() {
    const [Leavestatus,setLeavestatus] = useState("Pending")
    const {id,token}= useParams()
    const navigate = useNavigate()
    const handleApproved = async()=>{
        const update = {Leavestatus}
        const response =await fetch(`https://capstone-backend-m4t7-praveenive.vercel.app/leave/leavestatus/${id}`,{
            method:"PUT",
            body:JSON.stringify(update),
            headers:{
                "x-auth-token":token,
                "Content-type":"application/json"
            }
        })
        const data = await response.json()
        console.log(data)
        navigate("/leaveapproval")
    }
  return (
    <AdminBase>
          <h1>Leavestatus</h1>
          <div className='form'>
 <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={leavestatus}
  value={Leavestatus}
  onChange={(event, newValue) => setLeavestatus(newValue)}
  sx={{ width: 1250 }}
  renderInput={(params) => <TextField {...params} label="Leavestatus" />}
/></div>
<Button type="submit" variant="contained"  onClick={handleApproved}>Submit</Button>
    </AdminBase>
  )
}
