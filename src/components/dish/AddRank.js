import React  from "react";
import { useSelector } from "react-redux";
const AddRank=(props)=>{
    const {rankList}=useSelector(state=>state)
    const {id}=useSelector(state=>state.activeUser)
    console.log(rankList[id]);
    const {dishes}=useSelector(state=>state)
    return(
        <div>
            <div style={{width:'17%',display:'inline-block',float: 'right',position:'fixed',right:25}} className="border p-3 shadow rounded">
            <h2>Add Your Poll</h2><br/>
            <div>
            {/* {
                rankList[id].length>0&&rankList[id].map((dish,i)=>{return <h2 key={dish}>{i+1}.{dishes.find(dishs=>{return dish==dishs.id})&&dishes.find(dishs=>{return dish==dishs.id}).dishName}</h2>}) */
            }
            </div>
            </div>
        </div>
    )
}
export default AddRank