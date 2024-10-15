import { test, expect } from '@playwright/test';

test('Login and Export Exam Results', async ({ page }) => {
  test.setTimeout(60000);  // Set timeout to 60 seconds
  
  // Navigate to the login page
  await page.goto('https://dev2.innotech-sa.com/AssessmentSystemV2/Master/System/UserManager/Login');
  
  // Fill in the username and password
  await page.getByPlaceholder('User name').click();
  await page.getByPlaceholder('User name').fill('ca_kingfaisal');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Asdfg098@');
  await page.getByRole('button', { name: 'Login' }).click();

  // Navigate through the app to the Export section
  await page.getByRole('link', { name: 'Exam Management' }).click();
  await page.getByRole('link', { name: 'Manage Exams' }).click();
  await page.getByRole('link', { name: 'Post Exam' }).first().click();
  await page.getByRole('link', { name: 'View Result', exact: true }).click();
  await page.getByRole('link', { name: 'Export' }).click();

  // Handling export
  const page1Promise = page.waitForEvent('popup');  // Waiting for the popup to open
  await page.getByRole('button', { name: 'Export' }).click();
  const page1 = await page1Promise;  // Getting the popup page
  await page1.getByLabel('Export To').locator('div').nth(4).click();
  
  const downloadPromise = page1.waitForEvent('download');
  await page1.getByText('PDF', { exact: true }).click();
  const download = await downloadPromise;
  await page1.getByLabel('Export To').locator('div').nth(4).click();
  const download1Promise = page1.waitForEvent('download');
  await page1.getByText('XLS', { exact: true }).click();
  const download1 = await download1Promise;
  await page1.getByLabel('Export To').locator('div').nth(4).click();
  const download2Promise = page1.waitForEvent('download');
  await page1.getByText('XLSX', { exact: true }).click();
  const download2 = await download2Promise;
  await page1.getByLabel('Export To').locator('div').nth(4).click();
  const download3Promise = page1.waitForEvent('download');
  await page1.getByText('DOCX', { exact: true }).click();
  const download3 = await download3Promise;

  // Pause for debugging if needed
  await page1.pause();  // Fixed: added parentheses to pause
});
