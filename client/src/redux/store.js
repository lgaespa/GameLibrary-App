import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

//siempre en store, llamar a todos los reducers
import getGameReducer from "./getGames";
import getGenresReducer from "./getGenres"
import filterReducer from "./getFilterGames"

//combinamos los reducers
const rootReducer = combineReducers({
    getGames : getGameReducer,
    getGenres: getGenresReducer,
    filterReducer : filterReducer
})

//verifica si tenemos la extension, si no usa compose
const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//exportamos la función
export default function generateStore(){
   const store = createStore(rootReducer, composeEnhacers(applyMiddleware(thunk)))
   return store;
}
//createStore, recibe los reducers combinados, el composeEnhacers, que recibe un middleware, en este caso, thunk
