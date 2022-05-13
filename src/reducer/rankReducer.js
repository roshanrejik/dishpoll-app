const init=JSON.parse(localStorage.getItem('token'))?JSON.parse(localStorage.getItem('token')).rankList:{}
const rankReducer=(state=init,action)=>{
    switch(action.type){
        default:return {...state}
    }
}
export default rankReducer
