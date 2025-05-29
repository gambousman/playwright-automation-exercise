import { test } from '@playwright/test';
const { faker } = require('@faker-js/faker');
import { RegisterPage } from '../pageObjects/RegisterPage.js'

let register
test.beforeEach(async ({ browser }) => {
    const page = await browser.newPage();
    register = new RegisterPage(page)
    await register.navigateToHomePage();
    await register.clickSignUpLink()
});

test.describe('User Registration Module', () => {
    test('Register User With Existing Email', async ({ page }) => {
        
        await register.register('Nana', 'naima@yopmail.com')
        await register.errorMsg()

    })

    test('Register User', async ({ page }) => {
       
        await register.register('Nana', faker.internet.email())
        await register.fillAccountInformation('123456', '1', 'January', '2004', 'Nana', 'Doe', 'Tech Company', '123 Main St', 'United States', 'California', 'Los Angeles', '90001', '1234567890')

    })
})

































