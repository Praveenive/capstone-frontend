import { Button, Card, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Base from '../../../Base/Base'

export default function Queries({queries,setQueries}) {
    const [tokenid,setTokenid] = useState("")
    const [error,setError] = useState("")
    const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem("token"))
        {
            navigate("/login",{replace:true})
        }
        let token = localStorage.getItem("token")
        setTokenid(token)
        const getAllQueries = async()=>{
            const response = await fetch(`https://capstone-backend-m4t7-praveenive.vercel.app/query/myquery`,{
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
            console.log(queries)

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
                <h4>Query Status:{data.Querystatus}</h4>
                <Button variant='contained' onClick={()=>navigate(`/updatequery/${data._id}/${tokenid}`)}>Query Status</Button>
            </Card>
        ))}
{error? <Typography>{error}</Typography>:" "}

        </div>)}
    </Base>
  )
}
