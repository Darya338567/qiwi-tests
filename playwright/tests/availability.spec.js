import { test, expect } from '@playwright/test';

test('Service availability', async ({ request }) => {
  const response = await request.get('/person-profile/v1/profile/current');
  expect(response.status()).toBe(200);
  expect(response.headers()['content-type']).toContain('application/json');
  const body = await response.json();
  expect(body).toHaveProperty('data');
});