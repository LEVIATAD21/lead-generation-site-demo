export const services = ['Diagnóstico inicial', 'Planejamento técnico', 'Acompanhamento remoto'];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeRequest(data = {}) {
  return {
    name: String(data.name ?? '').trim(),
    email: String(data.email ?? '').trim().toLowerCase(),
    service: String(data.service ?? ''),
    consent: data.consent === 'on' || data.consent === true,
    website: String(data.website ?? '').trim(),
  };
}

export function getRequestErrors(data) {
  const request = normalizeRequest(data);
  if (request.website) return ['Não foi possível validar esta solicitação.'];

  const errors = [];
  if (request.name.length < 2) errors.push('Informe um nome com pelo menos 2 caracteres.');
  if (!emailPattern.test(request.email)) errors.push('Informe um e-mail válido.');
  if (!services.includes(request.service)) errors.push('Escolha um serviço disponível.');
  if (!request.consent) errors.push('Confirme o consentimento para a validação local.');
  return errors;
}

export function validateRequest(data) {
  return getRequestErrors(data).length === 0;
}

function formMarkup() {
  return `<form id="request" class="stack" novalidate><label class="field" for="request-name">Nome<span aria-hidden="true"> *</span><input id="request-name" name="name" autocomplete="name" required aria-describedby="request-message"></label><label class="field" for="request-email">E-mail<span aria-hidden="true"> *</span><input id="request-email" name="email" type="email" autocomplete="email" inputmode="email" required aria-describedby="request-message"></label><label class="field" for="request-service">Serviço de interesse<select id="request-service" name="service" required>${services.map((service) => `<option value="${service}">${service}</option>`).join('')}</select></label><div class="honeypot" aria-hidden="true"><label for="request-website">Website<input id="request-website" name="website" type="text" tabindex="-1" autocomplete="off"></label></div><label class="consent"><input type="checkbox" name="consent" required aria-describedby="request-message"> <span>Concordo com o uso local destes dados apenas para esta demonstração.</span></label><button class="button" type="submit">Validar solicitação</button><p id="request-message" class="muted" aria-live="polite"></p></form>`;
}

function confirmationMarkup() {
  return `<div class="confirmation" role="status"><p class="eyebrow">Validação concluída</p><h2>Solicitação preparada localmente</h2><p class="muted">A demonstração conferiu os campos, mas não enviou, armazenou ou exibiu os dados informados.</p><button class="button" type="button" data-new-request>Fazer nova validação</button></div>`;
}

export function mount(root) {
  let confirmed = false;

  const render = () => {
    root.innerHTML = `<section class="hero"><article class="hero-card"><p class="eyebrow">Institucional demonstrativo</p><h1>Um caminho simples entre entender o serviço e pedir orçamento.</h1><p class="lede">Estrutura de geração de contatos com consentimento explícito, validação local e proteção básica contra envios automatizados. Não envia dados nem representa uma empresa existente.</p></article><aside class="hero-card"><p class="eyebrow">Cobertura ilustrativa</p><h2>Atendimento remoto e regional</h2><p class="muted">Áreas e serviços devem ser definidos pelo responsável real.</p></aside></section><section class="grid two"><article class="card"><p class="eyebrow">Escopo</p><h2>Serviços</h2><div class="list">${services.map((service) => `<div class="item"><b>${service}</b><br><span class="muted">Descrição demonstrativa e revisável.</span></div>`).join('')}</div></article><article class="card"><p class="eyebrow">Contato demonstrativo</p>${confirmed ? confirmationMarkup() : `<h2>Solicitar conversa</h2><p class="muted">Campos marcados com * são obrigatórios. Nenhuma informação será transmitida.</p>${formMarkup()}`}</article></section>`;

    const form = root.querySelector('#request');
    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.currentTarget));
        const errors = getRequestErrors(data);
        const message = root.querySelector('#request-message');
        if (errors.length) {
          message.className = 'result error';
          message.setAttribute('role', 'alert');
          message.innerHTML = `<b>Revise a solicitação:</b><br>${errors.join('<br>')}`;
          return;
        }
        confirmed = true;
        render();
      });
    }

    root.querySelector('[data-new-request]')?.addEventListener('click', () => {
      confirmed = false;
      render();
    });
  };

  render();
}
