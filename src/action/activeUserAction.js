
export const startLoginUser=(user)=>{
    return {
        type:'LOGINUSER',payload:user
    }
 }
 
export const startLogOutUser=()=>{
    return {
        type:'LOGOUTUSER'
    }
 }