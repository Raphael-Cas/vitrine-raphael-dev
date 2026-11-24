import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const beneficios = [
  {
    icone: '💰',
    titulo: 'Preço justo e claro',
    texto:
      'Cada serviço tem um valor de partida divulgado aqui no site. Você sabe quanto vai investir antes de começar.',
  },
  {
    icone: '📱',
    titulo: 'Feito para o celular',
    texto:
      'Seus clientes acessam pelo celular. Todo site é responsivo e rápido, funcionando bem em qualquer tela.',
  },
  {
    icone: '🤝',
    titulo: 'Suporte depois da entrega',
    texto:
      'Não some depois de publicar. Ajustes e dúvidas pelo WhatsApp, com plano de manutenção opcional.',
  },
];

const publicos = [
  {
    titulo: 'Micro e pequenas empresas',
    texto: 'Site institucional, landing page e loja virtual para vender mais.',
  },
  {
    titulo: 'Criadores e autônomos',
    texto:
      'Site de biografia e portfólio para colocar na bio das redes sociais.',
  },
  {
    titulo: 'Negócios com sistemas próprios',
    texto:
      'Integração entre sistemas, pagamentos e APIs para automatizar tarefas.',
  },
];

function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroConteudo}>
          <span className={styles.selo}>Desenvolvedor Web · Raphael Dev</span>
          <h1 className={styles.titulo}>
            Sites e sistemas que colocam o seu negócio{' '}
            <span className={styles.destaque}>na internet</span>
          </h1>
          <p className={styles.subtitulo}>
            Crio sites para micro e pequenas empresas, páginas de biografia e
            portfólios para redes sociais, além de integração de sistemas e
            aplicações. Sites a partir de <strong>R$ 350</strong>.
          </p>
          <div className={styles.acoes}>
            <Link to="/servicos" className={styles.botaoPrimario}>
              Ver serviços e preços
            </Link>
            <Link to="/contato" className={styles.botaoSecundario}>
              Pedir orçamento
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.secao}>
        <h2 className={styles.tituloSecao}>Por que contratar</h2>
        <div className={styles.grade}>
          {beneficios.map((beneficio) => (
            <article key={beneficio.titulo} className={styles.beneficio}>
              <span className={styles.icone} aria-hidden="true">
                {beneficio.icone}
              </span>
              <h3>{beneficio.titulo}</h3>
              <p>{beneficio.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.secao}>
        <h2 className={styles.tituloSecao}>Para quem eu trabalho</h2>
        <div className={styles.grade}>
          {publicos.map((publico) => (
            <article key={publico.titulo} className={styles.publico}>
              <h3>{publico.titulo}</h3>
              <p>{publico.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.chamada}>
        <h2>Vamos tirar o seu projeto do papel?</h2>
        <p>Conte o que você precisa e receba um orçamento sem compromisso.</p>
        <Link to="/contato" className={styles.botaoPrimario}>
          Falar com Raphael
        </Link>
      </section>
    </>
  );
}

export default Home;
