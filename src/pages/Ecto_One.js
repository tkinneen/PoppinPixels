import React from 'react'
import BarChart from "../components/BarChart";
//import original from '../pixel_assets/ecto_one/original.png';
//import twoX from '../pixel_assets/ecto_one/twoX.png';
//import fourX from '../pixel_assets/ecto_one/fourX.png';
import eightX from '../pixel_assets/ecto_one/eightX.png';
//import sixteenX from '../pixel_assets/ecto_one/sixteenX.png';
//import thirtytwoX from '../pixel_assets/ecto_one/thirtytwoX.png';
//import sixtyfourX from '../pixel_assets/ecto_one/sixtyfourX.png';

//import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, DropdownButton } from 'reactstrap';

function Ecto_One() {
    let spacing = 1;
    
    let analytics = require('../pixel_assets/ecto_one/analytics.json');
    //console.log(analytics)

    return (
        <div className='ecto_one'>
            <h3 className="goblin_font center pad_sprite_name">Ghostbusters (Genesis) - Ecto-1</h3>

            <p>
                <img className="pad_image" src={eightX} style={{marginTop: spacing + 'em'}} alt="ecto_one" />
            </p>
            <BarChart pixelObject={analytics}/>
        </div>
    )
}

export default Ecto_One