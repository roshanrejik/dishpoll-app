import React from "react";
const NavBar=(props)=>{
    return(
        <div>
            <button className="btn btn-dark m-1">Home</button>
            <button className="btn btn-dark m-1">Ranking</button>
            
            <button className="btn btn-dark m-1" style={{float:'right'}}>Login</button>
        </div>
    )
}
export default NavBar