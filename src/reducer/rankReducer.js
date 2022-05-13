const init=JSON.parse(localStorage.getItem('token'))?JSON.parse(localStorage.getItem('token')).rankList:{}
const rankReducer=(state=init,action)=>{
    switch(action.type){
        case 'ADDRANK':{
            if(state[action.payload.activeUserId]){
                state[action.payload.activeUserId]=[action.payload.DishId,...state[action.payload.activeUserId]]
            }else{
                state[action.payload.activeUserId]=[action.payload.DishId]
            }
            return {...state}
        }
        default:return {...state}
    }
}
export default rankReducer
