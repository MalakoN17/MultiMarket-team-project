import React from 'react'

export default function Products() {
  return (
    <div>
        כל המידע מגיע ב props
        <div>
            <img src={''} alt=''/>
        </div>
        <div>
            <h5>שם המוצר</h5>
            <h6>קצת על מוצר <button>בעת בלחיצה על הנקודות ... יפתח הסבר מפורט יותר על המוצר</button></h6>
        </div>
        <div>
            <button> בעת לחיצה אפשר להוריד כמות מהמוצר -</button>
            <span> </span>
            <button> בעת הלחיצה מוסיף לכמות של המוצר  +</button>
        </div>
        <div>
            <span>סהכ</span>
            <span>כמה היה אמור לעלות</span>

        </div>
    </div>
  )
}
