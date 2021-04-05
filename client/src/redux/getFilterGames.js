//STATE
const initialState = {
    filteredGames: [],
}

//TYPES
const FILTER = 'FILTER'


//REDUCER
export default function filterReducer(state = initialState, action) {
    switch (action.type) {
        case FILTER:
            return { ...state, filteredGames: action.payload }
        default:
            return state
    }
}

//ACCIONES
export const filterGames = (GamesArray) => async (dispatch) => {

    try {
        dispatch({
            type: FILTER,
            payload: GamesArray
        })

    } catch (error) {
        console.log(error)
    }
}




