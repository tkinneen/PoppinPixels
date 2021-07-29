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
            <p className="goblin_font pad_sprite_name">Zombie - Marvel Vs. Capcom 2  [Arcade]</p>
            <p>
                <img className="pad_image" src={sixteenX} style={{marginTop: spacing + 'em'}} alt="zombie" />
            </p>
            <p className="goblin_font center pad_chart_label">Analytics: Distribution of uniquely colored pixels in sprite</p>

            <div className="chartBackground pad_chart">
                <BarChart pixelObject={analytics}/>
            </div>
            <p className="spacer_color">_</p>
        </div>
    )
}

export default Zombie