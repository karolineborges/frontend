import { Button } from '@mui/material';
import React, { useState } from 'react';
import { editPet, deletePet } from "../db"

function EditDeletePet({index, form}){
    let database = JSON.parse(sessionStorage.getItem("banco"));
    let pet = database[index];
    let method = form;

    const [dataForm, setDataForm] = useState({
        petName: pet.name,
        age: pet.age,
        vaccinated: pet.vaccinated,
        castrated: pet.castrated,
        sex: pet.sex,
        id: pet.id,
        obs: pet.obs
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        editPet(dataForm, index);
        window.location.reload();
    };

    const handleClick = () => {
        deletePet(index);
        window.location.reload();
    }

    return (
        <> {
            method == "editPet" ? 
            <form onSubmit={handleSubmit} className='formVisit'>
                <div>
                    <div>
                        <label htmlFor="petName"> Nome do Pet </label>
                        <input type="text" name="petName" value={dataForm.petName} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="age"> Idade </label>
                        <input type="text" name="age" value={dataForm.age} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="sex"> Sexo </label>
                        <input type="text" name="sex" value={dataForm.sex} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="vaccinated"> Vacinado </label>
                        <input type="text" name="vaccinated" value={dataForm.vaccinated} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="castrated"> Castrado </label>
                        <input type="text" name="castrated" value={dataForm.castrated} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="obs"> Observação </label>
                        <input type="text" name="obs" value={dataForm.obs} onChange={handleChange} required />
                    </div>
                </div>
                <div className='actionsButtons'>
                    <Button type="submit" variant="contained" style={{ backgroundColor: 'rgb(238, 199, 126)', color: '#7B3F00', marginTop: "2vw", marginBottom: "1vw" }}>
                        Salvar
                    </Button>
                </div>
            </form> : 
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <p>Tem certeza que deseja remover esse registro?</p>
                    <Button id={index} type="button" onClick={handleClick} variant="contained" style={{ backgroundColor: 'red', color: '#7B3F00', marginTop: "2vw", marginBottom: "1vw" }}>
                        Apagar
                    </Button>
            </div>}
        </>
    );
}

export default EditDeletePet;