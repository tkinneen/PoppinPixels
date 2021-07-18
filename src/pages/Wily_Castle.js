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
            <h3>Mega Man 2 (NES) - Dr. Wily's Castle</h3>

            <p>
                <img src={eightX} style={{marginTop: spacing + 'em'}} alt="wily_castle" />
            </p>
            <BarChart pixelObject={analytics}/>
        </div>
    )
}

export default Wily_Castle