import { createStore,combineReducers, applyMiddleware } from "redux";
import usersReducer from '../reducer/usersReducer'
import thunk from "redux-thunk";
import activeUserReducer from "../reducer/activeUserReducer";
import dishReducer from "../reducer/dishReducer";
const configureStore=()=>{
    const store=createStore(combineReducers({
        users:usersReducer,
        activeUser:activeUserReducer,
        dishes:dishReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore