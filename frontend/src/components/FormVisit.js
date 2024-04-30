import { Button } from '@mui/material';
import React, { useState } from 'react';

function FormVisit(){
    const [dataForm, setDataForm] = useState({
        petName: '',
        visitorName: '',
        email: '',
        message: ''
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
        
    };

    return (
        <form onSubmit={handleSubmit} className='formVisit'>
            <div>
                <div>
                    <label htmlFor="petName"> Nome do Pet </label>
                    <input type="text" name="petName" value={dataForm.firstName} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="visitorName"> Seu nome </label>
                    <input type="text" name="visitorName" value={dataForm.visitorName} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="phone"> Telefone para contato </label>
                    <input type="number" maxLength="11" minLength="11" name="phone" value={dataForm.phone} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="email"> Email </label>
                    <input type="email" name="email" value={dataForm.email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="date"> Data e hora </label>
                    <input type="datetime-local" name="date" value={dataForm.firstName} onChange={handleChange} required />
                </div>
            </div>
            <Button type="submit" variant="contained" style={{ backgroundColor: 'rgb(238, 199, 126)', color: '#7B3F00', marginTop: "5vw", marginBottom: "5vw" }}>
                Submit
            </Button>
        </form>
    );
}

export default FormVisit;