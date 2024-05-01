import React, { useState } from 'react';
import "../styles/Administration.css"
import ModalAction from "../components/ModalAction.js";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import AddPet from "../components/AddPet.js";

function Administration(){
    let banco = JSON.parse(sessionStorage.getItem("banco"));

    const [open, setOpen] = useState(false);
    const [form, setForm] = useState("");

    const handleOpenModal = (e) => {
        setForm(e.target.id);
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    return(
        <div className="adm">
            <h1>Ações de Administrador</h1>
            <Button onClick={handleOpenModal} className='buttonClose'>
                Fechar
            </Button>
            <Dialog open={open} onClose={handleCloseModal}>
                <DialogTitle style={{ backgroundColor: "#adf0b6", color: "#7B3F00", fontWeight: "bold" }}> Edição </DialogTitle >
                <DialogContent style={{ marginTop: "1vw" }}>
                    <AddPet /> 
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModal} className='buttonClose'>
                        Fechar
                    </Button>
                </DialogActions>
            </Dialog>
            <section className="actions">
                <table className="petList">
                    <thead>
                    <tr>
                            <th>Número de Registro</th>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Sexo</th>
                            <th>Castrado</th>
                            <th>Vacinado</th>
                            <th>OBS</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        banco.map((pet, index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{pet.name}</td>
                                <td>{pet.age}</td>
                                <td>{pet.sex}</td>
                                <td>{pet.castrated}</td>
                                <td>{pet.vaccinated}</td>
                                <td>SVG</td>
                                <td className="actions-icons">
                                    <ModalAction index={index}></ModalAction>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default Administration;