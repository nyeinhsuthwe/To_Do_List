import React, { useEffect, useState } from 'react'
import "./App.css"
import List from "./Components/List.jsx"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {api} from "./api/apiResources.js"
import Form from './Components/Form.js'
import uuid from "react-uuid"


const App = () => {
 
  const[task, setTask]=useState([])
 const fatchData = async ()=>{
  const data = await api.get('/todolist')
  setTask(data.data);
 }
 
 useEffect(()=>{
  fatchData()
 },[task])

 const submitbtn =async(uform)=>{
  const data= {
    "id":uuid(),
    "task" : uform,
    "complete status" : "true"
};

  await api.post('todolist',data)
 
};

const deleteTask = async(task_id)=>{
  await api.delete(`/todolist/${task_id}`)
}

const updateTask = async(task_id, complete)=> {
  await api.patch(`/todolist/${task_id}`,{complete})
}

  return (
    <div>
        <Form submitbtn={submitbtn}/>
      <List task={task} deleteTask={deleteTask} updateTask={updateTask}/>
      
      
    </div>
  )
}

export default App