import React from 'react'
import BarChart from "../components/BarChart";
import pixel_art from '../pixel_assets/golem_large.png';

function Golem() {
    let spacing = 1;
    
    let specs = require('../pixel_assets/golem_results.json');
    console.log(specs)

    return (
        <div className='bison'>
            <h3>Breath of Fire 3 [PSX] - Golem</h3>
            <p>
                <img src={pixel_art} style={{marginTop: spacing + 'em'}} alt="golem" />
            </p>
            <BarChart pixelObject={specs}/>
        </div>
    )
}

export default Golem
