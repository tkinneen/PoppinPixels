import React from 'react'
import BarChart from "../components/BarChart";
import pixel_art from '../pixel_assets/alien_large.png';

function Alien() {
    let spacing = 1;

    let specs = require('../pixel_assets/alien_results.json');
    console.log(specs)
    
    return (
        <div className='alien'>
            <h3>Aliens vs. Predator (Arcade) - Razer Claws</h3>
            <p>
                <img src={pixel_art} style={{marginTop: spacing + 'em'}} alt="razor" />
            </p>
            <BarChart pixelObject={specs}/>
        </div>
    )
}

//export const SpriteProperties = specs;
export default Alien
