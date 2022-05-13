import React,{useState} from "react";
import { useSelector } from "react-redux";
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
        <div  style={{ width: '75%', display: 'inline-block', float: 'left',padding:'1rem' }} className=' border shadow rounded  Padding-left-0 Padding-right-0' >
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
                 dataOrder(orderBy).filter(dish=>{
                    return dish.dishName.toLowerCase().includes(searchKey)
                }).map(({id,image,dishName,description},i)=>{
                    return(
                        <div className="card mt-2 p-2 bd-highlight border shadow rounded" style={{ width: '16rem' }} key={id}>
                        <img className="card-img-left pt-2"  src={`https://source.unsplash.com/random/300x250?sig=${id}`} alt='img'/>
                        <div className="card-body ">
                            <h4 className="card-title">Name : {dishName}</h4>
                            <h6 className="card-title"><b>Description :</b> {description}</h6>
                        </div>
                    </div>
                        )
                })
            }
        </div>
        </div>
    )
}
export default DishList