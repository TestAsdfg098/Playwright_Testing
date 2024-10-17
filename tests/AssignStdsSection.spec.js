import { test, expect } from '@playwright/test';

test('Asign Sections to Student', async ({ page }) => {
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
  await page.getByRole('row', { name: '1 ---- AssignToExam(17/10/' }).getByRole('link').nth(2).click();
  await page.getByRole('link', { name: 'Assign Student(s) to Exam' }).click();
  await page.getByRole('row', { name: 'Not assigned To Sections	لم يتم تخصيصه للشعب	---	8	0 '}).getByRole('checkbox').check();
  await page.getByRole('link', { name: 'Show Students from Selected' }).click();
  await page.getByRole('row', { name: 'Sr No. Section Image Student' }).getByRole('checkbox').check();
  await page.locator('div').filter({ hasText: /^CONFIRMATION$/ }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.pause();

});
