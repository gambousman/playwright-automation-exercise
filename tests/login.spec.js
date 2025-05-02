import { test } from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage.js'


test.describe('Login Module',() => {
    
    test('Login user with incorrect email and password', async ({page}) => {
        const login = new LoginPage(page)
        await login.navigateToHomePage()
        await login.login('naima@yopmail.com', '12345')
        await login.errorLogin()

    })

    test('Login user with correct email and password', async ({page}) => {
        const login = new LoginPage(page)
        await login.navigateToHomePage()
        await login.login('naima@yopmail.com', '123456')
        await login.successLogin()
   
    })
})