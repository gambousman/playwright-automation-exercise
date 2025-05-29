import { test } from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage.js'

let login
test.beforeEach(async ({ browser }) => {
    const page = await browser.newPage();
    login = new LoginPage(page);
    await login.navigateToHomePage();
  });

test.describe('Login Module',() => {
    
    test('Login user with incorrect email and password', async ({page}) => {
        await login.login('naima@yopmail.com', '12345')
        await login.errorLogin()

    })

    test('Login user with correct email and password', async ({page}) => {
        await login.login('naima@yopmail.com', '123456')
        await login.successLogin()
   
    })
})