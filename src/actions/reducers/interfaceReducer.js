import { fromJS } from 'immutable'

import {
    BUTTON_SIDEBAR_VISIBILITY,
    SIDEBAR_VISIBILITY,
    MENU_VISIBILITY,
    SIDEBAR_ITEMS
} from "../types/index"

const initialState = fromJS({
    sidebar: {
        active: false,
        button: false,
        items: {},
    },
    menu: false
})

const interfaceReducer = (state = initialState, action ) => {
    switch ( action.type ) {
        case BUTTON_SIDEBAR_VISIBILITY: {
            return state.setIn(['sidebar', 'button'], action.payload.toggleSidebarVisible)
        }
        case SIDEBAR_VISIBILITY: {
            return state.setIn(['sidebar', 'active'], action.payload.sidebarVisible)
        }
        case SIDEBAR_ITEMS: {
            return state.setIn(['sidebar', 'items'], action.payload.itemsList)
        }
        case MENU_VISIBILITY: {
            return state.set('menu', action.payload.menuVisible)
        }
        default:
            return state
    }
}

export default interfaceReducer