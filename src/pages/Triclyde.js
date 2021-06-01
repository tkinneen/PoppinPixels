import React from 'react'
import pixel_art from '../pixel_assets/triclyde_large.png';

function Triclyde() {
    let spacing = 5;
    return (
        <div className='triclyde'>
            <h1>Super Mario Bros. 2 (NES) - Triclyde</h1>
            <p>
                <img src={pixel_art} style={{marginTop: spacing + 'em'}} alt="triclyde" />
            </p>
        </div>
    )
}

export default Triclyde
