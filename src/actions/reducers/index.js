import data from './dataReducer'
import interaction from './interfaceReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    interaction,
    data
})

export default  rootReducer