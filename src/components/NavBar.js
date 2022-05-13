import React from "react";
import Home from "./Home";
import { Link, Route } from "react-router-dom";
const NavBar=(props)=>{
    return(
       <div>
            <center> <h1 style={{fontFamily:'Cursive'}}><b>Dish Polling</b></h1></center>
           <div>
            <Link to='/'><button className="btn btn-dark m-1">Home</button></Link>
            <Link to='/Ranking'><button className="btn btn-dark m-1">Ranking</button></Link>
            <Link to='/Login'><button className="btn btn-dark m-1" style={{float:'right'}}>Login</button></Link>
           </div>
            <Route path='/' component={Home} exact />
       </div>
    )
}
export default NavBar