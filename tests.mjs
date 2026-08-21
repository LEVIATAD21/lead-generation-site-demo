import assert from 'node:assert/strict';
import { getRequestErrors, normalizeRequest, services, validateRequest } from './app.mjs';

const validRequest = { name: 'Lia', email: 'LIA@demo.dev', service: services[0], consent: 'on' };

assert.deepEqual(normalizeRequest(validRequest), { name: 'Lia', email: 'lia@demo.dev', service: services[0], consent: true, website: '' });
assert.equal(validateRequest(validRequest), true);
assert.equal(validateRequest({ ...validRequest, consent: undefined }), false);
assert.equal(validateRequest({ ...validRequest, email: 'invalido' }), false);
assert.equal(validateRequest({ ...validRequest, service: 'Serviço inexistente' }), false);
assert.equal(validateRequest({ ...validRequest, website: 'https://spam.invalid' }), false);
assert.deepEqual(getRequestErrors({ ...validRequest, website: 'spam' }), ['Não foi possível validar esta solicitação.']);

console.log('lead-generation-site-demo: testes aprovados');
