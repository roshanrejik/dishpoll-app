import React from "react";
import { useSelector } from "react-redux";
const ShowUserRankList=(props)=>{
    const {id}=useSelector(state=>state.activeUser)
    const {rankList,dishes}=useSelector(state=>state)
    return(
        <div className="border p-5 m-5 shadow rounded">
            <h2 style={{fontFamily:'Cursive'}}>Your Poll</h2>
             <div>
           {
               rankList.hasOwnProperty(id)&&rankList[id].length>0&& rankList[id].map((dish,i)=>{return <h3 className="d-inline m-3" key={dish}>{i+1}.{dishes.find(dis=>{return dis.id==dish})?dishes.find(dis=>{return dis.id==dish}).dishName:''}</h3>})
           }
            </div>
        </div>
    )
}
export default ShowUserRankList