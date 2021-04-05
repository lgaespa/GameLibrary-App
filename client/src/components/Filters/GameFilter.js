import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterGames } from "../../redux/getFilterGames";
import { loading } from '../../redux/getGames';

function GameFilter({ array }) {

    const dispatch = useDispatch()

    const gameFilter = (array, type) => {
        var filtered;
        if (type == "added") {
            filtered = array.filter(e => typeof e.id === 'string')
        }
        if (type == "existing") {
            filtered = array.filter(e => typeof e.id === 'number')
        }
        if (filtered.length == 0) {
            filtered = "noResults"
        }
        dispatch(loading(true))
        dispatch(filterGames(filtered))
        dispatch(loading(false))
    }

    return (
        <div>
            <select className="gamesFilter" onChange={(e) => gameFilter(array, e.target.value)} >
                <option value="" disabled selected >Creator</option>
                <option value="added" >Added Games</option>
                <option value="existing" >Existing Games</option>
            </select>
        </div>
    )
}

export default GameFilter
