import { test, expect } from '@playwright/test';

test('Result Published and On Hold', async ({ page }) => {
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
  await page.getByPlaceholder('Search by Exam Title').fill('Furqan  Exam checker (14 Oct 24)');
  await page.getByPlaceholder('Search by Exam Title').press('Enter')
  await page.getByRole('img', { name: 'ExamLinks' }).nth(3).click();
  
  let text1= await page.getByRole('link', { name: 'Publish Result (On-Hold)' })
  let text2= await page.getByRole('link', { name: 'Publish Result' })

   if (text1=='Publish Result (On-Hold') {
    await page.waitForTimeout(7000);
    await page.getByRole('link', { name: 'Publish Result (On-Hold)' }).click()
    await page.getByRole('button', { name: 'Published' }).click();
    await page.getByRole('link', { name: 'Save' }).click();
    await page.getByRole('button', { name: 'Yes' }).click();
    
}
   else if(text2){
    await page.waitForTimeout(7000);
    await page.getByRole('link', { name: 'Publish Result'}).click()
    await page.getByRole('radio', { name: 'On-Hold' }).click(); 
    await page.getByRole('link', { name: 'Save' }).click();
    await page.getByRole('button', { name: 'Yes' }).click();
}
   else{
     console.log('Result Published');
}
await page.pause();  
});
 

