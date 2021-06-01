import React from 'react'
import pixel_art from '../pixel_assets/bison_large.png';

function Bison() {
    let spacing = 5;
    return (
        <div className='bison'>
            <h1>Street Fighter Alpha 2 (Aracde) - M. Bison</h1>
            <p>
                <img src={pixel_art} style={{marginTop: spacing + 'em'}} alt="bison" />
            </p>
        </div>
    )
}

export default Bison
