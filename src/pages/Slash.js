import React from 'react'
import BarChart from "../components/BarChart";
//import original from '../pixel_assets/slash/original.png';
//import twoX from '../pixel_assets/slash/twoX.png';
//import fourX from '../pixel_assets/slash/fourX.png';
//import eightX from '../pixel_assets/slash/eightX.png';
import sixteenX from '../pixel_assets/slash/sixteenX.png';
//import thirtytwoX from '../pixel_assets/slash/thirtytwoX.png';
//import sixtyfourX from '../pixel_assets/slash/sixtyfourX.png';

//import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, DropdownButton } from 'reactstrap';

function Slash() {
    let spacing = 1;
    
    let analytics = require('../pixel_assets/slash/analytics.json');
    //console.log(analytics)

    return (
        <div className='slash'>
            <p className="goblin_font pad_sprite_name">Slash - Teenage Mutant Ninja Turtles 4: Turtles In Time [Arcade]</p>
            <p>
                <img className="pad_image" src={sixteenX} style={{marginTop: spacing + 'em'}} alt="slash" />
            </p>
            <p className="goblin_font center pad_chart_label">Analytics: Distribution of uniquely colored pixels in sprite</p>

            <div className="chartBackground pad_chart">
                <BarChart pixelObject={analytics}/>
            </div>
        </div>
    )
}

export default Slash