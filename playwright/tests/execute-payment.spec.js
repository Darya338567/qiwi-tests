import { test, expect } from '@playwright/test';

test('Execute payment (verify last transaction)', async ({ request }) => {
  const response = await request.get(`/payment-history/v2/persons/${process.env.WALLET}/payments`, {
    params: { rows: 1, operation: 'OUT' }
  });
  expect(response.status()).toBe(200);
  const body = await response.json();
  const payments = body.data;
  expect(payments.length).toBeGreaterThan(0);
  const last = payments[0];
  expect(last.status).toBe('SUCCESS');
  expect(last.sum.amount).toBe(1);
});