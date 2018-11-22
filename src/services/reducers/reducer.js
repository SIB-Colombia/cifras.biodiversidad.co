const reducer = (state, action ) => {
    switch ( action.type ) {
        case 'BUTTON_SIDEBAR_VISIBILITY': {
            return {
                ...state,
                buttonSidebar: action.payload.toggleSidebarVisible,
            }
        }
        case 'SIDEBAR_VISIBILITY': {
            return {
                ...state,
                sidebar: action.payload.sidebarVisible
            }
        }
        default:
            return state
    }
}

export default reducer