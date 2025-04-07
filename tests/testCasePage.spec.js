import { test, expect } from '@playwright/test';

test('Logout User', async ({browser}) => {
        const context = await browser.newContext()
        const page = await context.newPage()
        await page.goto('https://automationexercise.com/')
        await expect(page.getByRole('link', { name: 'Signup / Login' })).toBeVisible()
        await page.getByRole('link', { name: 'Test Cases', exact: true }).click()
        await expect(page.locator('h2[class=\'title text-center\']')).toHaveText('Test Cases')

})