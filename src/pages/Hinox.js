import React from 'react'
import BarChart from "../components/BarChart";
//import original from '../pixel_assets/hinox/original.png';
//import twoX from '../pixel_assets/hinox/twoX.png';
//import fourX from '../pixel_assets/hinox/fourX.png';
//import eightX from '../pixel_assets/hinox/eightX.png';
//import sixteenX from '../pixel_assets/hinox/sixteenX.png';
import thirtytwoX from '../pixel_assets/hinox/thirtytwoX.png';
//import sixtyfourX from '../pixel_assets/hinox/sixtyfourX.png';

//import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, DropdownButton } from 'reactstrap';

function Hinox() {
    let spacing = 1;
    
    let analytics = require('../pixel_assets/hinox/analytics.json');
    //console.log(analytics)

    return (
        <div className='hinox'>
            <p className="goblin_font pad_sprite_name">Hinox - Legend of Zelda: Link's Awakening [GameBoy]</p>
            <p>
                <img className="pad_image" src={thirtytwoX} style={{marginTop: spacing + 'em'}} alt="hinox" />
            </p>
            <p className="goblin_font center pad_sprite_name">Analytics: Distribution of uniquely colored pixels in sprite</p>

            <div className="chartBackground pad_chart">
                <BarChart pixelObject={analytics}/>
            </div>
        </div>
    )
}

export default Hinox