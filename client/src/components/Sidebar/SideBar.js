import React from 'react'
import './SideBar.css'
import { IconContext } from "react-icons";
import { RiHome2Fill } from "react-icons/ri";
import { MdLibraryAdd } from "react-icons/md";
import { BsCollectionFill } from "react-icons/bs";
import { BsFillGridFill } from "react-icons/bs";


import { Link } from 'react-router-dom';

function SideBar() {
    return (
        <IconContext.Provider value={{ color: 'white', size: '24px', style: { verticalAlign: 'middle' } }}>
            <div className="sidebar">
                <div className="wrapicon"><Link className="sideLink" to={"/games"}><RiHome2Fill /><p className="content">HOME</p></Link></div>
                <div className="wrapicon"><Link className="sideLink" to={"/genres"}><BsFillGridFill /><p className="content">GENRES</p></Link></div>
                <div className="wrapicon"><Link className="sideLink" to={"/add"}><MdLibraryAdd /><p className="content">ADD GAME</p></Link></div>
                <div className="wrapicon"><Link className="sideLink" to={"/games"}><BsCollectionFill /><p className="content">MY GAMES</p></Link></div>
            </div>
        </IconContext.Provider >
    )
}

export default SideBar




