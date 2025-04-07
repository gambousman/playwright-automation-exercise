import { test, expect } from '@playwright/test';

test.describe('Login Module', () => {


    test.beforeEach(async ({browser}) => {
        const context = await browser.newContext()
        const page = await context.newPage()
    })

    test('Login user with incorrect email and password', async ({page}) => {
        await page.goto('https://automationexercise.com/')
        await expect(page.getByRole('link', { name: 'Signup / Login' })).toBeVisible()
        await page.getByRole('link', { name: 'Signup / Login' }).click()
        await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible()
        await page.locator('[data-qa="login-email"]').fill('gambo@yopmail.com')
        await page.locator('[data-qa="login-password"]').fill('12345')
        await page.locator('[data-qa="login-button"]').click()
        await expect(page.locator('.login-form p')).toContainText('Your email or password is incorrect!')

    })

    test.only('Login user with correct email and password', async ({page}) => {
        await page.goto('https://automationexercise.com/')
        expect(page.getByRole('link', { name: 'Signup / Login' })).toBeVisible()
        await page.getByRole('link', { name: 'Signup / Login' }).click()
        await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible()
        await page.locator('[data-qa="login-email"]').fill('naima@yopmail.com')
        await page.locator('[data-qa="login-password"]').fill('123456')
        await page.locator('[data-qa="login-button"]').click()
        await expect(page.locator('ul li:nth-child(10)')).toContainText('Logged in as Ameesh')
        await page.getByRole('link', { name: 'Delete Account' }).click()
        await expect(page.getByRole('heading', { name: 'Account Deleted!' })).toBeVisible()

    })
})