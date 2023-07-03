import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { resolvePath, useNavigate } from 'react-router-dom'
import AdminBase from '../../../Base/AdminBase'

export default function Createcourse({course,setCourse}) {
    const [coursename,setCoursename] =useState("")
    const [language,setLanguage] = useState("")
    const [courseduration,setCourseDuration] = useState("")
    const [image,setImage] = useState("")
    const [error,setError] = useState("")
    const navigate = useNavigate() 
    let token =localStorage.getItem("token")
    const addingCourse =async()=>{
        const coursedetails={
            coursename,language,courseduration,image
        }
        const response =await fetch(`https://capstone-backend-m4t7-praveenive.vercel.app/course/addcourse`,{
            method:"POST",
            body:JSON.stringify(coursedetails),
            headers:{
                "x-auth-token":token,
                "Content-type":"application/json"
            }
        })
        const data =await response.json()
        if(data.data=="undefined"){
            setError(data.message)
        }
        setError(" ")
        setCourse([...course,data.data])
        navigate("/admincourses")
    }
      return (
   <AdminBase>
    <h1>Create Course</h1><form>
    <TextField id="filled-basic" label="Course name" 
    variant="filled" value={coursename} onChange={(e)=>setCoursename(e.target.value)} fullWidth x={{ sm: 1 } } />
    <TextField id="filled-basic" label="Language"  value={language}
    variant="filled"  onChange={(e)=>setLanguage(e.target.value)} fullWidth x={{ sm: 1 } } />
    <TextField id="filled-basic" label="Course Duration"  value={courseduration}
    variant="filled" onChange={(e)=>setCourseDuration(e.target.value)} fullWidth x={{ sm: 1 } } />
    <TextField id="filled-basic" label="Course Image Url"  value={image}
    variant="filled"  onChange={(e)=>setImage(e.target.value)}     fullWidth x={{ sm: 1 } } />
    <div style={{marginTop:"50px"}}><Button variant="contained" color="success" type="submit" onClick={addingCourse}>Create Query</Button></div>
    </form>
    {error?<Typography>{error}</Typography>:" "}
   </AdminBase>
  )
}
