import { test, expect } from '@playwright/test';
test('Exclude Item', async ({ page }) => {
    test.setTimeout(60000);  // Set timeout to 60 seconds
    
    // Navigate to the login page
    await page.goto('https://dev2.innotech-sa.com/AssessmentSystemV2/Master/System/UserManager/Login');
    
    // Fill in the username and password
    await page.getByPlaceholder('User name').click();
    await page.getByPlaceholder('User name').fill('ca_kingfaisal');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('Asdfg098@');
    
    // Click the login button
    await page.getByRole('button', { name: 'Login' }).click()
    await page.getByRole('link', { name: 'Exam Management' }).click();
    await page.goto('https://dev2.innotech-sa.com/AssessmentSystemV2/Master/System/AssessmentSession/SessionList');
    await page.getByPlaceholder('Search by Exam Title').click();
    await page.getByPlaceholder('Search by Exam Title').fill('Adjust Result');
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    await page.getByRole('link', { name: 'Post Exam' }).first().click();
    await page.getByRole('link', { name: 'Adjust Result' }).click();
    await page.locator('.highcharts-point').first().click();
    await page.getByRole('button', { name: 'Exclude' }).click();
    await page.getByRole('button', { name: 'Proceed' }).click();
    await page.getByRole('button', { name: 'OK' }).click();

    await page.pause ()
  });
   
    
