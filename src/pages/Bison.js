import React from 'react'
import BarChart from "../components/BarChart";
import pixel_art from '../pixel_assets/bison_large.png';

function Bison() {
    let spacing = 1;
    
    let specs = require('../pixel_assets/bison_results.json');
    console.log(specs)
    
    return (
        <div className='bison'>
            <h3>Street Fighter Alpha 2 (Aracde) - M. Bison</h3>
            <p>
                <img src={pixel_art} style={{marginTop: spacing + 'em'}} alt="bison" />
            </p>
            <BarChart pixelObject={specs}/>
        </div>
    )
}

export default Bison
