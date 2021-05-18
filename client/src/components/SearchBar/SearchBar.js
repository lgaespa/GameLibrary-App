import React from 'react'
import { useDispatch} from "react-redux"
import { filterGames } from "../../redux/getFilterGames"
import axios from "axios"
import { loading } from '../../redux/getGames';
import "./SearchBar.css"
import { useHistory } from 'react-router';


function SearchBar() {

    const dispatch = useDispatch()
    const history = useHistory()

    const handleInput = (e) => {
        e.preventDefault();

        if (e.key === 'Enter') {
            const getSearch = async () => {
                dispatch(loading(true))
                const res = await axios.get(`http://localhost:3001/videogames?name=${e.target.value}`)
                dispatch(filterGames(res.data))
                e.target.value = ""
                dispatch(loading(false))
                history.push('/games')
            }
            getSearch()
        }
    }

    return (
        <input type="text" name="search" x className="sBar" placeholder="Search " onKeyUp={(e) => handleInput(e)} />
    )
}

export default SearchBar
