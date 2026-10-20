import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return(
        <nav className="navbar">
            <h2><Link to="/" id="button-home">🏠 PETS</Link></h2>
            <Link to="/cadastro" className="nav-button">Cadastro</Link>
            <Link to="/contato" className="nav-button">Contato</Link>
            <Link to="/sobre" className="nav-button">Sobre</Link>
        </nav>
    );
}

export default Navbar;