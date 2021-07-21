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
            <h3 className="goblin_font center pad_sprite_name">Legend of Zelda: Link's Awakening (GameBoy) - Hinox</h3>

            <p>
                <img className="pad_image" src={thirtytwoX} style={{marginTop: spacing + 'em'}} alt="hinox" />
            </p>
            <BarChart pixelObject={analytics}/>
        </div>
    )
}

export default Hinox