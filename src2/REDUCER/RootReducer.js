import { combineReducers } from 'redux'
import { todoReducer2 } from './todoReducer'



const rootReducer=combineReducers({
    task:todoReducer2
})
export default rootReducer