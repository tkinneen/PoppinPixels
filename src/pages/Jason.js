import React from 'react'
import BarChart from "../components/BarChart";
//import original from '../pixel_assets/jason/original.png';
//import twoX from '../pixel_assets/jason/twoX.png';
//import fourX from '../pixel_assets/jason/fourX.png';
//import eightX from '../pixel_assets/jason/eightX.png';
import sixteenX from '../pixel_assets/jason/sixteenX.png';
//import thirtytwoX from '../pixel_assets/jason/thirtytwoX.png';
//import sixtyfourX from '../pixel_assets/jason/sixtyfourX.png';

function Jason() {
    let spacing = 1;
    
    let analytics = require('../pixel_assets/jason/analytics.json');
    //console.log(analytics)

    return (
        <div className='jason'>
            <h3 className="goblin_font center pad_sprite_name">Friday the 13th (NES) - Jason Voorhees</h3>
            <p>
                <img className="pad_image" src={sixteenX} style={{marginTop: spacing + 'em'}} alt="jason" />
            </p>
            <BarChart pixelObject={analytics}/>
        </div>
    )
}

export default Jason