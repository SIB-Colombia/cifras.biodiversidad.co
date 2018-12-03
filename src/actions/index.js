import {
    BUTTON_SIDEBAR_VISIBILITY,
    SIDEBAR_VISIBILITY,
    GROUPS_LIST
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

export const fetchGroupList = visibility => (
    {
        type: GROUPS_LIST,
        payload: {
            toggleSidebarVisible: visibility
        }
    }

)
