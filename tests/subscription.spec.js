import { test, expect } from '@playwright/test';

test.describe('Verify Subscription', () => {


    test.beforeEach(async ({browser}) => {
        const context = await browser.newContext()
        const page = await context.newPage()
    })

    test('Verify Subscription in Home page', async ({page}) => {
        await page.goto('https://automationexercise.com/')
        await expect(page.getByRole('link', { name: 'Signup / Login' })).toBeVisible()
        await expect(page.locator('.single-widget h2')).toHaveText('Subscription')
        await page.locator('#susbscribe_email').fill('naima1905@gmail.com')
        await page.locator('#subscribe').click()
        const successMessage = page.locator('.alert-success')
        await expect(successMessage).toContainText('You have been successfully subscribed!')
        console.log(successMessage)

    })

    test('Verify Subscription in Cart page', async ({page}) => {
        await page.goto('https://automationexercise.com/')
        await expect(page.getByRole('link', { name: 'Signup / Login' })).toBeVisible()
        await page.getByRole('link', { name: 'Cart' }).click()
        await expect(page.locator('.single-widget h2')).toHaveText('Subscription')
        await page.locator('#susbscribe_email').fill('naima1905@gmail.com')
        await page.locator('#subscribe').click()
        const successMessage = page.locator('.alert-success')
        await expect(successMessage).toContainText('You have been successfully subscribed!')
        console.log(successMessage)

    })
})