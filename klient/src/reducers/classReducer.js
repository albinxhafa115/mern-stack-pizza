


// get all classes Reducer
export const getAllClassesReducer = (state = { classes: [] }, action) => {

    switch (action.type) {
        case 'GET_CLASSES_REQUEST': return {
            loading: true,
            ...state
        }
        case 'GET_CLASSES_SUCCESS': return {
            loading: false,
            classes: action.payload
        }
        case 'GET_CLASSES_FAILED': return {
            error: action.payload,
            loading: false
        }
        default: return state
    }

}
// add new class Reducer
export const addClassReducer = (state = {}, action) => {

    switch (action.type) {
        case 'ADD_CLASS_REQUEST': return {
            loading: true,
            ...state
        }
        case 'ADD_CLASS_SUCCESS': return {
            loading: false,
            success: true,
        }
        case 'ADD_CLASS_FAILED': return {
            error: action.payload,
            loading: false
        }
        default: return state
    }

}
// get class by id Reducer
export const getClassByIdReducer = (state = {}, action) => {

    switch (action.type) {
        case 'GET_CLASSBYID_REQUEST': return {
            loading: true,
            ...state
        }
        case 'GET_CLASSBYID_SUCCESS': return {
            loading: false,
            classes: action.payload
        }
        case 'GET_CLASSBYID_FAILED': return {
            error: action.payload,
            loading: false
        }
        default: return state
    }

}
//edit class Reducer 
export const editClassReducer = (state = {}, action) => {

    switch (action.type) {
        case 'EDIT_CLASS_REQUEST': return {
            editloading: true,
            ...state
        }
        case 'EDIT_CLASS_SUCCESS': return {
            editloading: false,
            editsuccess: true,
        }
        case 'EDIT_CLASS_FAILED': return {
            editerror: action.payload,
            editloading: false
        }
        default: return state
    }

}

//delete class Reducer