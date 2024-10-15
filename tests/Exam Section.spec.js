import { test, expect } from '@playwright/test';

test('Multi Files', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://dev2.innotech-sa.com/AssessmentSystemV2/Master/System/UserManager/Login');
  
  // Fill in the username and password
  await page.getByPlaceholder('User name').click();
  await page.getByPlaceholder('User name').fill('ca_kingfaisal');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Asdfg098@');
  
  // Click the login button
  await page.getByRole('button', { name: 'Login' }).click();

  // Navigate through the application
  await page.getByRole('link', { name: 'Exam Management' }).click();
  await page.getByRole('link', { name: 'Manage Exams' }).click();
  await page.getByPlaceholder('Search by Exam Title').click();
  await page.getByPlaceholder('Search by Exam Title').fill('Line');
  await page.getByPlaceholder('Search by Exam Title').press('Enter');
  
  // Post Exam and View Results
  await page.getByRole('link', { name: 'Post Exam' }).first().click();
  await page.getByRole('link', { name: 'View Result', exact: true }).click();
  await page.getByRole('link', { name: 'Export' }).click();
  await page.waitForTimeout(6000);

  // Ensure 'Exam Section Distribution' is clickable
  await page.waitForSelector('text=Exam Section Distribution');
  await page.getByText('Exam Section Distribution').click();
  await page.waitForTimeout(6000);
  
  // Interact with multiple files section
  await page.getByRole('radio', { name: 'Multiple files' }).check();
  await page.waitForTimeout(5000);

  const page1Promise = page.waitForEvent('popup');  // Waiting for the popup to open
  await page.getByRole('button', { name: 'Export' }).click();
  const page1 = await page1Promise;  // Getting the popup page
  await page1.getByLabel('Export To').locator('div').nth(4).click();
  
  const downloadPromise = page1.waitForEvent('download');
  await page1.getByText('PDF', { exact: true }).click();
  const download = await downloadPromise;








//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('button', { name: 'Export' }).click();
//   await page.waitForTimeout(5000);
//   const page1 = await page1Promise;
//   await page1.locator('.dxrd-preview-export-toolbar-item > .dx-accessibility-toolbar-item').click();
//   const downloadPromise = page1.waitForEvent('download');
//   await page.waitForTimeout(5000);
//   await page1.getByTitle('PDF', { exact: true }).click();
//   const download = await downloadPromise;
 });

