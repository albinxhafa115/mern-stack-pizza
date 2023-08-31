import axios from "axios";

// get all classes
export const getAllClasses = () => async dispatch => {

    dispatch({ type: 'GET_CLASSES_REQUEST' })

    try {
        const response = await axios.get('/api/classes/getallclasses')
        console.log(response);
        dispatch({ type: 'GET_CLASSES_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_CLASSES_FAILED', payload: error })
    }
}

// add new class 
export const addClass = (classes) => async dispatch => {

    dispatch({ type: 'ADD_CLASS_REQUEST' })
    try {
        const response = await axios.post('/api/classes/addclass', { classes })
        console.log(response)
        dispatch({ type: 'ADD_CLASS_SUCCESS' })
    } catch (error) {
        dispatch({ type: 'ADD_CLASS_FAILED', payload: error })
    }

}

// get class by id

export const getClassById = (clasid) => async dispatch => {

    dispatch({ type: 'GET_CLASSBYID_REQUEST' })

    try {
        const response = await axios.post('/api/classes/getclassbyid', { clasid })
        console.log(response);
        dispatch({ type: 'GET_CLASSBYID_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_CLASSBYID_FAILED', payload: error })
    }
}

//edit class

export const editClass = (editedclasses) => async dispatch => {

    dispatch({ type: 'EDIT_CLASS_REQUEST' })
    try {
        const response = await axios.post('/api/classes/editclass', { editedclasses })
        console.log(response)
        dispatch({ type: 'EDIT_CLASS_SUCCESS' })
        window.location.href = '/admin/classeslist'
    } catch (error) {
        dispatch({ type: 'EDIT_CLASS_FAILED', payload: error })
    }

}

//delete class

export const deleteClass = (classesid) => async dispatch => {
    try {
        const response = await axios.post('/api/classes/deleteclass', { classesid })
        alert('Class Deleted Successfully ')
        console.log(response);
        window.location.reload()
    } catch (error) {
        alert('Something went wrong')
        console.log(error);
    }
}