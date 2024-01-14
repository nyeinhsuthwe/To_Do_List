import React, { useState } from "react";
import "./Form.css";

const Form = ({submitbtn}) => {
  const[uform,Setuform]=useState('')
  const clickbtn = (uform)=>{
  //   console.log(uform);
    submitbtn(uform)
    Setuform('');
   }
    
  
  return (
    <div className="mx-auto w-50 m-5">
      <h3 className="mb-4">
        <i className="icon fa-solid fa-clipboard-list"></i> Your Todo Lists
      </h3>
      <div className="row">
        <div className="col-8 ">
          <input
            value={uform}
            onChange={e => Setuform(e.target.value)}
            
            type="text"
            className="form-control shadow-sm "
            placeholder="Enter Todo Tasks..."
          />
        </div>
        <div className="col-4">
          <button className="btn btn-success shadow-sm" onClick={()=> clickbtn(uform)}>
            <i className="fa-solid fa-plus"></i>Add
          </button>
        </div>
      </div>
      <hr className="mt-4" />
    </div>
  );
};

export default Form;
