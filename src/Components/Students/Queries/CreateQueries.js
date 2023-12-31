import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Base from '../../../Base/Base'

export default function CreateQueries({queries,setQueries}) {
    const [topic,setTopic]= useState("")
    const [preferedLanguage,setPreferedLanguage] = useState("")
    const [queryTitle,setQueryTitle] = useState("")
    const [queryDescription,setQueryDescription] = useState("")
    const [availabletimeslots,setAvailabletimeslots] = useState("")
    const [error,setError] = useState("")
    const navigate= useNavigate()
    const addQuery = async(event)=>{
        event.preventDefault();
        let token = localStorage.getItem("token")
            const newQuery = {
                Topic: topic,
                PreferedLanguage: preferedLanguage,
                QueryTitle: queryTitle,
                Querydescription: queryDescription,
                AvailableTimeslots: availabletimeslots,
              }
        const response = await fetch(`https://capstone-backend-m4t7-praveenive.vercel.app/query/createquery`,{
            method:"POST",
            body:JSON.stringify(newQuery),
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
       setQueries([...queries,data.data])
       navigate("/stu-queries")
    }
  return (
   <Base>
   <h1>Connect With us</h1>
   <form >
   <TextField   id="Topic" label="Topic" value={topic}
    type="text" onChange={(e)=>setTopic(e.target.value)}   variant="outlined" fullWidth sx={{ m: 1 } }  />
   <TextField  id="PreferedLanguage" label="PreferedLanguage" value={preferedLanguage}
    type="text" onChange={(e)=>setPreferedLanguage(e.target.value)}  variant="outlined" fullWidth sx={{ m: 1 }}   />
   <TextField  id="QueryTitle" label="QueryTitle" value={queryTitle}
   type="text" onChange={(e)=>setQueryTitle(e.target.value)}  variant="outlined" fullWidth sx={{ m: 1 } }  />
   <TextField id="Querydescription" label="Querydescription" value={queryDescription}
   type="text" onChange={(e)=>setQueryDescription(e.target.value)}  variant="outlined" fullWidth sx={{ m: 1 } }  />
   <TextField  id="AvailableTimeslots" label="AvailableTimeslots" value={availabletimeslots}
   type="text" onChange={(e)=>setAvailabletimeslots(e.target.value)}  variant="outlined" fullWidth sx={{ m: 1 }}   />
   <div style={{marginTop:"50px"}}><Button variant="contained"  type="submit" onClick={addQuery}>Create Query</Button></div>
 {error?<Typography>{error}</Typography>:" "}
   </form>
   </Base>
  )
}
