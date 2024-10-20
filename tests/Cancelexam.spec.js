import { test, expect } from '@playwright/test';

test('Cancel Exam', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://dev2.innotech-sa.com/AssessmentSystemV2/Master/System/UserManager/Login');
  
  // Fill in the username and password
  await page.getByPlaceholder('User name').click();
  await page.getByPlaceholder('User name').fill('ca@ar.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Asdfg098@');
  
  // Click the login button
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Exam Management' }).click();
  await page.getByRole('link', { name: 'Manage Exams' }).click();
  await page.getByRole('row', { name: '1 ---- Offline exam Android (' }).getByRole('img').click();
  await page.getByRole('link', { name: 'Set Status' }).click();
  await page.getByRole('link', { name: 'Update Status' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.pause()
});