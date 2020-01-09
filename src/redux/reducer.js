import {combineReducers} from 'redux'

function prospect(state={}, action){    
    switch ( action.type ) {
        case 'ADD_PROSPECT': return [state, action.prospect]

        default: return state
    }  
}

const rootReducer = combineReducers({prospect})
export default rootReducer;