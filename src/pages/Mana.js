import React from 'react'
import pixel_art from '../pixel_assets/mana_large.png';

function Mana() {
    let spacing = 5;
    return (
        <div className='mana'>
            <h1>Secret of Mana (SNES) - Flame Dragon</h1>
            <p>
                <img src={pixel_art} style={{marginTop: spacing + 'em'}} alt="mana" />
            </p>
        </div>
    )
}

export default Mana
