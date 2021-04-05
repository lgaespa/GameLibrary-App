import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterGames } from "../../redux/getFilterGames";
import {loading} from '../../redux/getGames';

function GenreFilters({array}) {
    const dispatch = useDispatch()

    let genres = useSelector(store => store.getGenres.genres)

    const genreFilter = (array, name) => {
    
      

      var filtered = array.filter(e => e.genre.includes(name))
      if (filtered.length == 0){
          filtered = "noResults"
      }
      if(name == "All") filtered=[];

      dispatch(loading(true))
      dispatch(filterGames(filtered))
      dispatch(loading(false))
    }

    return (
        <div>
            <select className="genresFilter" onChange={(e) => genreFilter(array, e.target.value)} >

                <option value="" disabled selected >Genres</option>
                <option value="All">All</option>

                {
                    genres.map(genre => {
                        return (
                            <option value={genre.name}>{genre.name}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default GenreFilters
