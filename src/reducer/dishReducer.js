const init=[]
const dishReducer=(state=init,action)=>{
    switch(action.type){
        case 'SETDISHLIST':return [...action.payload]
        default:return [...state]
    }
}
export default dishReducer