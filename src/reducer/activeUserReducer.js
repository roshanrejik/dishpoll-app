const init=JSON.parse(localStorage.getItem('token'))?JSON.parse(localStorage.getItem('token')).activeUser:{}
const activeUserReducer=(state=init,action)=>{
    switch(action.type){
        case 'LOGINUSER':return {...action.payload}
        case 'LOGOUTUSER':return {}
        default:return {...state}
    }
}
export default activeUserReducer
