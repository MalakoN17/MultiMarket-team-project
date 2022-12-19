import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Departments from './Departments';
import SearchInput from './searchInput';
import './department.css';

export default function Department() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const getDepartments = async () => {
      const res = await axios.get('http://localhost:8000/api/department');
      console.log(res.data);
      setDepartments(res.data);
    };
    getDepartments();
  }, []);
  return (
    <div
      style={{
        backgroundImage:
          'url(' +
          'https://media.istockphoto.com/id/1225155638/photo/green-leaves-on-white.jpg?b=1&s=612x612&w=0&k=20&c=U-yuGVnwjAnib3tiSZEiUA4rjimL0Nlfdwrkr7lpwQM=' +
          ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className=""
    >
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
       <SearchInput />
        <div className="threeInRow sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {departments.map((department,index) => {
            return (
              <div key={index}><Departments department={department} /></div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
