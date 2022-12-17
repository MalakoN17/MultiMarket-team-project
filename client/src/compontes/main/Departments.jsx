import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function Departments() {
  const [departments, setDepartments] = useState([]);
  const getDepartments = async () => {
    const res = await axios.get('http://localhost:8000/api/department');
    console.log(res.data);
    setDepartments(res.data);
  };
  getDepartments()

  return <div>
    {departments.map((department)=>{
      <div key={department._id}>
        <h1>{department.name}</h1>
        <img src={department.coverImage} alt="" />
      </div>
    })}
  </div>;
}
