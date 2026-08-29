# Site Institucional de Geração de Contatos

> **Demo de portfólio independente.** Não representa trabalho contratado, dados de cliente, integração produtiva ou resultado comercial.

Demo de site institucional com serviços demonstrativos e formulário de solicitação. A interface valida os campos no navegador, exige consentimento e não transmite, armazena ou exibe os dados preenchidos após a confirmação.

## Funcionalidades demonstradas

- Serviços e cobertura ilustrativos, identificados como conteúdo de demonstração
- Formulário com rótulos, foco visível, validação acessível e consentimento obrigatório
- Campo honeypot invisível para reduzir envios automatizados simples
- Tela de confirmação local sem integração, envio ou persistência de dados
- Design responsivo para dispositivos móveis
- Interface acessível com suporte a leitores de tela

## Segurança

- Honeypot contra bots: campo oculto detecta envios automatizados
- Validação client-side: todos os campos são validados antes do envio
- Sem armazenamento de dados: informações não são salvas em servidor
- Sem requisições externas: formulário processado localmente
- Consentimento obrigatório: usuário deve aceitar termos

## Tecnologias

- HTML5 semântico
- CSS3 com variáveis CSS
- JavaScript ES6+ (módulos nativos)
- Node.js para testes e revisão

## Estrutura do Projeto

```
lead-generation-site-demo/
├── index.html          # Página principal
├── styles.css          # Estilos da aplicação
├── app.mjs             # Lógica principal e formulário
├── main.mjs            # Ponto de entrada
├── tests.mjs           # Testes unitários
├── review.mjs          # Revisão estática de código
├── package.json        # Configuração do projeto
├── .gitignore          # Arquivos ignorados pelo Git
├── LICENSE             # Licença MIT
└── README.md           # Este arquivo
```

## Executar e revisar

```bash
# Instalar dependências (opcional)
npm install

# Executar testes
npm test

# Executar revisão estática
npm run review
```

## Testes

Os testes cobrem:
- Normalização de dados
- Validação de consentimento
- Validação de e-mail
- Seleção de serviço
- Rejeição pelo honeypot

## Revisão Estática

A revisão confere:
- Presença de todos os arquivos obrigatórios
- Identificação clara como demo
- Ausência de arquivos de ambiente (.env)
- Ausência de execução dinâmica
- Ausência de chamadas externas
- Não inclusão de processadores de pagamento

## Limites

- Dados e contatos são estritamente ilustrativos
- Formulário processado localmente, sem backend
- Projeto destinado a demonstração técnica para portfólio

## Autor

**Kawã Silva dos Santos**
- GitHub: [@leviatad21](https://github.com/LEVIATAD21)
- Estudante de Segurança da Informação

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
