import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from "../Pagination/Pagination";
import { GameCard } from '../GameCard/GameCard';
import SelectFilters from '../Filters/SelectFilters';
import GenreFilters from '../Filters/GenreFilters';
import "./Games.css"
import GameFilter from '../Filters/GameFilter';

const Games = ({ allGames }) => {

    //STORE
    const loading = useSelector(store => store.getGames.loading)
    const filter = useSelector(store => store.filterReducer.filteredGames)
    console.log("games:" + filter)

    //STATES
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage] = useState(16);

    //PAGINATION
    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = allGames.slice(indexOfFirstGame, indexOfLastGame);
    const currentFilter = filter.slice(indexOfFirstGame, indexOfLastGame);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    var a = 0;

    if (loading) {
        return (
            <h1 className="loading">Loading...</h1>
        )
    } else if (filter.length > 0) {
        return (
            <div className={"gamesWrapper"}>
                {filter == "noResults" ? <div className="gamesGrid"><h1 className="loading">No Results...</h1></div>
                    :
                    <div className={"gamesGrid"}>
                        {
                            currentFilter.map(item => (
                                <div key={a++}>
                                    <GameCard item={item} />
                                </div>
                            ))
                        }
                    </div>
                }
                <div className="pagNums">

                    <div id="filterButtons">
                        <SelectFilters array={filter} />
                        <GenreFilters array={allGames} />
                        <GameFilter array={allGames} />
                    </div>

                    <div id="pagination">
                        <Pagination
                            postsPerPage={gamesPerPage}
                            totalPosts={filter.length}
                            paginate={paginate}
                        />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={"gamesWrapper"}>
            <div className={"gamesGrid"}>
                {
                    currentGames.map(item => (
                        <div key={a++}>
                            <GameCard item={item} />
                        </div>
                    ))
                }
            </div>
            <div className="pagNums">

                <div id="filterButtons">
                    <SelectFilters array={allGames} />
                    <GenreFilters array={allGames} />
                    <GameFilter array={allGames} />
                </div>

                <div id="pagination">
                    <Pagination
                        postsPerPage={gamesPerPage}
                        totalPosts={allGames.length}
                        paginate={paginate}
                    />
                </div>
            </div>
        </div>

    )
}
export default Games


