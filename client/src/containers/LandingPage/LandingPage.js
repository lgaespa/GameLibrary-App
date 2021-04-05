import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./LandingPage.css"


function LandingPage() {
    return (
        <div className="landing">
            <p className="desLanding1">Introducing</p>
            <h1 className="titleLanding">GameLibrary</h1>
            <b className="desLanding2">Advanced Game Finder</b>
            <p className="desLanding3">Find the game you want with just one search. Discover new and amazing games.</p>
            <Link to={"/games"}> <button className="landingButton"><b>Start</b></button></Link>
        </div>
    )
}

export default LandingPage
