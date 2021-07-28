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
            <p className="goblin_font pad_sprite_name">Venom - Marvel Vs. Capcom (Arcade)</p>
            <p>
                <img className="pad_image" src={sixteenX} style={{marginTop: spacing + 'em'}} alt="venom" />
            </p>
            <p className="goblin_font center pad_chart_label">Analytics: Distribution of uniquely colored pixels in sprite</p>

            <div className="chartBackground pad_chart">
                <BarChart pixelObject={analytics}/>
            </div>
        </div>
    )
}

export default Venom