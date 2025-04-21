import { test } from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage.js'
import { LogoutPage } from '../pageObjects/LogoutPage.js'

    test('Logout User', async ({browser}) => {
        const context = await browser.newContext()
        const page = await context.newPage()
        const login = new LoginPage(page)
        const logout = new LogoutPage(page)
        await login.navigateToHomePage()
        await login.login('naima@yopmail.com', '123456')
        await login.successLogin()
        await logout.logout()

    })

    