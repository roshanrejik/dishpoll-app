import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from "react-redux";
import {startGetDishList} from './action/dishAction'

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(startGetDishList())
  },[])
  return (
    <div className="App m-2">
      <NavBar/>
    </div>
  );
}

export default App;
