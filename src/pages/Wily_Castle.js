import React from 'react'
import BarChart from "../components/BarChart";
//import original from '../pixel_assets/wily_castle/original.png';
//import twoX from '../pixel_assets/wily_castle/twoX.png';
//import fourX from '../pixel_assets/wily_castle/fourX.png';
import eightX from '../pixel_assets/wily_castle/eightX.png';
//import sixteenX from '../pixel_assets/wily_castle/sixteenX.png';
//import thirtytwoX from '../pixel_assets/wily_castle/thirtytwoX.png';
//import sixtyfourX from '../pixel_assets/wily_castle/sixtyfourX.png';

//import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, DropdownButton } from 'reactstrap';

function Wily_Castle() {
    let spacing = 1;
    
    let analytics = require('../pixel_assets/wily_castle/analytics.json');
    //console.log(analytics)

    return (
        <div className='wily_castle'>
            <p className="goblin_font pad_sprite_name">Dr. Wily's Castle - Mega Man 2 [NES]</p>
            <p>
                <img className="pad_image" src={eightX} style={{marginTop: spacing + 'em'}} alt="wily_castle" />
            </p>
            <p className="goblin_font center pad_chart_label">Analytics: Distribution of uniquely colored pixels in sprite</p>

            <div className="chartBackground pad_chart">
                <BarChart pixelObject={analytics}/>
            </div>
        </div>
    )
}

export default Wily_Castle