import content from "../actions/services/content";
import groups from "../actions/services/data";

const initialState = {
    ...content,
    ...groups
}

const dataReducer = (state = initialState, action ) => {
    switch ( action.type ) {
        case 'FETCH_GROUPS': {
            return {
                ...state,
            }
        }
        default:
            return state
    }
}

export default dataReducer