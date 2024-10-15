import { test, expect } from '@playwright/test';

test('Login test and Add User', async ({ page }) => {
  test.setTimeout(60000);  // Set timeout to 60 seconds
  
  // Navigate to the login page
  await page.goto('https://dev2.innotech-sa.com/AssessmentSystemV2/Master/System/UserManager/Login');
  
  // Fill in the username and password
  await page.getByPlaceholder('User name').click();
  await page.getByPlaceholder('User name').fill('ca_kingfaisal');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Asdfg098@');
  
  // Click the login button
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'User Management' }).click();
  await page.getByRole('link', { name: 'Manage User' }).click();
  await page.getByRole('link', { name: 'Add New User' }).click();
  await page.getByPlaceholder('Type User Name').click();
  await page.getByPlaceholder('Type User Name').fill('ca25@gmail.com');
  await page.getByPlaceholder('********').first().click();
  await page.getByPlaceholder('********').first().fill('Asdfg098@');
  await page.getByPlaceholder('********').nth(1).click();
  await page.getByPlaceholder('********').nth(1).fill('Asdfg098@');
  await page.getByPlaceholder('Type User Name').click();
  await page.getByPlaceholder('Type Your Email').click();
  await page.getByPlaceholder('Type Your Email').fill('import { test, expect } from \'@playwright/test\';  test(\'Login test\', async ({ page }) => {   test.setTimeout(60000);  // Set timeout to 60 seconds      // Navigate to the login page   await page.goto(\'https://dev2.innotech-sa.com/AssessmentSystemV2/Master/System/UserManager/Login\');      // Fill in the username and password   await page.getByPlaceholder(\'User name\').click();   await page.getByPlaceholder(\'User name\').fill(\'ca_kingfaisal\');   await page.getByPlaceholder(\'Password\').click();   await page.getByPlaceholder(\'Password\').fill(\'Asdfg098@\');      // Click the login button   await page.getByRole(\'button\', { name: \'Login\' }).click();      // Optional: Pause the test for debugging   await page.pause();  // Fix: Missing parentheses to invoke the function });');
  await page.getByPlaceholder('Type Your Email').press('ControlOrMeta+a');
  await page.getByPlaceholder('Type Your Email').fill('ca20@gmail.com');
  await page.locator('a').filter({ hasText: 'Select an option' }).click();
  await page.waitForTimeout(10000);
  await page.locator('#ddlSalutation_chosen').getByText('Mrs.').click();
  await page.getByPlaceholder('Type Your Full Name (Primary').click();
  await page.getByPlaceholder('Type Your Full Name (Primary').fill('ca20@gmail.com');
  await page.getByPlaceholder('Type Your Full Name (Secondary Language)').click();
  await page.getByPlaceholder('Type Your Full Name (Secondary Language)').fill('ca@gmail.com');
  await page.getByPlaceholder('Type Mobile No').click();
  await page.getByPlaceholder('Type Mobile No').fill('89498489984');
  await page.getByRole('link', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  
  // Optional: Pause the test for debugging
  await page.pause();  // Fix: Missing parentheses to invoke the function



});
