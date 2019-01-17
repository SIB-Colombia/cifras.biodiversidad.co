import {
    BUTTON_SIDEBAR_VISIBILITY,
    SIDEBAR_VISIBILITY,
    MENU_VISIBILITY,
    FILTER_GROUP,
    FETCH_GROUPS,
    FETCH_DEPARTMENT_DATA
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

export const fetchDepartmentData = data => (
    {
        type: FETCH_DEPARTMENT_DATA,
        payload: {
            departmentData: data
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
