import content from "../services/content";
import { fromJS } from 'immutable'
import {
    FILTER_GROUP,
    SIDEBAR_ITEMS,
    GENERAL_DATA_COUNTRY,
    GENERAL_DATA_DEPARTMENT,
    ACTIVE_GROUP_DATA_COUNTRY,
    ACTIVE_GROUP_DATA_DEPARTMENT,
    FETCH_GROUP_DATA_COUNTRY,
    FETCH_GROUP_DATA_DEPARTMENT,
    FILTER_TOWN,
    FETCH_TOWNS_DATA,
    ACTIVE_TOWN_DATA,
    ACTIVE_DEPARTMENT_DATA,
    FETCH_COMPANIES_DATA
} from "../types"

const initialState = fromJS({
    ...content,
    general: {
        country: {},
        department: {}
    },
    groups: {
        data: {
            country: {},
            department: {}
        },
        active: {
            item: {},
            data: {
                country: {},
                department: {}
            },
        }
    },
    geo: {
        data: {
            department: {},
            towns: {}
        },
        active: {
            item: {},
            data: {
                department: {},
                town: {}
            },
        }
    },
    companies: {
        data: {
            companies: {},
        },
        active: {
            type: {},
            companies: {}
        }
    }

})

const dataReducer = (state = initialState, action ) => {
    switch ( action.type ) {
        case SIDEBAR_ITEMS: {
            return state.setIn(['sidebar', 'items'], action.payload.itemsList)
        }
        case FILTER_GROUP: {
            return state.setIn(['groups', 'active', 'item'], action.payload.activeGroup)
        }
        case GENERAL_DATA_COUNTRY: {
            return state.setIn(['general', 'country'], action.payload.fetchGeneralDataCountry)
        }
        case GENERAL_DATA_DEPARTMENT: {
            return state.setIn(['general', 'department'], action.payload.fetchGeneralDataDepartment)
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
        case FILTER_TOWN: {
            return state.setIn(['geo', 'active', 'item'], action.payload.filterTown)
        }
        case FETCH_TOWNS_DATA: {
            return state.setIn(['geo', 'data', 'towns'], action.payload.fetchTownsData)
        }
        case ACTIVE_TOWN_DATA: {
            return state.setIn(['geo', 'active', 'data', 'town'], action.payload.activeTownData)
        }
        case ACTIVE_DEPARTMENT_DATA: {
            return state.setIn(['geo', 'active', 'data', 'department'], action.payload.activeDepartmentData)
        }
        case FETCH_COMPANIES_DATA: {
            return state.setIn(['companies', 'data', 'companies'], action.payload.fetchCompaniesData)
        }

        default:
            return state
    }
}

export default dataReducer