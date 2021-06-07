import React from 'react'
import BarChart from "../components/BarChart";
import pixel_art from '../pixel_assets/alien_large.png';

function Alien() {
    let spacing = 5;

    /*var fs = require('fs');
    var path = require('path');

    // Buffer mydata
    var BUFFER = bufferFile('../pixel_assets/alien_results.json');

    function bufferFile(relPath) {
        return fs.readFileSync(path.join(__dirname, relPath)); // zzzz....
    }*/

    var BUFFER = require('../pixel_assets/alien_results.json');
    console.log("BUFFER")
    console.log(BUFFER)

    console.log("totalPixelsScaled")
    console.log(BUFFER.totalPixelsScaled)

    return (
        <div className='alien'>
            <h1>Aliens vs. Predator (Arcade) - Razer Claws</h1>
            <p>
                <img src={pixel_art} style={{marginTop: spacing + 'em'}} alt="razor" />
            </p>
            <BarChart/>
        </div>
    )
}

export default Alien
