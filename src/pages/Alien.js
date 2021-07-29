import React from 'react'
//import Dropdown from "../components/Dropdown";
import BarChart from "../components/BarChart";
import "../App.css";
//import original from '../pixel_assets/alien/original.png';
//import twoX from '../pixel_assets/alien/twoX.png';
//import fourX from '../pixel_assets/alien/fourX.png';
import eightX from '../pixel_assets/alien/eightX.png';
//import sixteenX from '../pixel_assets/alien/sixteenX.png';
//import thirtytwoX from '../pixel_assets/alien/thirtytwoX.png';
//import sixtyfourX from '../pixel_assets/alien/sixtyfourX.png';

function Alien() {
    let spacing = 1;
    
    let analytics = require('../pixel_assets/alien/analytics.json');
    //console.log(analytics)
  //          {/*<h3 className="goblin_font center pad_sprite_name">Aliens Vs. Predator (Arcade) - RazorClaw Alien</h3>*/}

    return (
        <div className='alien'>
            <p className="goblin_font pad_sprite_name">RazorClaw Alien - Aliens Vs. Predator [Arcade]</p>
            <p>
                <img className="pad_image" src={eightX} style={{marginTop: spacing + 'em'}} alt="alien" />
            </p>
            <p className="goblin_font center pad_chart_label">Analytics: Distribution of uniquely colored pixels in sprite</p>

            <div className="chartBackground pad_chart">
                <BarChart pixelObject={analytics}/>
            </div>

            <p className="spacer_color"> _</p>
        </div>
    )
}

export default Alien