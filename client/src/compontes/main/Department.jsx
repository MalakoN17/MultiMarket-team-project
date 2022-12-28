import React from 'react';
import './department.css';
import { Link } from 'react-router-dom';
 
export default function Department(props) {
  // const navigate = useNavigate()
  return (
    <div>
      <Link to={`/store/${props.department._id}`}><div className="departmentImg group aspect-w-1 aspect-h-1 bg-white xl:aspect-w-7 xl:aspect-h-8">
        {/* <a href="#" className="group"> */}
          <img
            src={props.department.coverImage}
            alt={props.department.name}
            className="image-depart rounded-xl group-hover:opacity-75 scale-90 transition duration-300 hover:scale-100 transform
            "
          />
          <div className="px-6 py-4 bg-white text-right">
            <div className="font-semibold text-xl mb-2">{props.department.name}</div>
          </div>
        {/* </a> */}
      </div></Link>
    </div>
  );
}
 






