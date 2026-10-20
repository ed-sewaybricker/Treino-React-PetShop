import React from "react";
import ImagemPets from "../../assets/home_pets.png";
import "./Home.css";

function Home() {
    return(
        <div className="home">
            <h1>Bem-vindo(a)</h1>
            <p>Seu pet em boas mãos: o cuidado e o carinho que ele merece estão aqui.</p>
            <p><img src={ImagemPets}></img></p>
        </div>
    );
}

export default Home;