import { combineReducers } from "redux"
import authReducer from "../redux/reducers/authReducer"
const rootReducer = combineReducers({
    authReducer,
})

export default rootReducer