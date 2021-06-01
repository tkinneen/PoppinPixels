import React from 'react'
import pixel_art from '../pixel_assets/atma_large.png';

function Atma() {
    let spacing = 5;
    return (
        <div className='atma'>
            <h1 class="orange">Final Fantasy III (SNES) - Atma Weapon</h1>
            <p>
                <img src={pixel_art} style={{marginTop: spacing + 'em'}} alt="atma" />
            </p>
        </div>
    )
}

export default Atma
