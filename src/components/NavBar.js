import React,{useEffect, useState} from "react";
import Home from "./Home";
import { Link, Route } from "react-router-dom";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { startLoginUser } from "../action/activeUserAction";
const NavBar=(props)=>{
    const [popUp, setPopUp] = useState(false)
    const [auth,setAuth]=useState(false)
    const dispatch=useDispatch()
    const handlePopUp = () => {
        setPopUp(!popUp)
    }
    const handleLogout=()=>{
        const loc=JSON.parse(localStorage.getItem('token'))
        loc.activeUser={}
        localStorage.setItem('token',JSON.stringify(loc))
        setAuth(false)
    }
    useEffect(()=>{
        if(Object.keys(JSON.parse(localStorage.getItem('token')).activeUser).length>0){
            setAuth(true)
            dispatch(startLoginUser(JSON.parse(localStorage.getItem('token')).activeUser))
        }
    },[])
    return(
       <div>
            <center> <h1 style={{fontFamily:'Cursive'}}><b>Dish Polling</b></h1></center>
           <div>
            <Link to='/'><button className="btn btn-dark m-1">Home</button></Link>
            <Link to='/Ranking'><button className="btn btn-dark m-1">Ranking</button></Link>
            {
                auth?
                <button className="btn btn-dark m-1" style={{float:'right'}} onClick={handleLogout}>Logout</button>
                :<button className="btn btn-dark m-1" style={{float:'right'}} onClick={handlePopUp}>Login</button>
            }
           </div>
            <Route path='/' component={Home} exact />
              <Login popUp={popUp} setAuth={setAuth} handlePopUp={handlePopUp}/>

       </div>
    )
}
export default NavBar