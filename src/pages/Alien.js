import React from 'react'
import pixel_art from '../pixel_assets/alien_large.png';

function Alien() {
    let spacing = 5;
    return (
        <div className='alien'>
            <h1 class="orange">Aliens vs. Predator (Arcade) - Razer Claws</h1>
            <p>
                <img src={pixel_art} style={{marginTop: spacing + 'em'}} alt="razor" />
            </p>
        </div>
    )
}

export default Alien
