import content from "../services/content";
import { fromJS } from 'immutable'
import {
    FETCH_GROUPS,
    FILTER_GROUP,
    SIDEBAR_ITEMS,
    ACTIVE_GROUP_DATA,
    ACTIVE_GROUP_DATA_DEPARTMENT,
    ACTIVE_GROUP_DATA_COUNTRY, FETCH_GROUP_DATA_DEPARTMENT, FETCH_GROUP_DATA_COUNTRY
} from "../types"

const initialState = fromJS({
    ...content,
    groups: {
        data: {
            department: {},
            country: {}
        },
        active: {
            id: "",
            data: {
                department: {},
                country: {}
            },
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
        case FETCH_GROUP_DATA_DEPARTMENT: {
            return state.setIn(['groups', 'data', 'department'], action.payload.fetchGroupsDataDepartment)
        }
        case FETCH_GROUP_DATA_COUNTRY: {
            return state.setIn(['groups', 'data', 'country'], action.payload.fetchGroupsDataCountry)
        }
        case ACTIVE_GROUP_DATA_DEPARTMENT: {
            return state.setIn(['groups', 'active', 'data', 'department'], action.payload.activeGroupsDataDepartment)
        }
        case ACTIVE_GROUP_DATA_COUNTRY: {
            return state.setIn(['groups', 'active', 'data', 'country'], action.payload.activeGroupsDataCountry)
        }
        case SIDEBAR_ITEMS: {
            return state.setIn(['sidebar', 'items'], action.payload.itemsList)
        }
        default:
            return state
    }
}

export default dataReducer