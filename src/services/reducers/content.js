const sidebar = ( state, action ) => {
    switch ( action.type ) {
        case 'TOOGLE_SIDEBAR': {
            return {
                ...state
            }
        }
        default:
            return state

    }
}

export default sidebar