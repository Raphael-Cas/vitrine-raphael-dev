import { Link } from 'react-router-dom';
import styles from './CardServico.module.css';

// Cada nível de complexidade tem uma cor própria no selo do card
const estiloPorNivel = {
  Básico: styles.basico,
  Intermediário: styles.intermediario,
  Avançado: styles.avancado,
  Contínuo: styles.continuo,
};

// Props recebidas do componente pai (Servicos) e lidas por desestruturação
function CardServico({ imagem, titulo, nivel, preco, prazo, descricao, itens }) {
  return (
    <article className={styles.card}>
      <img
        className={styles.imagem}
        src={imagem}
        alt={`Ilustração do serviço ${titulo}`}
      />

      <div className={styles.corpo}>
        <span className={`${styles.nivel} ${estiloPorNivel[nivel] ?? ''}`}>
          {nivel}
        </span>
        <h3 className={styles.titulo}>{titulo}</h3>
        <p className={styles.descricao}>{descricao}</p>

        <ul className={styles.itens}>
          {itens.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.rodape}>
        <div>
          <span className={styles.aPartir}>a partir de</span>
          <strong className={styles.preco}>{preco}</strong>
          <span className={styles.prazo}>Prazo: {prazo}</span>
        </div>

        {/* state envia o nome do serviço para a página Contato já selecioná-lo */}
        <Link to="/contato" state={{ servico: titulo }} className={styles.botao}>
          Pedir orçamento
        </Link>
      </div>
    </article>
  );
}

export default CardServico;
