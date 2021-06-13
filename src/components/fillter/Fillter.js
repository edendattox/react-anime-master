import React from 'react';
import "./Fillter.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Fillter({title}) {
    return (
        <div className="fillter">
            <h3>{title}</h3>
            <ExpandMoreIcon className="dropdown"/>
        </div>
    )
}

export default Fillter;
