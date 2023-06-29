import { Button, Card, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Base from '../../../Base/Base'

export default function Queries({queries,setQueries}) {
    const [error,setError] = useState("")
    const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem("token"))
        {
            navigate("/login",{replace:true})
        }
        let token = localStorage.getItem("token")
        const getAllQueries = async()=>{
            const response = await fetch(`http://localhost:9090/query/allqueries`,{
                method:"GET",
                headers:{
                    "x-auth-token":token
                }
            })
            const data= await response.json();
            console.log(data.data)
            if(!data.data){
                setError(data.message)
            }
            setError(" ")
            setQueries(data.data)

        }
        getAllQueries()

    },[])
  return (
    <Base>
     <div className='ref'><Button variant='contained' onClick={()=>navigate("/createquery")}>+Create Query</Button></div><br/>
     {queries&&(
     <div className='card-container'>
        {queries?.map((data,idx)=>(
            <Card  className="card" variant="outlined" key={data._id}>
                <p>Topic:{data.Topic}</p>
                <p>PreferedLanguage:{data.PreferedLanguage}</p>
                <p>Query Title:{data.QueryTitle}</p>
                <p>Querydescription:{data.Querydescription}</p>
                <p>AvailableTimeslots:{data.AvailableTimeslots}</p>
                <Button variant='contained'>Query Status</Button>
            </Card>
        ))}
{error? <Typography>{error}</Typography>:" "}

        </div>)}
    </Base>
  )
}
