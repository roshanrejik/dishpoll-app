import React, { useState } from "react";
const DishItem=(props)=>{
    const {id,dishName,description,image}=props
    const [poll,setPoll]=useState(false)
    const handlePoll=()=>{
        setPoll(!poll)
    }
    return(
        <div  className={"col"} style={{ width: '16rem'}} >
    <div className="card mt-2 p-2  border shadow rounded" style={{background:poll?'lightblue':'white'}} >
      <img src={`https://source.unsplash.com/random/300x250?sig=${id}`}  onClick={handlePoll} alt="a snow-capped mountain range"/>
      <div className="card-body">
        <h2 className="card-title">Name : {dishName}</h2>
        <p className="card-text">{description}</p>
      </div>
    </div>
  </div>
    )
}
export default DishItem