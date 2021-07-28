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
            <p className="goblin_font pad_sprite_name">Walker - Mega Man 2 [NES]</p>
            <p>
                <img className="pad_image" src={sixteenX} style={{marginTop: spacing + 'em'}} alt="walker" />
            </p>
            <p className="goblin_font center pad_sprite_name">Analytics: Distribution of uniquely colored pixels in sprite</p>

            <div className="chartBackground pad_chart">
                <BarChart pixelObject={analytics}/>
            </div>
        </div>
    )
}

export default Walker