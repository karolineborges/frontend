import React, {useState} from "react";
import dog1 from "../images/dog1.jpg";
import dog2 from "../images/dog2.jpg";
import dog3 from "../images/dog3.jpg";
import cat1 from "../images/cat1.jpg";
import cat2 from "../images/cat2.jpg";

function Images(){
    const [isExpanded, setIsExpanded] = useState(false);

    const pets = [{name: "Paçoca", age: "12 meses", castrated : "Sim", image: dog1}, 
        { name: "Bolinha", age: "6 meses", castrated: "Não", image: dog2 }, 
        { name: "Max", age: "3 anos", castrated: "Sim", image: cat1 }, 
        { name: "Amora", age: "3 meses", castrated: "Sim", image: dog3 }, 
        { name: "Dori", age: "9 anos", castrated: "Não", image: cat2 }]

    const handleClick = () => {
            setIsExpanded(!isExpanded);
            console.log("etrou aqui")
        };

    return(
        <>
            {pets.map((item, index) => 
            <>
                    <img className={`card-item card-item-${index + 1} ? 'expanded' : ""}`} src={item.image} key={index} alt={`Imagem ${index + 1}`} onClick={handleClick}></img>
                {<div className={`bottom-left`}>{item.name}</div>}
            </>
            )} 
        </>
    );
}

export default Images;