/* eslint-disable no-restricted-globals */
import React from 'react'

const Cart = ({task,deleteTask,updateTask}) => {
    
const HandleDeleteTask = (id) =>{
  if(confirm("Are you sure ?")){
    deleteTask(id)
  }
}
    
  return (
    <div>
        {
           task.map(( task)=>{
             return (
             <div className={ task.complete ? "list-group-item mb-2 shadow-lg bg-success text-decoration-line-through" : "list-group-item mb-2 shadow-lg"}>
               <div key={task.id} className="row ">
                 <div className="col-9 offset-1 text-muted">
                   <input type="checkbox" onClick={()=>updateTask(task.id, !task.complete)} checked={task.complete===true} className='me-2' /> {task.task}
                 </div>
                 <div className="col-2">
                   <i className="trash fa-solid fa-trash" onClick={() => HandleDeleteTask(task.id)}></i>
                 </div>
               </div>
             </div>);
           })
        }
    </div>
  )
}

export default Cart