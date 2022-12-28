import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import Department from './Department';
import {clearSelect, settingSelect,changeSelect} from "../../features/city/citySlice"
import './department.css';
 
export default function Departments() {
  const {cityValue,show} = useSelector((state)=> state.city);
  const dispatch = useDispatch()

  const [departments, setDepartments] = useState([]);
 
  useEffect(() => {
    const getDepartments = async () => {
      const res = await axios.get('http://localhost:8000/api/department');
      setDepartments(res.data);
    };
    getDepartments();
  }, [departments]);

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
      <div className="mx-auto text-center max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
       <h1 className='text-center text-5xl mb-5'>ברוכים הבאים לאטלס מולטי-מרקט</h1>
       <div className={show ? 'block' : 'hidden'}><button className='text-white text-xl w-32 bg-lime-400 hover:bg-lime-500 focus:outline-none focus:ring-4 focus:ring-lime-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800 mb-6 mt-4' onClick={()=>dispatch(changeSelect())}>שנה עיר</button></div>
        <div className="threeInRow sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {departments.map((department,index) => {
            return (
              <div key={index}><Department department={department} departmentID={department._id} /></div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
 


