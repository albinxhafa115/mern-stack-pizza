export const getAllProfsReducer = (state = { profs: [] }, action) => {

    switch (action.type) {
        case 'GET_PROFS_REQUEST': return {
            loading: true,
            ...state
        }
        case 'GET_PROFS_SUCCESS': return {
            loading: false,
            profs: action.payload
        }
        case 'GET_PROFS_FAILED': return {
            error: action.payload,
            loading: false
        }
        default: return state
    }

}

export const addProfReducer = (state = {}, action) => {

    switch (action.type) {
        case 'ADD_PROF_REQUEST': return {
            loading: true,
            ...state
        }
        case 'ADD_PROF_SUCCESS': return {
            loading: false,
            success: true,
        }
        case 'ADD_PROF_FAILED': return {
            error: action.payload,
            loading: false
        }
        default: return state
    }

}

export const getProfByIdReducer = (state = {}, action) => {

    switch (action.type) {
        case 'GET_PROFBYID_REQUEST': return {
            loading: true,
            ...state
        }
        case 'GET_PROFBYID_SUCCESS': return {
            loading: false,
            prof: action.payload
        }
        case 'GET_PROFBYID_FAILED': return {
            error: action.payload,
            loading: false
        }
        default: return state
    }

}

export const editProfReducer = (state = {}, action) => {

    switch (action.type) {
        case 'EDIT_PROF_REQUEST': return {
            editloading: true,
            ...state
        }
        case 'EDIT_PROF_SUCCESS': return {
            editloading: false,
            editsuccess: true,
        }
        case 'EDIT_PROF_FAILED': return {
            editerror: action.payload,
            editloading: false
        }
        default: return state
    }

}