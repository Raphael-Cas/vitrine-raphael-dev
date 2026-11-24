# Vitrine Raphael Dev

Site de vitrine de serviços de desenvolvimento web, feito como aplicação de página única (SPA) com React. Apresenta serviços como site de biografia, portfólio, landing page, site institucional, loja virtual, integração de sistemas e manutenção mensal, cada um com nível de complexidade, preço inicial e prazo.

> Este projeto foi desenvolvido com auxílio de IA (Claude) e é mantido neste repositório como base de estudo.

## Funcionalidades

- 4 páginas com navegação sem recarregar a página: Início, Serviços, Sobre e Contato.
- Menu (`Navbar`) e rodapé (`Rodape`) presentes em todas as páginas.
- Componente reutilizável `CardServico`, que recebe os dados por props e é usado 7 vezes.
- Estilos isolados por componente com CSS Modules.
- Formulário de contato que abre uma conversa no WhatsApp com a mensagem já escrita.

## Tecnologias

- [React](https://react.dev) 19
- [React Router](https://reactrouter.com) (`react-router-dom`)
- CSS Modules
- Create React App (`react-scripts`)

## Estrutura de pastas

```
public/                    arquivos estáticos (index.html, favicon)
src/
  assets/                  imagens importadas pelos componentes
  components/              peças reutilizáveis
    CardServico/
    Navbar/
    Rodape/
    ScrollToTop/
  data/
    contato.js             e-mail e WhatsApp usados no site
  pages/                   uma pasta por página (rota)
    Home/
    Servicos/
    Sobre/
    Contato/
  App.js                   rotas da aplicação
  index.js                 ponto de entrada
  index.css                estilos globais
```

## Como rodar localmente

### 1. Instale os programas necessários

Você precisa de:

- **Node.js** na versão LTS (já inclui o `npm`): https://nodejs.org
- **Git**: https://git-scm.com

No Windows, também dá para instalar pelo terminal:

```powershell
winget install OpenJS.NodeJS.LTS
winget install Git.Git
```

Depois de instalar, **feche e abra o terminal (ou o VS Code) de novo**. Sem isso, os comandos não são reconhecidos.

Confira se deu certo:

```bash
node -v
npm -v
git --version
```

Os três comandos devem mostrar um número de versão.

### 2. Baixe o projeto

```bash
git clone https://github.com/Raphael-Cas/vitrine-raphael-dev.git
cd vitrine-raphael-dev
```

Se preferir, em vez de clonar, baixe o ZIP pelo botão **Code → Download ZIP** no GitHub, extraia e abra a pasta no terminal.

> Dica: evite colocar o projeto dentro de uma pasta sincronizada pelo OneDrive. A pasta `node_modules` tem milhares de arquivos e deixa tudo lento.

### 3. Instale as dependências

```bash
npm install
```

A pasta `node_modules` não vem no repositório; este comando a cria. Pode demorar alguns minutos.

### 4. Inicie o projeto

```bash
npm start
```

O navegador abre sozinho em **http://localhost:3000**. Se não abrir, acesse esse endereço manualmente. A página atualiza sempre que você salva um arquivo.

Para parar o servidor, aperte `Ctrl + C` no terminal.

### 5. (Opcional) Gere a versão de produção

```bash
npm run build
```

Os arquivos otimizados ficam na pasta `build`.

## Personalizando

Edite o arquivo `src/data/contato.js` para trocar o nome, o e-mail e o número de WhatsApp do site. O número deve ficar no formato `55` + DDD + número, apenas com dígitos (exemplo: `5511999999999`). Enquanto for o número de exemplo, o botão do WhatsApp não leva a uma conversa real.

Os serviços, preços e imagens ficam em `src/pages/Servicos/Servicos.js` e `src/assets/`.

## Problemas comuns

| Problema | O que fazer |
|---|---|
| `node` ou `npm` "não é reconhecido" | Feche e abra o terminal. Se continuar, reinstale o Node.js e marque a opção de adicionar ao PATH. |
| PowerShell diz que a execução de scripts está desabilitada | Rode `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` e tente de novo. |
| A porta 3000 já está em uso | Aceite a sugestão do terminal para usar outra porta, ou rode `npm start` depois de fechar o programa que usa a 3000. |
| `npm install` falha ou fica travado | Apague a pasta `node_modules` e o arquivo `package-lock.json`, e rode `npm install` de novo. |
| Aviso de vulnerabilidades no `npm install` | Esperado no Create React App. As vulnerabilidades apontadas estão nas ferramentas de build e não são incluídas no site publicado. |

## Scripts disponíveis

| Comando | O que faz |
|---|---|
| `npm start` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Gera a versão otimizada para publicação. |
| `npm test` | Executa os testes (o projeto ainda não tem testes). |

## Segurança

O site é estático, sem servidor nem banco de dados. Os dados digitados no formulário não vão para o HTML: eles só entram na URL do WhatsApp, já codificados. O arquivo `public/_headers` traz cabeçalhos de segurança que valem em Netlify e Cloudflare Pages; em outras hospedagens, o mesmo conteúdo precisa ser configurado na própria plataforma.
