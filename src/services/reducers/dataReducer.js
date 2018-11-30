import content from "../../content";
import groups from "../../data";

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