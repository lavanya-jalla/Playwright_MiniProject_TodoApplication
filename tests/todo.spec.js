import { test, expect } from '@playwright/test';

test('to do application @sanity', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').fill('buy vegetables');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('walking');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('rest');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('reading');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'walking' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'rest' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Active' }).click();
  await expect(page.getByText('reading')).toBeVisible();
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('dancing');
  await page.getByTestId('text-input').press('Enter');
  await expect(page.getByTestId('todo-list')).toContainText('buy vegetables');
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Clear completed' }).click();
  await expect(page.getByTestId('todo-list').getByRole('listitem')).toHaveCount(2);
});