import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Genres() {

    const [genres, setGenres] = useState([])

    useEffect(() => {
        const fetchData = async() => {
        const res = await axios.get('http://localhost:3001/genres');
        setGenres(res.data);
        }
        fetchData()
    }, [])

    return (
        <div>
            {genres.map(item => (
                <div key={item.id++} className="genreCard">
                    <img className="genreImage" src={item.image} />
                    <h4>{item.name}</h4>
                </div>
            ))
            }
        </div>
    )
}

export default Genres
