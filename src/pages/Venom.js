import React from 'react'
import BarChart from "../components/BarChart";
//import original from '../pixel_assets/venom/original.png';
//import twoX from '../pixel_assets/venom/twoX.png';
//import fourX from '../pixel_assets/venom/fourX.png';
//import eightX from '../pixel_assets/venom/eightX.png';
import sixteenX from '../pixel_assets/venom/sixteenX.png';
//import thirtytwoX from '../pixel_assets/venom/thirtytwoX.png';
//import sixtyfourX from '../pixel_assets/venom/sixtyfourX.png';

//import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, DropdownButton } from 'reactstrap';

function Venom() {
    let spacing = 1;
    
    let analytics = require('../pixel_assets/venom/analytics.json');
    //console.log(analytics)

    return (
        <div className='venom'>
            <h3>Marvel Vs. Capcom (Arcade) - Venom</h3>

            <p>
                <img src={sixteenX} style={{marginTop: spacing + 'em'}} alt="venom" />
            </p>
            <BarChart pixelObject={analytics}/>
        </div>
    )
}

export default Venom