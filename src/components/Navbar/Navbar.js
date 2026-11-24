import { Link, NavLink } from 'react-router-dom';
import contato from '../../data/contato';
import styles from './Navbar.module.css';

function Navbar() {
  // NavLink informa se a rota está ativa, para destacar a página atual no menu
  const classeLink = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.ativo}` : styles.link;

  return (
    <header className={styles.navbar}>
      <nav className={styles.container} aria-label="Navegação principal">
        <Link to="/" className={styles.logo}>
          <span className={styles.marca}>&lt;/&gt;</span>
          {contato.nome}
        </Link>

        <ul className={styles.menu}>
          <li>
            <NavLink to="/" end className={classeLink}>
              Início
            </NavLink>
          </li>
          <li>
            <NavLink to="/servicos" className={classeLink}>
              Serviços
            </NavLink>
          </li>
          <li>
            <NavLink to="/sobre" className={classeLink}>
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink to="/contato" className={classeLink}>
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
