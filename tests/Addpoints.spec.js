import { test, expect } from '@playwright/test';

test('Add Points', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://dev2.innotech-sa.com/AssessmentSystemV2/Master/System/UserManager/Login');
  
  // Fill in the username and password
  await page.getByPlaceholder('User name').click();
  await page.getByPlaceholder('User name').fill('ca@ar.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Asdfg098@');
  
  // Click the login button
  await page.getByRole('button', { name: 'Login' }).click();

  // Navigate through the application
  await page.getByRole('link', { name: 'Exam Management' }).click();
  await page.getByRole('link', { name: 'Manage Exams' }).click();
  await page.getByPlaceholder('Search by Exam Title').click();
  await page.getByPlaceholder('Search by Exam Title').fill('Test Exam (15 march 23)');
  await page.getByPlaceholder('Search by Exam Title').press('Enter');
  await page.getByRole('link', { name: 'Post Exam' }).click();
  await page.getByRole('link', { name: 'Adjust Result' }).click();
  //Add Points
  await page.locator('.highcharts-point').first().click();
  await page.getByRole('button', { name: 'Add Points' }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.pause();

 });

