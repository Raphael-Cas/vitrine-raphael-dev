import CardServico from '../../components/CardServico/CardServico';
import styles from './Servicos.module.css';

// Imagens importadas localmente (ficam em src/assets)
import imgBio from '../../assets/siteBio.svg';
import imgPortfolio from '../../assets/portfolio.svg';
import imgLanding from '../../assets/landingPage.svg';
import imgInstitucional from '../../assets/siteInstitucional.svg';
import imgLoja from '../../assets/lojaVirtual.svg';
import imgIntegracao from '../../assets/integracaoSistemas.svg';
import imgManutencao from '../../assets/manutencao.svg';

// Dados dos serviços: o componente pai guarda os dados e envia para o filho via props
const servicos = [
  {
    id: 1,
    imagem: imgBio,
    titulo: 'Site de Biografia',
    nivel: 'Básico',
    preco: 'R$ 350',
    prazo: '2 a 3 dias',
    descricao:
      'Uma página única e rápida para colocar na bio do Instagram e do TikTok, reunindo seus links, redes e contato num só lugar.',
    itens: [
      'Design com as suas cores e foto',
      'Botões para redes sociais e WhatsApp',
      'Otimizado para celular',
      'Publicação online configurada',
    ],
  },
  {
    id: 2,
    imagem: imgPortfolio,
    titulo: 'Portfólio Pessoal',
    nivel: 'Básico',
    preco: 'R$ 700',
    prazo: '5 a 7 dias',
    descricao:
      'Mostre seus trabalhos, sua história e seus contatos em um site profissional que impressiona clientes e recrutadores.',
    itens: [
      'Seções Sobre, Projetos e Contato',
      'Galeria dos seus trabalhos',
      'Layout responsivo',
      'Botão de contato direto',
    ],
  },
  {
    id: 3,
    imagem: imgLanding,
    titulo: 'Landing Page',
    nivel: 'Intermediário',
    preco: 'R$ 900',
    prazo: '5 a 7 dias',
    descricao:
      'Página focada em transformar visitantes em clientes, ideal para divulgar um produto, serviço ou campanha.',
    itens: [
      'Estrutura pensada para conversão',
      'Formulário ou botão de WhatsApp',
      'Seções de benefícios e depoimentos',
      'SEO básico para o Google',
    ],
  },
  {
    id: 4,
    imagem: imgInstitucional,
    titulo: 'Site Institucional',
    nivel: 'Intermediário',
    preco: 'R$ 1.800',
    prazo: '10 a 15 dias',
    descricao:
      'Site completo com até 5 páginas para dar credibilidade e presença online à sua micro ou pequena empresa.',
    itens: [
      'Até 5 páginas (Início, Sobre, Serviços, Galeria, Contato)',
      'Formulário de contato',
      'Google Maps e redes sociais integrados',
      'SEO básico para o Google',
    ],
  },
  {
    id: 5,
    imagem: imgLoja,
    titulo: 'Loja Virtual',
    nivel: 'Avançado',
    preco: 'R$ 3.500',
    prazo: '20 a 30 dias',
    descricao:
      'Venda seus produtos pela internet com catálogo, carrinho e pedidos por WhatsApp ou pagamento online.',
    itens: [
      'Catálogo com categorias e busca',
      'Carrinho de compras',
      'Pagamento online ou pedido via WhatsApp',
      'Painel simples para gerenciar produtos',
    ],
  },
  {
    id: 6,
    imagem: imgIntegracao,
    titulo: 'Integração de Sistemas',
    nivel: 'Avançado',
    preco: 'R$ 1.500',
    prazo: 'sob consulta',
    descricao:
      'Conecto os sistemas e aplicações que a sua empresa já usa para automatizar tarefas e eliminar trabalho manual.',
    itens: [
      'Integração com meios de pagamento',
      'Conexão com WhatsApp, planilhas, ERP e CRM',
      'Automação de rotinas repetitivas',
      'Documentação e suporte pós-entrega',
    ],
  },
  {
    id: 7,
    imagem: imgManutencao,
    titulo: 'Manutenção Mensal',
    nivel: 'Contínuo',
    preco: 'R$ 150/mês',
    prazo: 'plano mensal',
    descricao:
      'Deixe o seu site sempre atualizado, seguro e funcionando, sem precisar se preocupar com a parte técnica.',
    itens: [
      'Correções e pequenos ajustes de conteúdo',
      'Backups e monitoramento',
      'Atualizações de segurança',
      'Suporte direto pelo WhatsApp',
    ],
  },
];

const niveis = [
  {
    nome: 'Básico',
    texto: 'Uma página ou poucas seções, sem integrações nem banco de dados.',
  },
  {
    nome: 'Intermediário',
    texto: 'Várias seções ou páginas, formulários e otimização para buscas.',
  },
  {
    nome: 'Avançado',
    texto:
      'Lógica própria, pagamentos, painel de gestão ou conexão com outros sistemas.',
  },
];

function Servicos() {
  return (
    <section className={styles.pagina}>
      <header className={styles.cabecalho}>
        <h1>Serviços e preços</h1>
        <p>
          O valor sobe conforme a complexidade do projeto. Os preços abaixo são
          o ponto de partida; o orçamento final depende do que você precisa.
        </p>
      </header>

      <div className={styles.niveis}>
        {niveis.map((nivel) => (
          <div key={nivel.nome} className={styles.nivelInfo}>
            <strong>{nivel.nome}</strong>
            <span>{nivel.texto}</span>
          </div>
        ))}
      </div>

      <div className={styles.grade}>
        {/* O mesmo componente é instanciado 7 vezes, cada vez com dados diferentes */}
        {servicos.map((servico) => (
          <CardServico
            key={servico.id}
            imagem={servico.imagem}
            titulo={servico.titulo}
            nivel={servico.nivel}
            preco={servico.preco}
            prazo={servico.prazo}
            descricao={servico.descricao}
            itens={servico.itens}
          />
        ))}
      </div>
    </section>
  );
}

export default Servicos;
