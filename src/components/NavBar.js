import React,{useEffect, useState} from "react";
import Home from "./Home";
import { Link, Route } from "react-router-dom";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { startLoginUser,startLogOutUser } from "../action/activeUserAction";
import Ranking from "./ranking/Ranking";
const NavBar=(props)=>{
    const [popUp, setPopUp] = useState(false)
    const [auth,setAuth]=useState(false)
    const dispatch=useDispatch()
    const handlePopUp = () => {
        setPopUp(!popUp)
    }
    const handleLogout=()=>{
        dispatch(startLogOutUser())
        setAuth(false)
    }
    useEffect(()=>{
        if(localStorage.getItem('token')){
            if(Object.keys(JSON.parse(localStorage.getItem('token')).activeUser).length>0){
                setAuth(true)
                dispatch(startLoginUser(JSON.parse(localStorage.getItem('token')).activeUser))
            }
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
            <Route path='/'  exact ><Home/></Route>
            <Route path='/Ranking'  exact ><Ranking/></Route>
              <Login popUp={popUp} setAuth={setAuth} handlePopUp={handlePopUp}/>

       </div>
    )
}
export default NavBar