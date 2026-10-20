import React from "react";
import "./Cadastro.css";

function Cadastro() {
    return(
        <div id="form-cadastro">
            <h1>Cadastro de Pet</h1>

            <form>
                <div className="form-title">
                    <h3>Cadastre aqui seu pet</h3>
                </div>

                <div className="form-content">
                    <label>Nome:</label><input type="text" placeholder="Nome do seu pet..." maxlength="50"></input>
                    <label>Nascimento:</label><input type="date"></input>
                    <label>Peso:</label><input type="number" placeholder="Peso do seu pet..."></input>
                    <label>Cor:</label><input type="text" placeholder="Cor do seu pet..." maxlength="50"></input>
                </div>

                <div className="form-footer">
                    <button type="button" className="button enviar">Enviar</button>
                    <button type="reset" className="button limpar">Limpar</button>
                </div>
            </form>
        </div>
    );
}

export default Cadastro;