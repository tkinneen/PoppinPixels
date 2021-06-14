import React from 'react'
import BarChart from "../components/BarChart";
import pixel_art from '../pixel_assets/triclyde_large.png';

function Triclyde() {
    let spacing = 1;
    
    let specs = require('../pixel_assets/triclyde_results.json');
    console.log(specs)

    return (
        <div className='triclyde'>
            <h3>Super Mario Bros. 2 (NES) - Triclyde</h3>
            <p>
                <img src={pixel_art} style={{marginTop: spacing + 'em'}} alt="triclyde" />
            </p>
            <BarChart pixelObject={specs}/>
        </div>
    )
}

export default Triclyde
