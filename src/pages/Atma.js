import React from 'react'
import BarChart from "../components/BarChart";
import pixel_art from '../pixel_assets/atma_large.png';

function Atma() {
    let spacing = 5;

    let specs = require('../pixel_assets/atma_results.json');
    console.log(specs)

    return (
        <div className='atma'>
            <h1>Final Fantasy III (SNES) - Atma Weapon</h1>
            <p>
                <img src={pixel_art} style={{marginTop: spacing + 'em'}} alt="atma" />
            </p>
            <BarChart pixelObject={specs}/>
        </div>
    )
}

export default Atma
