import React from 'react'
import "./Browse.css"
import Fillter from "../fillter/Fillter";

function Browse() {
    return (
        <div className="browse">
            <h3>Browse</h3>


        <div className="browse__fillter">
            <Fillter title="Sort By"/>
            <Fillter title="Genre"/>
            <Fillter title="Season" />
            <Fillter title="Status" />
            <Fillter title="Year"/>
            <Fillter title="Type"/>
        </div>
       
        </div>
    )
}

export default Browse;
