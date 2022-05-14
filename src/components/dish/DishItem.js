import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'
import { startAddRank } from "../../action/rankAction";
const DishItem=(props)=>{
    const {id:DishId,dishName,description,image}=props
    const activeUserId=useSelector(state=>state.activeUser.id)||''
    const userRankList=useSelector(state=>state.rankList[activeUserId])||''
    const [poll,setPoll]=useState(false)
    const dispatch=useDispatch()
    const handlePoll=()=>{
        setPoll(!poll)
    }
    useEffect(()=>{
        setPoll(false)
    },[activeUserId])
    useEffect(()=>{
        if(userRankList.length<3)
       {
        poll&&dispatch(startAddRank({DishId,activeUserId}))
       }

    },[poll])
    return(
        <div  className={"col"} style={{ width: '16rem'}} >
    <div className="card mt-2 p-2  border shadow rounded" >
      <img src={`https://source.unsplash.com/random/300x250?sig=${DishId}`} onClick={activeUserId?()=>{handlePoll()}:()=>{Swal.fire('Please Login')}} alt="a snow-capped mountain range"/>
      <div className="card-body">
        <h2 className="card-title">Name : {dishName}</h2>
        <p className="card-text">{description}</p>
      </div>
    </div>
  </div>
    )
}
export default DishItem