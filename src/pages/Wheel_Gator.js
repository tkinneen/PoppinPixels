import React from 'react'
import BarChart from "../components/BarChart";
//import original from '../pixel_assets/wheel_gator/original.png';
//import twoX from '../pixel_assets/wheel_gator/twoX.png';
//import fourX from '../pixel_assets/wheel_gator/fourX.png';
//import eightX from '../pixel_assets/wheel_gator/eightX.png';
import sixteenX from '../pixel_assets/wheel_gator/sixteenX.png';
//import thirtytwoX from '../pixel_assets/wheel_gator/thirtytwoX.png';
//import sixtyfourX from '../pixel_assets/wheel_gator/sixtyfourX.png';

//import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, DropdownButton } from 'reactstrap';

function Wheel_Gator() {
    let spacing = 1;
    
    let analytics = require('../pixel_assets/wheel_gator/analytics.json');
    //console.log(analytics)

    return (
        <div className='wheel_gator'>
            <h3>Mega Man X 2 (SNES) - Wheel Gator</h3>

            <p>
                <img src={sixteenX} style={{marginTop: spacing + 'em'}} alt="wheel_gator" />
            </p>
            <BarChart pixelObject={analytics}/>
        </div>
    )
}

export default Wheel_Gator