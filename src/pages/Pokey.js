import React from 'react'
import BarChart from "../components/BarChart";
//import original from '../pixel_assets/pokey/original.png';
//import twoX from '../pixel_assets/pokey/twoX.png';
//import fourX from '../pixel_assets/pokey/fourX.png';
import eightX from '../pixel_assets/pokey/eightX.png';
//import sixteenX from '../pixel_assets/pokey/sixteenX.png';
//import thirtytwoX from '../pixel_assets/pokey/thirtytwoX.png';
//import sixtyfourX from '../pixel_assets/pokey/sixtyfourX.png';

//import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, DropdownButton } from 'reactstrap';

function Pokey() {
    let spacing = 1;
    
    let analytics = require('../pixel_assets/pokey/analytics.json');
    //console.log(analytics)
    
    return (
        <div className='pokey'>
            <p className="goblin_font pad_sprite_name">Pokey - Super Mario 64 [N64]</p>
            <p>
                <img className="pad_image" src={eightX} style={{marginTop: spacing + 'em'}} alt="pokey" />
            </p>
            <p className="goblin_font center pad_sprite_name">Analytics: Distribution of uniquely colored pixels in sprite</p>

            <div className="chartBackground pad_chart">
                <BarChart pixelObject={analytics}/>
            </div>
        </div>
    )
}

export default Pokey