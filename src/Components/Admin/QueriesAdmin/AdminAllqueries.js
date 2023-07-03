import { Card } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import AdminBase from '../../../Base/AdminBase'

export default function AdminAllqueries({queries,setQueries}) {
    const navigate= useNavigate()
    const [error,setError] = useState("")
    useEffect(()=>{
        if(!localStorage.getItem("token")){
            navigate("/login" ,{replace:true})
        }
        let token = localStorage.getItem("token")
        const fetchAllqueries = async()=>{
            const response =await fetch(`https://capstone-backend-m4t7-praveenive.vercel.app/query/allqueries`,{
                method:"GET",
                headers:{
                    "x-auth-token":token
                }
            })
            const data= await response.json()
            console.log(data)
            if(!data.data){
                setError(data.message)
            }
            setQueries(data.data)
            console.log(queries)
        }
        fetchAllqueries()
    },[])
    
  return (
   <AdminBase>
    <h1>All Queries</h1>
    {queries&&(
        <div className='card-container'>
            {queries?.map((data,idx)=>(
                <Card className="card" key={data._id}>
                <h5>Query Id :{data._id}</h5>
                <p>Topic:{data.Topic}</p>
                <p>PreferedLanguage:{data.PreferedLanguage}</p>
                <p>Query Title:{data.QueryTitle}</p>
                <p>Querydescription:{data.Querydescription}</p>
                <p>AvailableTimeslots:{data.AvailableTimeslots}</p>
                <h3>Query Status:{data.Querystatus}</h3>
                </Card>
            ))}
        </div>
    )}

   </AdminBase>
  )
}
