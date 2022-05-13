import React  from "react";
import { useSelector } from "react-redux";
const AddRank=(props)=>{
    const {rankList}=useSelector(state=>state)
    const {id}=useSelector(state=>state.activeUser)
    console.log(rankList[id]);
    return(
        <div>
            <div style={{width:'17%',display:'inline-block',float: 'right',position:'fixed',right:25}} className="border p-3 shadow rounded">
            <h2>Add Your Poll</h2><br/>
            </div>
        </div>
    )
}
export default AddRank