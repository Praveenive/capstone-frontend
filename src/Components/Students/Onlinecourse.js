import { Button, ButtonGroup, Card, CardMedia } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Base from '../../Base/Base'


export default function Onlinecourse({course,setCourse}) {
    const navigate=useNavigate()
    const [error,setError] = useState("")
    let token = localStorage.getItem("token")
    useEffect(()=>{
      if(!token){
        navigate("/login",{replace:true})
      }
      const fetchallcourses = async()=>{
        const response = await fetch(`https://capstone-backend-m4t7-praveenive.vercel.app/course/getcourse`,
        {
          method:"GET",
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
        setCourse(data.data)
      }
      fetchallcourses()
    },[])
      return (
        <Base>
            <h1>Online Courses</h1>
            {course&&(
              <div className='card-container'>
                {course?.map((data,idx)=>(
                  <Card className='card' key = {data._id}>
                      <CardMedia
                    component='img'
                    height='140' width="100"
                    image={data.image} 
                    alt={data.coursename}
                  />
                    <h3>coursename :{data.coursename}</h3>
                    <p>Language:{data.language}</p>
                    <p>courseduration:{data.courseduration}</p>
                    <Button href='#'  variant='contained' color="secondary">Visit Site</Button>
                  </Card>
                ))}
              </div>
            )}
        </Base>
      )
    }
    
