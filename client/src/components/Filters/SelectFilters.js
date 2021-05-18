import React from 'react'
import { useDispatch } from 'react-redux'
import { loading } from '../../redux/getGames'
import "./FiltersStyle.css"

const SelectFilters = ({ array }) => {

    const dispatch = useDispatch()

    const filterBy = (type) => {
        dispatch(loading(true))
        if (type == "AZ") array.sort((a, b) => a.name < b.name ? -1 : +(a.name > b.name));
        if (type == "ZA") array.sort((a, b) => a.name > b.name ? -1 : +(a.name < b.name));
        if (type == "RA") array.sort((a, b) => a.rating < b.rating ? -1 : +(a.rating > b.rating));
        if (type == "RD") array.sort((a, b) => a.rating > b.rating ? -1 : +(a.rating < b.rating))
        dispatch(loading(false))
    }

    const handleChange = (e) => {
        if (e.target.value === 'AZ') filterBy("AZ");
        if (e.target.value === 'ZA') filterBy("ZA");
        if (e.target.value === 'RA') filterBy("RA");
        if (e.target.value === 'RD') filterBy("RD");
    }

    return (
        <div>
            <select className="selectFilter" name='select' onChange={handleChange}>
                <option value="" disabled selected >Order by</option>
                <option value='AZ'>Name A-Z</option>
                <option value='ZA'>Name Z-A</option>
                <option value='RA'>Rating ASC</option>
                <option value='RD'>Rating DESC</option>
            </select>
        </div>
    )
}

export default SelectFilters;


