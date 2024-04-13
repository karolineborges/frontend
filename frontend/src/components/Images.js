import React from "react";
import logo from "../images/fundo.jpg";
import imagem from "../images/img.png";


function Images(){
    const imgs = [logo, imagem, logo, imagem, logo]
    return(
        <>
            {imgs.map((item, index) => 
                <img className={`card-item card-item-${index+1}`} src={item} key={index} alt={`Imagem ${index+1}`}></img>
            )} 
        </>
    );
}

export default Images;