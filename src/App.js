import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminAllqueries from './Components/Admin/QueriesAdmin/AdminAllqueries';
import AdminDashboard from './Components/Admin/AdminDashboard';
import CreateTask from './Components/Admin/Tasks/CreateTask';
import AssignBatch from './Components/Admin/StudentList/Assign Batch';
import StudentList from './Components/Admin/StudentList/StudentList';
import TaskGen from './Components/Admin/Tasks/TaskGen';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Addleave from './Components/Students/Leaves/Addleave';
import Myleaves from './Components/Students/Leaves/Myleaves';
import CreateQueries from './Components/Students/Queries/CreateQueries';
import Queries from './Components/Students/Queries/Queries';
import Tasks from './Components/Students/Tasks/Tasks';
import UpdateQuery from './Components/Students/Queries/UpdateQuery';
import LeaveApproval from './Components/Admin/LeaveAdmin/LeaveApproval';
import ApproveReject from './Components/Admin/LeaveAdmin/ApproveReject';
import AdminOnlinecourses from './Components/Admin/Courses/AdminOnlinecourses';
import Createcourse from './Components/Admin/Courses/Createcourse';
import Onlinecourse from './Components/Students/Onlinecourse';


function App() {
  const [queries,setQueries] = useState([])
  const [leaves,setLeaves] = useState([])
  const [tasks,setTasks] = useState([])
  const [course,setCourse] = useState([])
  const [batch,setBatch]=useState("null")
  return (
    <div className="App">
     <Routes>
      <Route exact path="/"element={<Homepage
      course={course} setCourse={setCourse}/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/stu-queries" element={<Queries
      queries={queries} setQueries={setQueries}/>}></Route>
      <Route path="/createquery" element={<CreateQueries
      queries={queries} setQueries={setQueries}/>}></Route>
      <Route path="/tasks" element={<Tasks
      tasks={tasks} setTasks={setTasks}/>}></Route>
      <Route path="/myleaves" element={<Myleaves
      leaves={leaves} setLeaves={setLeaves}/>}></Route>
      <Route path="/addleave/:token" element={<Addleave
      leaves={leaves} setLeaves={setLeaves}/>}></Route>
      <Route path="/admin-dashboard" element={<AdminDashboard/>}></Route>
      <Route path="/studentlist" element={<StudentList
      />}></Route>
      <Route path="/assignbatch/:id/:token" element={<AssignBatch
      batch={batch} setBatch={setBatch}/>}></Route>
      <Route path="allqueries" element={<AdminAllqueries 
       queries={queries} setQueries={setQueries}/>}></Route>
       <Route path="/taskgen" element={<TaskGen
       tasks={tasks} setTasks={setTasks}/>}></Route>
       <Route path="/createtask" element={<CreateTask
       tasks={tasks} setTasks={setTasks}/>}></Route>
       <Route path="/updatequery/:id/:token" element={<UpdateQuery/>}></Route>
       <Route path="/leaveapproval" element={<LeaveApproval
       leaves={leaves} setLeaves={setLeaves}/>}></Route>
       <Route path="/leavestatus/:id/:token" element={<ApproveReject/>}></Route>
       <Route path="/admincourses" element={<AdminOnlinecourses
       course={course} setCourse={setCourse}/>}></Route>
       <Route path="/createcourse" element={<Createcourse
        course={course} setCourse={setCourse}/>}></Route>
        <Route path="/stu-onlinecourse" element={<Onlinecourse
        course={course} setCourse={setCourse}/>}></Route>
     </Routes>

    </div>
  );
}

export default App;
