import { test } from '@playwright/test';
const { faker } = require('@faker-js/faker');
import { RegisterPage } from '../pageObjects/RegisterPage.js'


test.describe('User Registration Module', () => {


    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext()
        const page = await context.newPage()
    })
    test('Register User With Existing Email', async ({ page}) => {
        const register = new RegisterPage(page)
        await register.navigateToHomePage()
        await register.register('Nana','naima@yopmail.com')
        await register.errorMsg()

    })

    test('Register User', async ({page}) => {
        const register = new RegisterPage(page)
        await register.navigateToHomePage()
        await register.register('Nana', faker.internet.email())
        await register.fillAccountInformation('123456', '1', 'January', '2004', 'Nana', 'Doe', 'Tech Company', '123 Main St', 'United States', 'California', 'Los Angeles', '90001', '1234567890')

    })
})

































