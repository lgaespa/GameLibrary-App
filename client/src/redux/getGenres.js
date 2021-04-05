import axios from 'axios';

//STATE
const initialState = {
    genres: [],
}

//TYPES
const GET_GENRES = 'GET_GENRES'


//REDUCER
export default function getGenresReducer(state = initialState, action) {
    switch (action.type) {
        case GET_GENRES:
            console.log(action.payload)
            return {...state, genres: action.payload}
        default:
            return state
    }
}

//ACCIONES
export const getGenres = (array) => async (dispatch) => {
    try {
        dispatch({
            type: GET_GENRES,
            payload: array
        })

    } catch (error) {
        console.log(error)
    }
}

