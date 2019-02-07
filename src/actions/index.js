import {
    BUTTON_SIDEBAR_VISIBILITY,
    SIDEBAR_VISIBILITY,
    MENU_VISIBILITY,
    FILTER_GROUP,
    SIDEBAR_ITEMS,
    GENERAL_DATA_COUNTRY,
    GENERAL_DATA_DEPARTMENT,
    ACTIVE_GROUP_DATA_DEPARTMENT,
    ACTIVE_GROUP_DATA_COUNTRY,
    FETCH_GROUP_DATA_DEPARTMENT,
    FETCH_GROUP_DATA_COUNTRY,
    FILTER_TOWN,
    FETCH_TOWNS_DATA,
    ACTIVE_TOWN_DATA,
    ACTIVE_DEPARTMENT_DATA,
    FETCH_COMPANIES_DATA,
    ACTIVE_COMPANY_DATA,
    ACTIVE_COMPANY_TYPE,
    ACTIVE_GROUP_IMAGE
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

export const fetchGeneralDataCountry = data => {
    return ({
        type: GENERAL_DATA_COUNTRY,
        payload: {
            fetchGeneralDataCountry: data
        }
    })
}

export const fetchGeneralDataDepartment = data => {
    return ({
        type: GENERAL_DATA_DEPARTMENT,
        payload: {
            fetchGeneralDataDepartment: data
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

export const filterTown = townId => {
    return ({
        type: FILTER_TOWN,
        payload: {
            filterTown: townId
        }
    })
}

export const fetchTownsData = data => {
    return ({
        type: FETCH_TOWNS_DATA,
        payload: {
            fetchTownsData: data
        }
    })
}

export const activeTownData = data => {
    return ({
        type: ACTIVE_TOWN_DATA,
        payload: {
            activeTownData: data
        }
    })
}

export const activeDepartmentData = data => {
    return ({
        type: ACTIVE_DEPARTMENT_DATA,
        payload: {
            activeDepartmentData: data
        }
    })
}

export const fetchCompaniesData = data => {
    return ({
        type: FETCH_COMPANIES_DATA,
        payload: {
            fetchCompaniesData: data
        }
    })
}

export const setActiveGroupImage = data => {
    return ({
        type: ACTIVE_GROUP_IMAGE,
        payload: {
            setActiveGroupImage: data
        }
    })
}

export const activeCompanyType = data => {
    return ({
        type: ACTIVE_COMPANY_TYPE,
        payload: {
            activeCompanyType: data
        }
    })
}



export const activeCompanyData = data => {
    return ({
        type: ACTIVE_COMPANY_DATA,
        payload: {
            activeCompanyData: data
        }
    })
}




