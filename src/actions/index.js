import {
    BUTTON_SIDEBAR_VISIBILITY,
    SIDEBAR_VISIBILITY,
    MENU_VISIBILITY,
    FILTER_GROUP,
    FETCH_GROUPS,
    SIDEBAR_ITEMS,
    ACTIVE_GROUP_DATA,
    ACTIVE_GROUP_DATA_DEPARTMENT,
    ACTIVE_GROUP_DATA_COUNTRY,
    FETCH_GROUP_DATA_DEPARTMENT,
    FETCH_GROUP_DATA_COUNTRY
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

export const activeGroupData = data => {
    return ({
        type: ACTIVE_GROUP_DATA,
        payload: {
            activeGroupData: data
        }
    })
}

export const fetchGroupsDataDepartment = data => {
    return ({
        type: FETCH_GROUP_DATA_DEPARTMENT,
        payload: {
            fetchGroupsDataDepartment: data
        }
    })
}

export const fetchGroupsDataCountry = data => {
    return ({
        type: FETCH_GROUP_DATA_COUNTRY,
        payload: {
            fetchGroupsDataCountry: data
        }
    })
}

export const activeGroupsDataDepartment = data => {
    return ({
        type: ACTIVE_GROUP_DATA_DEPARTMENT,
        payload: {
            activeGroupsDataDepartment: data
        }
    })
}

export const activeGroupsDataCountry = data => {
    return ({
        type: ACTIVE_GROUP_DATA_COUNTRY,
        payload: {
            activeGroupsDataCountry: data
        }
    })
}

