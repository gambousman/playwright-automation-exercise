import { test, expect } from '@playwright/test';

    test('Logout User', async ({browser}) => {
        const context = await browser.newContext()
        const page = await context.newPage()
        await page.goto('https://automationexercise.com/')
        await expect(page.getByRole('link', { name: 'Signup / Login' })).toBeVisible()
        await page.getByRole('link', { name: 'Signup / Login' }).click()
        await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible()
        await page.locator('[data-qa="login-email"]').fill('naima@yopmail.com')
        await page.locator('[data-qa="login-password"]').fill('123456')
        await page.locator('[data-qa="login-button"]').click()
        await expect(page.locator('ul li:nth-child(10)')).toContainText('Logged in as Ameesh')
        await page.getByRole('link', { name: 'Logout' }).click()
        await expect (page.locator('.login-form h2')).toContainText('Login to your account')

    })

    