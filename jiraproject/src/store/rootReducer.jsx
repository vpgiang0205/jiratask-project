import { combineReducers } from "redux"
import authReducer from "../redux/reducers/authReducer"
import projectReducer from "../redux/reducers/projectReducer"

const rootReducer = combineReducers({
    authReducer,
    projectReducer
})

export default rootReducer