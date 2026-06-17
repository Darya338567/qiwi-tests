import { test, expect } from '@playwright/test';

test('Create payment of 1 RUB', async ({ request }) => {
  const payload = {
    sum: { amount: 1, currency: '643' },
    paymentMethod: { type: 'Account', accountId: '643' },
    fields: { account: process.env.RECIPIENT },
    comment: 'Тестовый перевод 1 рубль'
  };
  const response = await request.post('/isinap/api/v2/terms/99/payments', {
    data: payload,
    headers: { 'Content-Type': 'application/json' }
  });
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body).toHaveProperty('id');
  expect(body.sum.amount).toBe(1);
});