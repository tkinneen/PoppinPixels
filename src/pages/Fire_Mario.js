import React from 'react'
import BarChart from "../components/BarChart";
//import original from '../pixel_assets/fire_mario/original.png';
//import twoX from '../pixel_assets/fire_mario/twoX.png';
//import fourX from '../pixel_assets/fire_mario/fourX.png';
//import eightX from '../pixel_assets/fire_mario/eightX.png';
//import sixteenX from '../pixel_assets/fire_mario/sixteenX.png';
import thirtytwoX from '../pixel_assets/fire_mario/thirtytwoX.png';
//import sixtyfourX from '../pixel_assets/fire_mario/sixtyfourX.png';

//import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, DropdownButton } from 'reactstrap';

function Fire_Mario() {
    let spacing = 1;
    
    let analytics = require('../pixel_assets/fire_mario/analytics.json');
    //console.log(analytics)

    return (
        <div className='fire_mario'>
            <h3 className="goblin_font center pad_sprite_name">Super Mario Bros. 3 (NES) - Fire Mario</h3>

            <p>
                <img className="pad_image" src={thirtytwoX} style={{marginTop: spacing + 'em'}} alt="fire_mario" />
            </p>
            <BarChart pixelObject={analytics}/>
        </div>
    )
}

export default Fire_Mario