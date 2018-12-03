import {
    BUTTON_SIDEBAR_VISIBILITY,
    SIDEBAR_VISIBILITY
} from "../actions/types"

const initialState = {
    sidebar: true,
    buttonSidebar: false,
}

const interfaceReducer = (state = initialState, action ) => {
    switch ( action.type ) {
        case BUTTON_SIDEBAR_VISIBILITY: {
            return {
                ...state,
                buttonSidebar: action.payload.toggleSidebarVisible,
            }
        }
        case SIDEBAR_VISIBILITY: {
            return {
                ...state,
                sidebar: action.payload.sidebarVisible
            }
        }
        default:
            return state
    }
}

export default interfaceReducer