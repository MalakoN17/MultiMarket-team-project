import React from 'react';
import './department.css';

import axios from 'axios';
import { useState } from 'react';

export default function Departments(props) {
  return (
    // <div
    //   className="image-depart h-50 group-hover:opacity-75"
    //   // style={{
    //   //   backgroundImage: 'url(' + props.department.coverImage + ')',
    //   //   backgroundPosition: 'center',
    //   //   backgroundSize: 'cover',
    //   //   backgroundRepeat: 'no-repeat',
    //   // }}
    // >
    //   <a href="#" className="group">
    //     <div className="departmentImg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
    //       <img
    //     src={props.department.coverImage}
    //     alt={props.department.name}
    //     className="image-depart group-hover:opacity-75"
    //   />
    //     </div>
    //     <h3 className="departmentTitle">{props.department.name}</h3>
    //   </a>
    // </div>

    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        class="w-full"
        src={props.department.coverImage}
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4 bg-white text-right">
        <div class="font-bold text-xl mb-2">{props.department.name}</div>
      </div>
    </div>
  );
}
