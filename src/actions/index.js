import {
    BUTTON_SIDEBAR_VISIBILITY,
    SIDEBAR_VISIBILITY,
    FILTER_GROUP,
    FETCH_GROUPS
} from "./types"

export const sidebarVisibility = visibility => (
    {
        type: SIDEBAR_VISIBILITY,
        payload: {
            sidebarVisible: visibility
        }
    }
)

export const buttonSidebarVisibility = visibility => (
    {
        type: BUTTON_SIDEBAR_VISIBILITY,
        payload: {
            toggleSidebarVisible: visibility
        }
    }
)


export const fetchGroups = groups => (
    {
        type: FETCH_GROUPS,
        payload: {
            groups: groups
        }
    }

)

export const filterGroup = activeGroup => (
    {
        type: FILTER_GROUP,
        payload: {
            activeGroup: activeGroup
        }
    }

)
