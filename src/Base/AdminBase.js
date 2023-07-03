import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminBase({title, description, children}) {
const navigate = useNavigate()
function handleLogut(){
    localStorage.removeItem("token")
    navigate("/login")
}
  return (
    <div className='main-container'>
      <header>
      <nav>
        <h1>Zen Classes</h1>
      <AppBar position="static">
  <Toolbar variant="dense">
    <IconButton 
    edge="end"
     color="inherit"
     onClick={()=>navigate("/admin-dashboard")}
      aria-label="dashboard" sx={{ mr: 2 }}>  
    Admin Dashboard
    </IconButton>
    <IconButton 
    edge="end"
     color="inherit"
     onClick={()=>navigate("/admincourses")}
      aria-label="dashboard" sx={{ mr: 2 }}>  
   Online Courses
    </IconButton>
    <IconButton 
    edge="end"
     color="inherit"
     onClick={()=>navigate("/studentlist")}
      aria-label="dashboard" sx={{ mr: 2 }}>  
   Students
    </IconButton>
    <IconButton 
    edge="end" 
    color="inherit"
     aria-label="students"
     onClick={()=>navigate("/allqueries")}
      sx={{ mr: 2 }}>  
      Queries
    </IconButton>

    <IconButton 
    edge="end" 
    color="inherit" 
    aria-label="add students" 
    onClick={()=>navigate("/taskgen")}
    sx={{ mr: 2 }}>  
    Tasks
    </IconButton>
    <IconButton 
    edge="end" 
    color="inherit" 
    aria-label="add students" 
    onClick={()=>navigate("/leaveapproval")}
    sx={{ mr: 2 }}>  
    Leave application
    </IconButton>
    <IconButton  className='logout'
    edge="end" 
    color="inherit" 
    aria-label="add students" 
    onClick={handleLogut}
    sx={{ mr: 2 }}>  
   LogOut
    </IconButton>

  </Toolbar>
</AppBar>
        </nav>
      </header>
      <main>
          <h1>{title}</h1> 
          <h4>{description}</h4>
          <div className='contents'>
                {children}
          </div>
      </main>
    </div>
  )
}

