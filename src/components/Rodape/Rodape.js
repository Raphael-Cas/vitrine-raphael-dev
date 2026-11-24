import { Link } from 'react-router-dom';
import contato from '../../data/contato';
import styles from './Rodape.module.css';

function Rodape() {
  const anoAtual = new Date().getFullYear();
  const linkWhatsapp = `https://wa.me/${contato.whatsappNumero}`;

  return (
    <footer className={styles.rodape}>
      <div className={styles.container}>
        <section className={styles.bloco}>
          <h3 className={styles.titulo}>{contato.nome}</h3>
          <p className={styles.texto}>
            Sites, portfólios e integração de sistemas para quem quer vender
            mais e trabalhar menos.
          </p>
        </section>

        <section className={styles.bloco}>
          <h3 className={styles.titulo}>Navegação</h3>
          <ul className={styles.lista}>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/servicos">Serviços</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </section>

        <section className={styles.bloco}>
          <h3 className={styles.titulo}>Fale comigo</h3>
          <ul className={styles.lista}>
            <li>
              <a href={`mailto:${contato.email}`}>{contato.email}</a>
            </li>
            <li>
              <a href={linkWhatsapp} target="_blank" rel="noreferrer">
                WhatsApp: {contato.whatsappExibicao}
              </a>
            </li>
          </ul>
        </section>
      </div>

      <p className={styles.copyright}>
        © {anoAtual} {contato.nome}. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Rodape;
