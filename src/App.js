import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import Contato from './pages/Contato/Contato';
import Sobre from './pages/Sobre/Sobre';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div id="container">
        <Navbar/>

        <main>
          <Routes>
            <Route path="/" element={ <Home/> }></Route>
            <Route path="/cadastro" element={ <Cadastro/> }></Route>
            <Route path="/contato" element={ <Contato/> }></Route>
            <Route path="/sobre" element={ <Sobre/> }></Route>
          </Routes>
        </main>

        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
