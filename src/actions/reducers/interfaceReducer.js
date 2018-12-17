import { fromJS } from 'immutable'

import {
    BUTTON_SIDEBAR_VISIBILITY,
    SIDEBAR_VISIBILITY,
    MENU_VISIBILITY
} from "../types/index"

const initialState = fromJS({
    sidebar: false,
    buttonSidebar: false,
    menu: false
})

const interfaceReducer = (state = initialState, action ) => {
    switch ( action.type ) {
        case BUTTON_SIDEBAR_VISIBILITY: {
            return state.set('buttonSidebar', action.payload.toggleSidebarVisible)
        }
        case SIDEBAR_VISIBILITY: {
            return state.set('sidebar', action.payload.sidebarVisible)
        }
        case MENU_VISIBILITY: {
            return state.set('menu', action.payload.menuVisible)
        }
        default:
            return state
    }
}

export default interfaceReducer