import React from "react";
import Chart from "react-google-charts";
import { useSelector } from "react-redux";
const Graph=()=>{

      const {rankList,dishes}=useSelector(state=>state)


      const result={'Dishes': 'Ranking'}
      for(let i=0;i<Object.values(rankList).length;i++){
          for(let j=0;j<Object.values(rankList)[i].length;j++){
            if(dishes.find(ele=>ele.id==Object.values(rankList)[i][j])?dishes.find(ele=>ele.id==Object.values(rankList)[i][j]).dishName:'')
            {
              result[dishes.find(ele=>ele.id==Object.values(rankList)[i][j]).dishName]=result[dishes.find(ele=>ele.id==Object.values(rankList)[i][j]).dishName]?result[dishes.find(ele=>ele.id==Object.values(rankList)[i][j]).dishName]+10*(3-j):10*(3-j)
            }
        }
      }
    const data1=Object.entries(result)
    data1.sort((a,b)=>b[1]-a[1])
    const showTopThree=data1.slice(1,4)
    return(
      
      <div>
        <div className="border p-5 m-5 shadow rounded">
            <h2 style={{fontFamily:'Cursive'}}>Top Three Rankings</h2>
             <div>
           {
               showTopThree.map((dish,i)=>{return <h3 className="d-inline m-3" key={dish}>{i+1}.{dish[0]}({dish[1]})</h3>})
           }
            </div>
        </div>
      <div className=" m-5 bg-light rounded border shadow box">
      
      {data1.length>1?<Chart
      height={400}
        data={data1}
        chartType="ColumnChart"
        loader={<div>Loading Chart...</div>}
      />:<h2 className="m-2" >Please Add Polls</h2>}
           <div className="card-body rounded box" style={{ backgroundColor: 'black', color: 'white', textAlign: 'center' }}>
                            <div className="card-title" ><h3>Dish Poll Ranking</h3></div>
           </div>
           
    </div>
    </div>
        )
}
export default Graph