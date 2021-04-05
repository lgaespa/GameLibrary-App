import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SideBar from '../../components/Sidebar/SideBar';

import FormGame from '../../components/AddGame/FormGame';

import "./AddGame.css"


const AddGame = () => {

    const dispatch = useDispatch()

    let allGames = useSelector(store => store.getGames.games)
    let genres = useSelector(store => store.getGenres.genres)


    return (
        <div className={"wrapper2"}>

            <div className={"side2"}>
                <SideBar />
            </div>

            <div className={"addNewGame"}>
               <FormGame/>
            </div>
         
        </div>
    )
}
export default AddGame


