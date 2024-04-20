import "../styles/Adoption.css"
import React from 'react';
import '../App.css';
import Images from '../components/Images.js';
import Controls from '../components/Controls.js';

function Adoption() {
    return (
        <div className="adoption">
            <p>Conheça os pets que estão em busca de um novo lar!</p>
            <div className="cards">
                <div className="cards-container">
                    <Images/>
               </div>
                <div className="cards-controls">
                    <Controls/>
                </div>
            </div>
        </div>
    );
}

export default Adoption;