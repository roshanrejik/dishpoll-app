import React from "react";
import Graph from "./Graph";
import ShowUserRankList from "./ShowUserRankList";
const Ranking =(props)=>{
    return(
        <div>
            <ShowUserRankList/>
            <Graph/>
        </div>
    )
}
export default Ranking