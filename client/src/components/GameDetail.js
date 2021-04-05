import React from 'react'
import "./GameDetail.css"

const GameDetail = ({state}) => {
    
    var a = 0

    return (
        <div>
            <div id={"bg"}>
                <div id={"wrapper"}>
                    <div id={"container"}>

                        {/* -----Imagen----*/}
                        <div id={"image-container"}>
                            <img id={"image"} src={state.background_image} />
                            <div id={"image-content"}>

                                <img id={"thumbnail"} src={state.background_image} />
                                <div id={"tumb-text"}>
                                    <b >{state.name}</b>
                                </div>
                                <div id={"tumb-rating"} id={state.rating < 3.0 ? "rating-bad" : "rating-good"}>
                                    <b >{state.rating}</b>
                                </div>
                            </div>
                        </div>

                        {/* ---about--- */}
                        <p className={"about"}><b>About</b></p>
                        <p id={"about"}>{state.description}</p>

                        <div id={"column"}>
                            {/* PLATFORMS */}
                            <div >
                                <p className={"titles"}><b>Platforms</b></p>
                                <div className={"columns"}>
                                    {state.platforms ? state.platforms.map(e => <li className={"list"} key={a++}>{e}</li>) : console.log("no")}
                                </div>
                            </div>
                            {/* GENRES */}
                            <div>
                                <p className={"titles"}><b>Genres</b></p>
                                <div className={"columns"}>
                                    {state.genre ? state.genre.map(e => <li className={"list"} key={a++}>{e}</li>) : console.log("no")}
                                </div>
                            </div>
                            {/* RELEASED DATE */}
                            <div>
                                <p className={"titles"}><b>Release</b></p>
                                <p id={"release"}>{state.released}</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}

export default GameDetail
