import { Link } from "react-router-dom";
import '../styles/Home.css';
import  image from "../images/fundo.jpg" ;

function Home(){
    return (
        <>
            <div className="pets-home">
            <h5>Adote um bichinho</h5>
            <span>Nos ajude a encontrar um novo lar para eles, adote!</span>
            <button>
                <Link to="/adoption" >Pets disponíveis</Link>
            </button>
        </div>
        <div className="cards-home">
            <div className="card-home">

                <img src={image} />
            </div>
                <div className="card-home">
                <img src={image}/>
            </div>
        </div>
        </>

    );
}

export default Home;