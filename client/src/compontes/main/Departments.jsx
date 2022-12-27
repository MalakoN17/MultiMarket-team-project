import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import Department from './Department';
import {clearSelect, settingSelect,changeSelect} from "../../features/city/citySlice"
// import SearchInput from './searchInput';
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
       {/* <SearchInput /> */}
       <h1 className='text-center text-3xl'>ברוכים הבאים לאטלס מולטי-מרקט</h1>
       <button className='text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={()=>dispatch(changeSelect())}>שנה עיר</button>
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
 


