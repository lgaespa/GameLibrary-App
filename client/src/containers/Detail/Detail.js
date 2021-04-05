import React from 'react'
import { useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from "react";
import axios from 'axios';
import SideBar from '../../components/Sidebar/SideBar';
import GameDetail from '../../components/GameDetail';
import {loading} from '../../redux/getGames';
import SearchBar from '../../components/SearchBar/SearchBar';




function Detail() {

    const dispatch = useDispatch()
    const loaded = useSelector(store => store.getGames.loading)


    let [state, setState] = useState({});

    let { id } = useParams();

    useEffect(() => {
        const getId = async () =>{
            dispatch(loading(true))
            const res = await axios.get(`http://localhost:3001/videogame/${id}`)
            setState(state = res.data[0]);
            dispatch(loading(false))
        }
        getId()
    }, [])


    return (
        <div className={"wrapper"}>

            <div className={"navb"}>
                <b>GameDetail</b>
                <SearchBar />
            </div>

            <div className={"side"}>
                <SideBar />
            </div>


            <div className={"games"}>
                {loaded ? <h1 className="loading">Loading...</h1>
                    :
                    <GameDetail state={state} />}

            </div>

        </div>
    )
}
export default Detail
