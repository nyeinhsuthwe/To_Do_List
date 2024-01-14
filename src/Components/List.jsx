import React from "react";

import Cart from "./Cart";

const List = ({task,deleteTask,updateTask}) => {
  return (
    <div>
      
      <ol className="list-group w-50 mx-auto">
        <Cart task={task} deleteTask={deleteTask} updateTask={updateTask}/>
      </ol>
    </div>
  );
};

export default List;
