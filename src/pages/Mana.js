import React from 'react'
import BarChart from "../components/BarChart";
import pixel_art from '../pixel_assets/mana_large.png';

function Mana() {
    let spacing = 1;

    let specs = require('../pixel_assets/mana_results.json');
    console.log(specs)

    return (
        <div className='mana'>
            <h3>Secret of Mana (SNES) - Flame Dragon</h3>
            <p>
                <img src={pixel_art} style={{marginTop: spacing + 'em'}} alt="mana" />
            </p>
            <BarChart pixelObject={specs}/>
        </div>
    )
}

export default Mana
