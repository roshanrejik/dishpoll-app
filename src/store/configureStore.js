import { createStore,combineReducers, applyMiddleware } from "redux";
import usersReducer from '../reducer/usersReducer'
import thunk from "redux-thunk";
const configureStore=()=>{
    const store=createStore(combineReducers({
        users:usersReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore