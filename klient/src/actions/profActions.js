import axios from "axios";

// get all profs
export const getAllProfs = () => async dispatch => {

    dispatch({ type: 'GET_PROFS_REQUEST' })

    try {
        const response = await axios.get('/api/profs/getallprofs')
        console.log(response);
        dispatch({ type: 'GET_PROFS_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_PROFS_FAILED', payload: error })
    }
}
 
// add new prof
export const addProf = (profData, selectedClass) => async (dispatch) => {
    dispatch({ type: 'ADD_PROF_REQUEST' });

    try {
        const response = await axios.post('/api/profs/addprof', {
            prof: profData,
            selectedClassId: selectedClass
        });

        console.log(response);
        dispatch({ type: 'ADD_PROF_SUCCESS' });
    } catch (error) {
        dispatch({ type: 'ADD_PROF_FAILED', payload: error });
    }
};



// get prof by id

export const getProfById = (profid) => async dispatch => {

    dispatch({ type: 'GET_PROFBYID_REQUEST' })

    try {
        const response = await axios.post('/api/profs/getprofbyid', { profid })
        console.log(response);
        dispatch({ type: 'GET_PROFBYID_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_PROFBYID_FAILED', payload: error })
    }
}

//edit prof

export const editProf = (editedprof) => async dispatch => {

    dispatch({ type: 'EDIT_PROF_REQUEST' })
    try { 
        const response = await axios.post('/api/profs/editprof', { editedprof })
        console.log(response)
        dispatch({ type: 'EDIT_PROF_SUCCESS' })
        window.location.href = '/admin/profslist'
    } catch (error) {
        dispatch({ type: 'EDIT_PROF_FAILED', payload: error })
    }

}

//delete prof

export const deleteProf = (profid) => async dispatch => {
    try {
        const response = await axios.post('/api/profs/deleteprof', { profid })
        alert('Prof Deleted Successfully ')
        console.log(response);
        window.location.reload()
    } catch (error) {
        alert('Something went wrong')
        console.log(error);
    }
}