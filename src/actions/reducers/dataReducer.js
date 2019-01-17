import content from "../services/content";
import { fromJS } from 'immutable'
import {
    FETCH_GROUPS,
    FILTER_GROUP,
    FETCH_DEPARTMENT_DATA
} from "../types/index"

const initialState = fromJS({
    ...content,
    department: {
        data: {},
        active: ""
    },
    groups: {
        data: {},
        active: ""
    }
})

const dataReducer = (state = initialState, action ) => {
    switch ( action.type ) {
        case FETCH_GROUPS: {
            return state.setIn(['groups', 'data'], action.payload.groups)
        }
        case FETCH_DEPARTMENT_DATA: {
            return state.setIn(['department', 'data'], action.payload.departmentData)
        }
        case FILTER_GROUP: {
            return state.setIn(['groups', 'active'], action.payload.activeGroup)
        }
        default:
            return state
    }
}

export default dataReducer