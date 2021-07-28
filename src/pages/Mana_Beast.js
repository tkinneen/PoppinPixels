import React from 'react'
import BarChart from "../components/BarChart";
import "../App.css";
//import original from '../pixel_assets/mana_beast/original.png';
//import twoX from '../pixel_assets/mana_beast/twoX.png';
//import fourX from '../pixel_assets/mana_beast/fourX.png';
//import eightX from '../pixel_assets/mana_beast/eightX.png';
import sixteenX from '../pixel_assets/mana_beast/sixteenX.png';
//import thirtytwoX from '../pixel_assets/mana_beast/thirtytwoX.png';
//import sixtyfourX from '../pixel_assets/mana_beast/sixtyfourX.png';

//import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, DropdownButton } from 'reactstrap';

function Mana_Beast() {
    let spacing = 1;
    
    let analytics = require('../pixel_assets/mana_beast/analytics.json');
    //console.log(analytics)

    return (
        <div className='mana_beast'>
            <p className="goblin_font pad_sprite_name">Mana Beast - Secret of Mana [SNES]</p>
            <p>
                <img className="pad_image" src={sixteenX} style={{marginTop: spacing + 'em'}} alt="mana_beast" />
            </p>
            <p className="goblin_font center pad_sprite_name">Analytics: Distribution of uniquely colored pixels in sprite</p>

            <div className="chartBackground pad_chart">
                <BarChart pixelObject={analytics}/>
            </div>
        </div>
    )
}

export default Mana_Beast