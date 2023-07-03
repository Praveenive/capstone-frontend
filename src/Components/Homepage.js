import React, { useEffect, useState } from 'react';
import { Button, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';

export default function Homepage({course,setCourse}) {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchallcourses = async () => {
      const response = await fetch('https://capstone-backend-m4t7-praveenive.vercel.app/course/getcourse', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        }
      });
      const data = await response.json();
      console.log(data);
      setCourse(data.data);
      console.log(course)
    };
    fetchallcourses();
  }, []);

  return (
    <div>
      <div className='app' id='home'>
        <h1>Welcome to Zen classes</h1>
        <Button variant='contained' onClick={() => navigate('/login')}>
          Admin login
        </Button>{' '}
        <Button variant='contained' onClick={() => navigate('/login')}>
          Student Login
        </Button>
      </div>
      <div>
        <h1>Online Courses</h1>
        {course!==null && (
          <div className='card-container'>
            {course.map((data) => (
              <Card className='card' key={data._id}>
                <CardMedia component='img' height='140' width='100' image={data.image} alt={data.coursename} />
                <h3>coursename: {data.coursename}</h3>
                <p>Language: {data.language}</p>
                <p>courseduration: {data.courseduration}</p>
                <Button href='#' variant='contained' color='secondary'>
                  Visit Site
                </Button>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
