import "../styles/Administration.css"
import ModalAction from "../components/ModalAction.js";
import {database} from "../db.js"

function Administration(){

    return(
        <div className="adm">
            <h1>Ações de Administrador</h1>
            <section className="actions">
                <table className="petList">
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
                    {
                        database.map((pet, index) => (
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
                </table>
            </section>
        </div>
    );
}

export default Administration;