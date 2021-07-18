import React from 'react'
import BarChart from "../components/BarChart";
//import original from '../pixel_assets/zombie/original.png';
//import twoX from '../pixel_assets/zombie/twoX.png';
//import fourX from '../pixel_assets/zombie/fourX.png';
//import eightX from '../pixel_assets/zombie/eightX.png';
import sixteenX from '../pixel_assets/zombie/sixteenX.png';
//import thirtytwoX from '../pixel_assets/zombie/thirtytwoX.png';
//import sixtyfourX from '../pixel_assets/zombie/sixtyfourX.png';

function Zombie() {
    let spacing = 1;
    
    let analytics = require('../pixel_assets/zombie/analytics.json');
    //console.log(analytics)

    return (
        <div className='zombie'>
            <h3>Marvel Vs. Capcom 2 (Arcade) - Zombie</h3>

            <p>
                <img src={sixteenX} style={{marginTop: spacing + 'em'}} alt="zombie" />
            </p>
            <BarChart pixelObject={analytics}/>
        </div>
    )
}

export default Zombie