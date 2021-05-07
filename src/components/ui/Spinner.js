import React from 'react';
import spinner from '../../img/spinner.gif';

function Spinner() {
    return (
        <img src={spinner} style ={{margin: 'auto', display: 'block', width: '200px'}} alt = 'Loading'/>
    )
}

export default Spinner;
