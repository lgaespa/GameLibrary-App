import React from 'react'
import "./GameCard.css";
import { Link } from "react-router-dom";

var a = 0;

export const GameCard = ({ item }) => {

    return (
        <div className={"card"}>
            <Link className={"link"} to={`/games/${item.id}`}>
                <div className="wrap">
                    <img className="imagen" src={item.background_image} />
                    <h4 className="span2">{item.name}</h4>
                </div>

                <div className="genres">
                    {item.genre.map(e => <li className={"list2"} key={a++}>{e}</li>)}
                </div>
            </Link>
        </div>


    )
}

{/* <Link to={`/games/${id}`}> <h3>{game.name}</h3></Link> */ }


