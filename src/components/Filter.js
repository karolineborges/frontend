import { useState } from "react";
import { Button } from '@mui/material';
import { searchPets } from "../db.js";

function Filter({onFilter}){
    const [dataSearch, setDataSearch] = useState({
        name: '',
        vaccinated: '',
        castrated: '',
        size: '',
        type: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataSearch(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("dataSearch")
        console.log(dataSearch)
        const pets = searchPets(dataSearch);
        console.log("pets filter")
        console.log(pets)
        onFilter(pets);
    }

    return(
            <div className="search-pet">
                <h3>Galeria de pets</h3>
                <form className="form-search" onSubmit={handleSubmit}>
                    <div className="filters">
                        <div className="filter">
                            <label htmlFor="name"> Nome do Pet </label>
                            <input type="text" name="name" value={dataSearch.name} onChange={handleChange} />
                        </div>
                        <div className="filter">
                            <label htmlFor="type">Sexo</label>
                            <select name="type" onChange={handleChange}>
                                <option defaultValue="" value="">Selecione uma opção</option>
                                <option value="FÊMEA">Fêmea</option>
                                <option value="MACHO">Macho</option>
                            </select>
                        </div>
                        <div className="filter">
                            <label htmlFor="vaccinated"> Vacinado </label>
                            <select onChange={handleChange} name="vaccinated" >
                                <option defaultValue >Selecione uma opção</option>
                                <option value="SIM">Sim</option>
                                <option value="NÃO">Não</option>
                            </select>
                        </div>
                        <div className="filter">
                            <label  htmlFor="castrated"> Castrado </label>
                            <select id='last' onChange={handleChange} name="castrated" >
                                <option defaultValue >Selecione uma opção</option>
                                <option value="SIM">Sim</option>
                                <option value="NÃO">Não</option>
                            </select>
                        </div>
                    </div>
                    <div className='submit-search'>
                        <Button type="submit" variant="contained" style={{ backgroundColor: 'rgb(238, 199, 126)', color: '#7B3F00', marginTop: "2vw 1vw 1vw 0" }}>
                            Buscar
                        </Button>
                    </div>
                </form>
            </div>
        );
}

export default Filter;