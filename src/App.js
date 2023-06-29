import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Signup from './Components/Signup';
import CreateQueries from './Components/Students/Queries/CreateQueries';
import Queries from './Components/Students/Queries/Queries';
import StudentDashboard from './Components/Students/StudentDashboard';
import Tasks from './Components/Tasks/Tasks';

function App() {
  const [queries,setQueries] = useState([])
  return (
    <div className="App">
     <Routes>
      <Route exact path="/"element={<Homepage/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/stu-queries" element={<Queries
      queries={queries} setQueries={setQueries}/>}></Route>
      <Route path="/createquery" element={<CreateQueries
      queries={queries} setQueries={setQueries}/>}></Route>
      <Route path="/stu-dashbaord" element={<StudentDashboard/>}></Route>
      <Route path="/tasks" element={<Tasks/>}></Route>
     </Routes>

    </div>
  );
}

export default App;
