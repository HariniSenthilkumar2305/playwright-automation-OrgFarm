import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://orgfarm.store/');
  await page.getByRole('textbox', { name: 'Enter pincode' }).click();
  await page.getByRole('textbox', { name: 'Enter pincode' }).fill('600097');
  await page.getByRole('button', { name: 'Check' }).click();
  await page.getByRole('button', { name: 'Shop now!' }).click();
  const productButtons = page.locator('[id^="quick-add-"]').getByRole('button', { name: '+ Cart' });
  const productCount = await productButtons.count();
  const randomIndex = Math.floor(Math.random() * productCount);
  await productButtons.nth(randomIndex).click();
  await page.getByRole('link', { name: 'Cart 1 item' }).click();
  await page.getByRole('textbox', { name: 'Select delivery date' }).click();

const tomorrow = new 
Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const nextDate = tomorrow.getDate().toString();

await page.locator(`td.day:not(.old):not(.disabled):has-text("${nextDate}")`).click();
  await page.locator('select').selectOption('07:00AM-01:00PM');
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.locator('#customer-email').fill('TestOrgFarm@yopmail.com');
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Test@123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Mobile phone number' }).click();
  await page.getByRole('textbox', { name: 'Mobile phone number' }).fill('+91 86754 23333');
  await page.locator('div').filter({ hasText: /^Cash on Delivery \(COD\)$/ }).nth(1).click();
  await page.getByRole('button', { name: 'Complete order' }).click();
  await page.getByRole('link', { name: 'View account' }).click();
  await page.getByRole('button', { name: 'Cancel', exact: true }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();
});