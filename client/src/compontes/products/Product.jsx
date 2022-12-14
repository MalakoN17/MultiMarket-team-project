import React from 'react'

export default function Product() {
  return (
    <div>
    כל המידע מגיע ב props
    <div>
        <img src={''} alt=''/>
    </div>
    <div>
        <h5>שם המוצר</h5>
    </div>
    <div>
        <button> בעת לחיצה אפשר להוריד כמות מהמוצר -</button>
        <span> </span>
        <button> בעת הלחיצה מוסיף לכמות של המוצר  +</button>
    </div>
    <div>
        <div>
            <p>המחיר ל100 גר</p>
            <p>המחיר ל100 גר</p>
        </div>
        <div>
            <p> מספר מקט</p>
            <p>מקט</p>
        </div>
        <div>
            <p>  מוגבל ל10 קג</p>
            <p>תנאי מבצע</p>
        </div>
        <div>
            <p>  אלרגנים</p>
        </div>
        
    </div>
</div>
  )
}
