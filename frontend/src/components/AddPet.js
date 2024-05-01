import { Button } from '@mui/material';
import React, { useState } from 'react';
import { addPet } from '../db';

function AddPet(){
    const [dataForm, setDataForm] = useState({
        name: '',
        age: '',
        vaccinated: '',
        castrated: '',
        sex: '',
        id: '',
        obs: ''
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
        addPet(dataForm);
    };

    return(
        <form onSubmit={handleSubmit} className='formVisit'>
            <div>
                <div>
                    <label htmlFor="name"> Nome do Pet </label>
                    <input type="text" name="name" value={dataForm.name} onChange={handleChange} required />
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
        </form>
    );
}

export default AddPet;