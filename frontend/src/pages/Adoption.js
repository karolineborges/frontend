import "../styles/Adoption.css"
import React, {useState} from 'react';
import '../App.css';
import Images from '../components/Images.js';
import Controls from '../components/Controls.js';
import Modal from '../components/Modal.js';

function Adoption() {
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    };

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
                <div className="pets-description">
                    Mia
                </div>
                <Modal closeModal={closeModal} />
            </div>
        </div>
    );
}

export default Adoption;