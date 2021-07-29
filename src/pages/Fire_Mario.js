import React from 'react'
import BarChart from "../components/BarChart";
//import original from '../pixel_assets/fire_mario/original.png';
//import twoX from '../pixel_assets/fire_mario/twoX.png';
//import fourX from '../pixel_assets/fire_mario/fourX.png';
//import eightX from '../pixel_assets/fire_mario/eightX.png';
//import sixteenX from '../pixel_assets/fire_mario/sixteenX.png';
import thirtytwoX from '../pixel_assets/fire_mario/thirtytwoX.png';
//import sixtyfourX from '../pixel_assets/fire_mario/sixtyfourX.png';

//import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, DropdownButton } from 'reactstrap';

function Fire_Mario() {
    let spacing = 1;
    
    let analytics = require('../pixel_assets/fire_mario/analytics.json');
    //console.log(analytics)

    return (
        <div className='fire_mario'>
            <p className="goblin_font pad_sprite_name">Fire Mario - Super Mario Bros. 3 (NES)</p>
            <p>
                <img className="pad_image" src={thirtytwoX} style={{marginTop: spacing + 'em'}} alt="fire_mario" />
            </p>
            <p className="goblin_font center pad_chart_label">Analytics: Distribution of uniquely colored pixels in sprite</p>

            <div className="chartBackground pad_chart">
                <BarChart pixelObject={analytics}/>
            </div>
            <p className="spacer_color">_</p>
        </div>
    )
}

export default Fire_Mario