import React from 'react'

import './style.css';


export default function store(props) {
  return (
    <div>
        <div className="flex flex-col sm:flex-row items-center sm:items-end border w-full gap-4 p-2">
              <img src={props.smallHome} alt="" />
              <div>
                <h4>חוות הבית</h4>
                <p></p>
                <p>חנות ירקות חוות הבית במודעין-מכבים-רעות מגישה</p>
                <div className="flex">
                  <img
                    className="business-liaison-logo"
                    src={props.business}
                    alt=""
                  />
                  <div>
                    <p>עמק זבולון 3,</p>
                    <p>מודעין, אזור המרכז</p>
                  </div>
                </div>
              </div>
              <button className="store-btn">קנה בחנות זו</button>
            </div>
    </div>
  )
}
