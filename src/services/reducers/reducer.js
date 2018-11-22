const reducer = (state, action ) => {
    switch ( action.type ) {
        case 'TOOGLE_SIDEBAR': {
            //action.payload.sidebarVisible
            return {
                ...state,
                sidebarVisibility: {
                    button: action.payload.toggleSidebarVisible,
                    sidebar: action.payload.sidebarVisible
                }
            }
        }
        default:
            return state

    }
}

export default reducer