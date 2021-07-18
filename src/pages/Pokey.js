import React from 'react'
import BarChart from "../components/BarChart";
//import original from '../pixel_assets/pokey/original.png';
//import twoX from '../pixel_assets/pokey/twoX.png';
//import fourX from '../pixel_assets/pokey/fourX.png';
//import eightX from '../pixel_assets/pokey/eightX.png';
import sixteenX from '../pixel_assets/pokey/sixteenX.png';
//import thirtytwoX from '../pixel_assets/pokey/thirtytwoX.png';
//import sixtyfourX from '../pixel_assets/pokey/sixtyfourX.png';

//import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, DropdownButton } from 'reactstrap';

function Pokey() {
    let spacing = 1;
    
    let analytics = require('../pixel_assets/pokey/analytics.json');
    //console.log(analytics)

    return (
        <div className='pokey'>
            <h3>Super Mario 64 (N64) - Pokey</h3>

            <p>
                <img src={sixteenX} style={{marginTop: spacing + 'em'}} alt="pokey" />
            </p>
            <BarChart pixelObject={analytics}/>
        </div>
    )
}

export default Pokey