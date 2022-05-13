import axios from "axios"

export const startGetDishList=()=>{
    return (dispatch)=>{
        axios.get('https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json')
        .then(response=>{
            const dishList=response.data
            dispatch(setDishList(dishList))
        })
        .catch(err=>console.log(err.message))
    }
}
 const setDishList=(dishList)=>{
    return {
        type:'SETDISHLIST',payload:dishList
    }
 }