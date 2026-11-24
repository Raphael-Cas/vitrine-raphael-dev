import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Rodape from './components/Rodape/Rodape';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home/Home';
import Servicos from './pages/Servicos/Servicos';
import Sobre from './pages/Sobre/Sobre';
import Contato from './pages/Contato/Contato';
import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className={styles.app}>
        {/* Navbar e Rodape ficam fora do <Routes>: aparecem em TODAS as páginas */}
        <Navbar />

        <main className={styles.conteudo}>
          {/* Só o conteúdo dentro de <Routes> troca, sem recarregar a página (SPA) */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            {/* Qualquer endereço inexistente volta para a Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Rodape />
      </div>
    </BrowserRouter>
  );
}

export default App;
