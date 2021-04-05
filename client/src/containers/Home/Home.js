import React, {useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import SideBar from '../../components/Sidebar/SideBar';
import { saveGames, loading} from '../../redux/getGames';
import { getGenres} from '../../redux/getGenres';

import "./Home.css"
import Games from '../../components/Games/Games';
import SearchBar from '../../components/SearchBar/SearchBar';

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const getVideogames = async () => {
            dispatch(loading(true))
            const res = await axios.get('http://localhost:3001/videogames')
            const res2 = await axios.get('http://localhost:3001/genres')
            dispatch(saveGames(res.data));
            dispatch(getGenres(res2.data))
            dispatch(loading(false))
        }
        getVideogames()
    }, []);

    let allGames = useSelector(store => store.getGames.games)
    let genres = useSelector(store => store.getGenres.genres)


    return (
        <div className={"wrapper"}>

            <div className={"navb"}>
                <b>GameLibrary</b>
                <SearchBar />
            </div>

            <div className={"side"}>
                <SideBar />
            </div>


            <div className={"games"}>
                <Games allGames={allGames}/>
            </div>
         
        </div>
    )
}
export default Home


