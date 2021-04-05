import React from 'react'
import axios from "axios"
import './FormGame.css'
import back from "./bgPost.jpg"
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router';


function FormGame() {

    const genres = useSelector(store => store.getGenres.genres)
    const history = useHistory()


    const [input, setInput] = React.useState({
        name: '',
        description: '',
        genres: [],
        platforms: [],
    })

    function handleChange(e) {
        if (e.target.name === 'platforms') {
            setInput({
                ...input,
                [e.target.name]: Array.from(e.target.selectedOptions, (option) => Number(option.value))
            })
        } else {
            setInput({
                ...input,
                [e.target.name]: e.target.value
            })
        }
    };

    function handleChangeCheck(e) {
        if (e.target.name === "genres" & e.target.checked) {
            input.genres.push(+e.target.value)
        }

        if (e.target.name !== "genres" & e.target.checked) {
            input.platforms.push(e.target.value)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        const post = async () => {
            console.log(input)
            await axios.post(`http://localhost:3001/videogame/`, input)
            history.push('/games')
        }
        post()
    }

    return (
        <div className="addWrapper">

            <div className="pic">
                <img className="pic2" src={back} />
            </div>

            <form className="form" onSubmit={e => handleSubmit(e)} >

                <h2 className="formTitle">Add Game</h2>
                <div className="inputs1">
                    <input className="inputName" name='name' type='text' placeholder="Name" value={input.name} required onChange={handleChange} />

                    <label >Release</label>
                    <input className="inputDate" type="date" name="releaseDate" value={input.releaseDate} onChange={handleChange} />

                    <label >Rating</label>
                    <input className="selectRating" type='number' min='0' max='5' step='0.1' name='rating' required onChange={handleChange} />
                </div>

                <div className="inputs2">
                    <b className="titleDes">Description</b>
                    <textarea className="inputDesc" type="text" name="description" value={input.description} required onChange={handleChange} />
                </div>

                <div className="formContainer">

                    <div className="genreContainer">
                        <b className="titleG">Select Genres</b>
                        <div className="genresForm">
                            {
                                genres?.map((e) => {
                                    return (
                                        <label key={e.id}>{e.name}<input type="checkbox" name="genres" onChange={handleChangeCheck} className="cbox1" value={e.id}></input></label>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="platForm">
                        <b className={"title"}>Select Platforms</b>
                        <div>
                            <label>PC<input type="checkbox" name="platforms" onChange={handleChangeCheck} className="cbox1" value="PC"></input></label>
                            <label>PlayStation<input type="checkbox" name="platforms" onChange={handleChangeCheck} className="cbox1" value="PlayStation"></input></label>
                            <label>Xbox<input type="checkbox" name="platforms" onChange={handleChangeCheck} className="cbox1" value="Xbox"></input></label>
                            <label>iOS<input type="checkbox" name="platforms" onChange={handleChangeCheck} className="cbox1" value="iOS"></input></label>
                            <label>Android<input type="checkbox" name="platforms" onChange={handleChangeCheck} className="cbox1" value="Android"></input></label>
                            <label>Apple Mac<input type="checkbox" name="platforms" onChange={handleChangeCheck} className="cbox1" value="Apple Mac"></input></label>
                            <label>Linux<input type="checkbox" name="platforms" onChange={handleChangeCheck} className="cbox1" value="Linux"></input></label>
                            <label>Nintendo<input type="checkbox" name="platforms" onChange={handleChangeCheck} className="cbox1" value="Nintendo"></input></label>
                            <label>Web<input type="checkbox" name="platforms" onChange={handleChangeCheck} className="cbox1" value="Web"></input></label>
                        </div>
                    </div>
                </div>

                <div className="submitButton">
                    <button className="buttonForm" type='submit' >SUBMIT</button>
                </div>



            </form>
        </div >
    )
}


export default FormGame
