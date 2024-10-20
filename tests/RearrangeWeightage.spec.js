import { Rearange Weightage, expect } from '@playwright/test';

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
  await page.getByRole('link', { name: 'Post Exam' }).click();
  await page.getByRole('link', { name: 'Re-Arrange Weightage' }).click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('37');
  await page.getByRole('link', { name: 'Re-Arrange Weightage' }).click();
  await page.locator('div').filter({ hasText: /^OK$/ }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('link', { name: 'Re-Arrange Weightage' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.pause()
});