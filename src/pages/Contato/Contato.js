import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import contato from '../../data/contato';
import styles from './Contato.module.css';

// Mesmos nomes dos cards da página Serviços
const opcoesServico = [
  'Site de Biografia',
  'Portfólio Pessoal',
  'Landing Page',
  'Site Institucional',
  'Loja Virtual',
  'Integração de Sistemas',
  'Manutenção Mensal',
  'Outro / ainda não sei',
];

function Contato() {
  // O botão "Pedir orçamento" do card envia o serviço escolhido via state da rota
  const { state } = useLocation();

  const [nome, setNome] = useState('');
  const [servico, setServico] = useState(state?.servico ?? '');
  const [mensagem, setMensagem] = useState('');

  function enviar(evento) {
    evento.preventDefault();

    // Sem back-end: a mensagem é montada e aberta no WhatsApp do Raphael.
    // Nada digitado vai para o HTML: o texto só entra na URL, já codificado
    // por encodeURIComponent, então não há como injetar código ou outro endereço.
    const texto =
      `Olá, Raphael! Meu nome é ${nome.trim()}.\n` +
      `Serviço de interesse: ${servico}.\n` +
      `${mensagem.trim()}`;

    const url = `https://wa.me/${contato.whatsappNumero}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <section className={styles.pagina}>
      <header className={styles.cabecalho}>
        <h1>Peça seu orçamento</h1>
        <p>
          Conte o que você precisa. Ao enviar, a conversa abre no meu WhatsApp
          com a sua mensagem pronta.
        </p>
      </header>

      <div className={styles.layout}>
        <form className={styles.formulario} onSubmit={enviar}>
          <label className={styles.campo}>
            Seu nome
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Como posso te chamar?"
              maxLength={80}
              required
            />
          </label>

          <label className={styles.campo}>
            Serviço de interesse
            <select
              value={servico}
              onChange={(e) => setServico(e.target.value)}
              required
            >
              <option value="" disabled>
                Selecione um serviço
              </option>
              {opcoesServico.map((opcao) => (
                <option key={opcao} value={opcao}>
                  {opcao}
                </option>
              ))}
            </select>
          </label>

          <label className={styles.campo}>
            Mensagem
            <textarea
              rows="5"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Descreva rapidamente o seu projeto."
              maxLength={1000}
              required
            />
          </label>

          <button type="submit" className={styles.botao}>
            Enviar pelo WhatsApp
          </button>
        </form>

        <aside className={styles.lateral}>
          <h2>Contato direto</h2>
          <ul>
            <li>
              <span>E-mail</span>
              <a href={`mailto:${contato.email}`}>{contato.email}</a>
            </li>
            <li>
              <span>WhatsApp</span>
              <a
                href={`https://wa.me/${contato.whatsappNumero}`}
                target="_blank"
                rel="noreferrer"
              >
                {contato.whatsappExibicao}
              </a>
            </li>
          </ul>
          <p className={styles.aviso}>
            Respondo o mais rápido possível, geralmente no mesmo dia útil.
          </p>
        </aside>
      </div>
    </section>
  );
}

export default Contato;
