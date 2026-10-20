import React from "react";
import "./Contato.css";

function Contato() {
    return(
        <div id="dados-contato">
            <h1>Contato</h1>
            <p>Queremos muito ouvir você e conhecer o seu pet! Se você tem dúvidas sobre nossos serviços, quer agendar um banho e tosa, ou precisa de ajuda para escolher a melhor ração, nossa equipe está pronta para ajudar.</p>
            <h2>📍 Onde Estamos</h2>
            <ul>
                <li><b>Endereço:</b> Rua dos Pets, nº 123 - Bairro Amigo Animal - Cidade/SP</li>
                <li><b>Ponto de referência:</b> Ao lado do Parque Central</li>
            </ul>
            <h2>📞 Canais de Atendimento</h2>
            <ul>
                <li><b>Telefone:</b> (11) 5555-4321</li>            
                <li><b>WhatsApp:</b> (11) 99999-8888</li>            
                <li><b>E-mail:</b> contato@petshopprojeto.com.br</li>            
            </ul>
            <h2>⏰ Horário de Funcionamento</h2>
            <ul>
                <li><b>Segunda a Sexta:</b> das 8h às 19h</li>
                <li><b>Sábados:</b> das 8h às 14h</li>
                <li><b>Domingos e Feriados:</b> Fechado (Plantão de emergência sob consulta)</li>
            </ul>
            <h2>Desenvolvimento</h2>
            <ul>
                <li><b>Desenvolvedor:</b> Eduardo Paixão</li>
                <li><b>LinkedIn: </b> <a href="https://www.linkedin.com/in/eduardo-sewaybricker-zambreto-paixao/">eduardo-sewaybricker-zambreto-paixao</a></li>
                <li><b>GitHub: </b> <a href="https://github.com/ed-sewaybricker">ed-sewaybricker</a></li>
            </ul>
        </div>
    );
}

export default Contato;