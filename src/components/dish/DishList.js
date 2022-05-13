import React,{useState} from "react";
import { useSelector } from "react-redux";
import DishItem from "./DishItem";
const DishList =(props)=>{
    const {dishes}=useSelector(state=>state)
    const [searchKey,setSearchKey]=useState('')
    const [orderBy,setOrderBy]=useState('')
    const handleSearchKey=(e)=>{
        setSearchKey(e.target.value.toLowerCase())
    }
    const handleOrderBy=(e)=>{
        setOrderBy(e.target.value)
    }
    const dataOrder=(orderBy)=>{

        switch(orderBy){
            case 'A-Z':{
                return [].concat(dishes).sort(function(a, b){
                    if(a.dishName < b.dishName) { return -1; }
                    if(a.dishName > b.dishName) { return 1; }
                    return 0;
                });
            }
            case 'Z-A':{
                return [].concat(dishes).sort(function(a, b){
                    if(a.dishName < b.dishName) { return 1; }
                    if(a.dishName > b.dishName) { return -1; }
                    return 0;
                });
            }
            case 'Reverse':{
                return [].concat(dishes).reverse();
            }
            default:return dishes
        }
       }
    return (
        <div  style={{ width: '80%', display: 'inline-block', float: 'left',padding:'1rem' }} className=' border shadow rounded  Padding-left-0 Padding-right-0' >
        <form>
        <div style={{width:'100%'}}>
        <input type='name' value={searchKey} className="form-control m-2" style={{display:'inline-block',width:'60%'}} onChange={handleSearchKey} placeholder='Search By Name ....'/>
        <select value={orderBy} onChange={handleOrderBy} className="form-select  m-2" style={{float: 'right',display:'inline-block',width:'20%'}} >
            <option >  Order By</option>
            <option value='A-Z'>A-Z Order</option>
            <option value='Z-A'>Z-A Order</option>
            <option value='Reverse'>Reverse Order</option>
        </select>
        </div>
         </form>
        
         
        
        <div  className=" row pt-2 text-wrap bd-highlight justify-content-around " style={{width:'100%'}}>
            {
                  dishes.length>0 &&dataOrder(orderBy).filter(dish=>{
                    return dish.dishName.toLowerCase().includes(searchKey)
                }).map(dish=>{return <DishItem key={dish.id} {...dish}/>})
            }
        </div>
        </div>
    )
}
export default DishList