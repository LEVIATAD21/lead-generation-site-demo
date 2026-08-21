# Site Institucional de Geração de Contatos

> **Demo de portfólio independente.** Não representa trabalho contratado, dados de cliente, integração produtiva ou resultado comercial.

Demo de site institucional com serviços demonstrativos e formulário de solicitação. A interface valida os campos no navegador, exige consentimento e não transmite, armazena ou exibe os dados preenchidos após a confirmação.

## Funcionalidades demonstradas

- Serviços e cobertura ilustrativos, identificados como conteúdo de demonstração.
- Formulário com rótulos, foco visível, validação acessível e consentimento obrigatório.
- Campo honeypot invisível para reduzir envios automatizados simples.
- Tela de confirmação local sem integração, envio ou persistência de dados.

## Executar e revisar

```bash
npm test
npm run review
```

Os testes cobrem normalização, consentimento, e-mail, seleção de serviço e rejeição pelo honeypot. A revisão estática confere os arquivos obrigatórios, a identificação de demo, a ausência de arquivos de ambiente, a ausência de execução dinâmica e a ausência de chamadas externas.

## Limites

Dados, contatos e números apresentados pela interface são estritamente ilustrativos. Integrações, pagamento, hospedagem, banco de dados e dados de terceiros exigem escopo e autorização próprios.
