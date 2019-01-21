import content from "../services/content";
import { fromJS } from 'immutable'
import {
    FETCH_GROUPS,
    FILTER_GROUP,
    SIDEBAR_ITEMS,
    ACTIVE_GROUP_DATA
} from "../types"

const initialState = fromJS({
    ...content,
    groups: {
        data: {},
        active: {
            id: "",
            data: {}
        }
    },

})

const dataReducer = (state = initialState, action ) => {
    switch ( action.type ) {
        case FETCH_GROUPS: {
            return state.setIn(['groups', 'data'], action.payload.groups)
        }
        case FILTER_GROUP: {
            return state.setIn(['groups', 'active', 'id'], action.payload.activeGroup)
        }
        case ACTIVE_GROUP_DATA: {
            return state.setIn(['groups', 'active', 'data'], action.payload.activeGroupData)
        }
        case SIDEBAR_ITEMS: {
            return state.setIn(['sidebar', 'items'], action.payload.itemsList)
        }
        default:
            return state
    }
}

export default dataReducer