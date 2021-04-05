import axios from 'axios';

//STATE
const initialState = {
    games: [],
    gamesCopy: [],
    loading: false
}

//TYPES
const SAVE_GAMES = 'SAVE_GAMES'
const LOADING = 'LOADING'


//REDUCER
export default function getGameReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_GAMES:
            return {...state, games: action.payload, gamesCopy: action.payload}
        case LOADING:
            return{...state, loading: action.payload}
        default:
            return state
    }
}

//ACCIONES
export const saveGames = (GamesArray) => async (dispatch) => {

    try {
        // const res = await axios.get('http://localhost:3001/videogames')
        dispatch({
            type: SAVE_GAMES,
            payload: GamesArray
        })

    } catch (error) {
        console.log(error)
    }
}

export const loading = (state)=>{
    return{
        type: 'LOADING',
        payload: state
    }
}

