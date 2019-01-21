import {
    BUTTON_SIDEBAR_VISIBILITY,
    SIDEBAR_VISIBILITY,
    MENU_VISIBILITY,
    FILTER_GROUP,
    FETCH_GROUPS,
    SIDEBAR_ITEMS,
    ACTIVE_GROUP_DATA
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

export const menuVisibility = visibility => (
    {
        type: MENU_VISIBILITY,
        payload: {
            menuVisible: visibility
        }
    }
)


export const fetchGroupsData = groups => (
    {
        type: FETCH_GROUPS,
        payload: {
            groups: groups
        }
    }

)
export const sidebarItems = items => (
    {
        type: SIDEBAR_ITEMS,
        payload: {
            itemsList: items
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

export const activeGroupData = data => (
    {
        type: ACTIVE_GROUP_DATA,
        payload: {
            activeGroupData: data
        }
    }
)
