import content from "../services/content";

const initialState = {
    ...content,
    groups: {
        list: [],
        active: ""
    }
}

const filterGroup = (state = initialState, action ) => {
    switch ( action.type ) {
        case 'FILTER_GROUP': {
            return {
                ...state,
                groups: {
                    active: action.payload.activeGroup
                }
            }
        }
        default:
            return state
    }
}

export default filterGroup