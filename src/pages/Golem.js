import React from 'react'
import pixel_art from '../pixel_assets/golem_large.png';

function Golem() {
    let spacing = 5;
    return (
        <div className='bison'>
            <h1>Breath of Fire 3 (PSX) - Golem</h1>
            <p>
                <img src={pixel_art} style={{marginTop: spacing + 'em'}} alt="golem" />
            </p>
        </div>
    )
}

export default Golem
