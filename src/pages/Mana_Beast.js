import React from 'react'
import BarChart from "../components/BarChart";
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
            <h3>Secret of Mana (SNES) - Mana Beast</h3>

            <p>
                <img src={sixteenX} style={{marginTop: spacing + 'em'}} alt="mana_beast" />
            </p>
            <BarChart pixelObject={analytics}/>
        </div>
    )
}

export default Mana_Beast