import { Link } from 'react-router-dom';
import styles from './Sobre.module.css';

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'APIs REST', 'Git'];

const etapas = [
  {
    titulo: 'Conversa inicial',
    texto: 'Entendo o seu negócio, o seu público e o que você quer alcançar.',
  },
  {
    titulo: 'Orçamento e prazo',
    texto: 'Você recebe o valor e a data de entrega combinados antes de começar.',
  },
  {
    titulo: 'Desenvolvimento',
    texto: 'Construo o projeto e mostro o andamento para você aprovar.',
  },
  {
    titulo: 'Entrega e suporte',
    texto: 'Publico o site e continuo disponível para ajustes e dúvidas.',
  },
];

function Sobre() {
  return (
    <section className={styles.pagina}>
      <header className={styles.apresentacao}>
        <div className={styles.avatar} aria-hidden="true">
          RD
        </div>
        <div>
          <h1>Sobre mim</h1>
          <p>
            Olá, eu sou o <strong>Raphael</strong>, desenvolvedor web. Crio
            sites e conecto sistemas para que micro e pequenas empresas,
            profissionais autônomos e criadores de conteúdo tenham uma presença
            online profissional, sem complicação e com preço justo.
          </p>
          <p>
            Acredito que um bom site precisa ser simples de usar, rápido no
            celular e fácil de manter. Por isso, cada projeto começa com uma
            conversa sobre o que realmente importa para o seu negócio.
          </p>
        </div>
      </header>

      <section className={styles.bloco}>
        <h2>Tecnologias que uso</h2>
        <ul className={styles.tecnologias}>
          {tecnologias.map((tecnologia) => (
            <li key={tecnologia} className={styles.chip}>
              {tecnologia}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.bloco}>
        <h2>Como eu trabalho</h2>
        <ol className={styles.etapas}>
          {etapas.map((etapa, indice) => (
            <li key={etapa.titulo} className={styles.etapa}>
              <span className={styles.numero}>{indice + 1}</span>
              <div>
                <h3>{etapa.titulo}</h3>
                <p>{etapa.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className={styles.chamada}>
        <p>Pronto para começar o seu projeto?</p>
        <Link to="/contato" className={styles.botao}>
          Pedir orçamento
        </Link>
      </div>
    </section>
  );
}

export default Sobre;
