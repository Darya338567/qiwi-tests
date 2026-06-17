import { test, expect } from '@playwright/test';

test('Balance is positive', async ({ request }) => {
  const response = await request.get('/person-profile/v1/profile/current');
  const body = await response.json();
  const balances = body.data.balances;
  const rubBalance = balances.find(b => b.currency === '643');
  expect(rubBalance.amount).toBeGreaterThan(0);
});