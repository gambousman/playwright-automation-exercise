import { test, expect } from '@playwright/test';
const { faker } = require('@faker-js/faker');


test.describe('User Registration Module', () => {


    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext()
        const page = await context.newPage()
    })
    test('Register User With Existing Email', async ({ page}) => {
        await page.goto('https://automationexercise.com/')
        await expect(page.getByRole('link', { name: 'Signup / Login' })).toBeVisible()
        await page.getByRole('link', { name: 'Signup / Login' }).click()
        await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible()
        await page.getByPlaceholder('Name').fill('John Doe')
        await page.locator('[data-qa="signup-email"]').fill('gambo@yopmail.com')
        await page.getByRole('button', { name: 'Signup' }).click()
        await expect(page.locator('.signup-form p')).toContainText('Email Address already exist!')

    })

    test('Register User', async ({page}) => {
        await page.goto('https://automationexercise.com/')
        await expect(page.getByRole('link', { name: 'Signup / Login' })).toBeVisible()
        await page.getByRole('link', { name: 'Signup / Login' }).click()
        await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible()
        await page.getByPlaceholder('Name').fill('John Doe')
        await page.fill('[data-qa="signup-email"]', faker.internet.email())
        await page.getByRole('button', { name: 'Signup' }).click()
        await expect(page.getByRole('heading', { name: 'Enter Account Information' })).toBeVisible()
        await page.getByRole('radio', { name: 'Mr.' }).check()
        await page.locator('#password').fill('123456')
        await page.locator('#days').selectOption('1')
        await page.locator('#months').selectOption('January')
        await page.locator('#years').selectOption('2004')
        await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check()
        await page.getByRole('checkbox', { name: 'Receive special offers from our partners!' }).check()
        await page.locator('#first_name').fill('John')
        await page.locator('#last_name').fill('Doe')
        await page.locator('#company').fill('Tech Company')
        await page.locator('#address1').fill('123 Main St')
        await page.locator('#country').selectOption('United States')
        await page.locator('#state').fill('California')
        await page.locator('#city').fill('Los Angeles')
        await page.locator('#zipcode').fill('90001')
        await page.locator('#mobile_number').fill('1234567890')
        await page.getByRole('button', { name: 'Create Account' }).click()
        await expect(page.getByRole('heading', { name: 'Account Created!' })).toBeVisible()
        await page.locator('[data-qa="continue-button"]').click()
        await expect(page.locator('ul li:nth-child(10)')).toContainText('Logged in as John Doe')
        // await page.getByRole('link', { name: 'Delete Account' }).click()
        // await expect(page.getByRole('heading', { name: 'Account Deleted!' })).toBeVisible()
        // await page.getByRole('button', { name: 'Continue' }).click()



        // await page.pause()
    })
})

































