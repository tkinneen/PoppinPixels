import React from 'react'
import BarChart from "../components/BarChart";
//import original from '../pixel_assets/samus_aran/original.png';
//import twoX from '../pixel_assets/samus_aran/twoX.png';
//import fourX from '../pixel_assets/samus_aran/fourX.png';
//import eightX from '../pixel_assets/samus_aran/eightX.png';
//import sixteenX from '../pixel_assets/samus_aran/sixteenX.png';
import thirtytwoX from '../pixel_assets/samus_aran/thirtytwoX.png';
//import sixtyfourX from '../pixel_assets/samus_aran/sixtyfourX.png';

//import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, DropdownButton } from 'reactstrap';

function Samus_Aran() {
    let spacing = 1;
    
    let analytics = require('../pixel_assets/samus_aran/analytics.json');
    //console.log(analytics)

    return (
        <div className='samus_aran'>
            <h3 className="goblin_font center pad_sprite_name">Metroid Fusion (GBA) - Samus Aran (Varia Armor)</h3>

            <p>
                <img className="pad_image" src={thirtytwoX} style={{marginTop: spacing + 'em'}} alt="samus_aran" />
            </p>
            <div className="chartBackground pad_chart">
                <BarChart pixelObject={analytics}/>
            </div>
        </div>
    )
}

export default Samus_Aran