import React from 'react'
import BarChart from "../components/BarChart";
//import original from '../pixel_assets/walker/original.png';
//import twoX from '../pixel_assets/walker/twoX.png';
//import fourX from '../pixel_assets/walker/fourX.png';
//import eightX from '../pixel_assets/walker/eightX.png';
import sixteenX from '../pixel_assets/walker/sixteenX.png';
//import thirtytwoX from '../pixel_assets/walker/thirtytwoX.png';
//import sixtyfourX from '../pixel_assets/walker/sixtyfourX.png';

function Walker() {
    let spacing = 1;
    
    let analytics = require('../pixel_assets/walker/analytics.json');
    //console.log(analytics)

    return (
        <div className='walker'>
            <h3>Mega Man 2 (NES) - Walker</h3>

            <p>
                <img src={sixteenX} style={{marginTop: spacing + 'em'}} alt="walker" />
            </p>
            <BarChart pixelObject={analytics}/>
        </div>
    )
}

export default Walker