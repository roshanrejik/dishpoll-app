import React from "react";
import Chart from "react-google-charts";
import { useSelector } from "react-redux";
const Graph=()=>{
    var data =[
        ['Dishes', 'Ranking'],
        ['New York City, NY', 8175000],
        ['Los Angeles, CA', 3792000],
        ['Chicago, IL', 2695000],
        ['Houston, TX', 2099000],['New York City, NY', 8175000],
        ['Los Angeles, CA', 3792000],
        ['Chicago, IL', 2695000],
        ['Houston, TX', 2099000],['New York City, NY', 8175000],
        ['Los Angeles, CA', 3792000],
        ['Chicago, IL', 2695000],
        ['Houston, TX', 2099000],
        ['Philadelphia, PA', 1526000]
      ]
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

    return(
      
      <div>
      <div className=" m-5 bg-light rounded border shadow box">
      <Chart
      height={400}
        data={data1}
        chartType="ColumnChart"
        loader={<div>Loading Chart...</div>}
      />
           <div className="card-body rounded box" style={{ backgroundColor: 'black', color: 'white', textAlign: 'center' }}>
                            <div className="card-title" ><h3>Dish Poll Ranking</h3></div>
           </div>
           
    </div>
    </div>
        )
}
export default Graph