import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import { startRemoveDishOfUser } from "../../action/rankAction";
const AddRank=(props)=>{
    const {rankList}=useSelector(state=>state)
    const {id}=useSelector(state=>state.activeUser)
    const {dishes}=useSelector(state=>state)
    const dispatch=useDispatch()
    return(
        <div>
            <div style={{width:'17%',display:'inline-block',float: 'right',position:'fixed',right:25}} className="border p-3 shadow rounded">
            <h2>Add Your 3 Poll</h2><br/>
            <div>
           {
               rankList.hasOwnProperty(id)&&rankList[id].length>0? rankList[id].map((dish,i)=>{return <h2 key={dish}>{i+1}.{dishes.find(dis=>{return dis.id==dish})?dishes.find(dis=>{return dis.id==dish}).dishName:''} <button className="btn btn-light" onClick={()=>{dispatch(startRemoveDishOfUser({DishId:dish,activeUserId:id}))}}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Crystal_button_cancel.svg/1024px-Crystal_button_cancel.svg.png" alt="Cancel"  style={{width:'25px'}} /></button> </h2>}):<h3>Click On the Image to Poll</h3>
           }
            </div>
            </div>
        </div>
    )
}
export default AddRank